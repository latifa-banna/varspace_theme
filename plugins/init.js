import StoreinoApp from 'vue/dist/vue.common.prod';

export default async function ({ $axios, $http, route, $tools, $storeino, store, app, redirect }, inject) {
  if (process.server) {
    // response
    let response = null;
    const req = app.context.req;

    // Set current domain
    store.state.domain = req.headers.host;
    if (req.headers.ip) {
      store.state.IP = req.headers.ip
    }

    // Get Settings
    try {
      if (req.body && req.body.preview) {
        store.state.isPreview = true;
        const body = { data: JSON.parse(req.body.preview.data), schema: JSON.parse(req.body.preview.schema) };
        response = await $http.post('/settings/current', body);
      } else {
        response = await $http.get('/settings/current');
      }
      store.state.settings = response.data;
    } catch (error) {
      if (error.response) throw "ERROR :: " + error.response.data;
      throw "ERROR :: INVALID TOKEN" + error;
    }

    // init Cart
    let cookies = $tools.cookieToObject(req.headers.cookie);
    const STOREINO_CART = cookies['STOREINO-CART'] ? cookies['STOREINO-CART'] : '[]';
    store.state.cart = JSON.parse(STOREINO_CART);

    // init Wishlist
    const STOREINO_WISHLIST = cookies['STOREINO-WISHLIST'] ? cookies['STOREINO-WISHLIST'] : '[]';
    store.state.wishlist = JSON.parse(STOREINO_WISHLIST);

    // Head Meta Tags
    const settings = store.state.settings;
    if (settings && settings.meta_tags && settings.meta_tags.length > 0) {
      for (const metaTag of settings.meta_tags) {
        const meta = { hid: metaTag[metaTag.type], [metaTag.type]: metaTag[metaTag.type], content: metaTag.content }
        store.state.seo.metaTags.push(meta);
      }
    }

    // Set Default currency And language
    if (!store.state.currency.code) {
      const { code, symbol } = settings.store_currencies.find(c => c.default) || settings.store_currencies[0];
      store.state.currency = { code, symbol };
    } else if (settings.store_currencies.find(c => c.code == store.state.currency.code)) store.state.currency.symbol = settings.store_currencies.find(c => c.code == store.state.currency.code).symbol;
    if (!store.state.language.code) {
      const { code, name } = settings.store_languages.find(c => c.default) || settings.store_languages[0];
      store.state.language = { code, name };
    }

    // Default apps
    try {
      store.state.apps = [];
      const response = await $storeino.apps.search({ only: ['name', 'route', 'placement', 'config'] });
      const names = response.data.results.map(app => app.route);
      const url = store.state.baseURL != 'https://api-stores.storeino.com/api' ? 'https://appstatic.storeino.world' : 'https://appstatic.storeino.com';
      const { data: objects } = await $http.get(`${url}/all/store`, { params: { names } });
      for (const app of response.data.results) {
        const loaded = objects.find(object => object.name === app.route);
        app.loaded = loaded;
        store.state.apps.push(app);
      }
    } catch (err) {
      this.$sentry.captureException(err)
    }
  } else {

    // client side
    const { LMap, LTileLayer, LMarker, LIcon } = require('vue2-leaflet');
    const cookies = $tools.cookieToObject(document.cookie);
    if (route.name == 'thanks') {
      if (cookies['ORDER_ID']) {
        document.cookie = 'ORDER_ID=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
        document.cookie = 'STOREINO-CART=[];path=/';
        store.state.cart = [];
      }
      else {
        window.location.href = '/';
        return false;
      }
    }

    // storino app
    StoreinoApp.$store = {
      search: async function (module, params) {
        let response = await $http.get(`/${module}/search`, { params });
        return response.data;
      },
      get: async function (module, params) {
        let response = await $http.get(`/${module}/get`, { params });
        return response.data;
      },
      create: async function (module, params, data) {
        let response = await $http.post(`/${module}/create`, data, { params });
        return response.data;
      },
      update: async function (module, params, data) {
        let response = await $http.post(`/${module}/update`, data, { params });
        return response.data;
      },
      customUpdate: async function (module, params, data, headers = {}) {
        let response = await $http.post(`/${module}/me`, data, { params, headers });
        return response.data;
      },
      invoke: async function (method,path,params = {},body = {}){
        let result;
        try {
            if (method === 'get' || method === 'delete') {
                result = await $http[method](`/${path}`, params);
            } else {
                result = await $http[method](`/${path}`, body, params);
            }
        } catch (error) {
            result = error.response ? error.response : { status: 500, data: error.message };
        }

        return result.data;
      }
    };

    // vue leflet
    StoreinoApp.component('l-map', LMap);
    StoreinoApp.component('l-icon', LIcon);
    StoreinoApp.component('l-tile-layer', LTileLayer);
    StoreinoApp.component('l-marker', LMarker);

    // add storeino app to window
    window.StoreinoApp = StoreinoApp;

    // inset settings
    const settings = store.state.settings;

    // Facebook pixel
    if (!store.state.isPreview && settings.facebook_multiple_pixel && settings.facebook_multiple_pixel.length > 0) {
      // Facebook Query
      if (route.query.fbclid) {
        localStorage.setItem('__fbc', `fb.1.${Date.now()}.${route.query.fbclid}`);
      }
      localStorage.setItem('__external_id', 'U' + Date.now());
      // facebook Function
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      // Facebook External Id
      window.external_id = localStorage.getItem('__external_id');
      // Facebook Setup Pixel
      settings.facebook_multiple_pixel.forEach(p => {
        if (p.active) {
          fbq.disablePushState = true;
          fbq('init', p.id);
        }
      });
      // Insert Facebook  Pixel To Window
      window._fbpx = app.context.$storeino.fbpx;
    }

    // Snapchat Pixel
    if (settings.snapchat_pixel && settings.snapchat_pixel.length > 0) {
      // Snapchat Function
      (function (e, t, n, tr) {
        if (e.snaptr) return;
        var a = e.snaptr = function () { a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments) };
        a.queue = [];
        e.snapPixel = function (id, email = "") { snaptr('init', id, { 'user_email': email }); }
        e.snapPageView = function (d = {}) { snaptr(tr, 'PAGE_VIEW', d); }
        e.snapPurchase = function (d = {}) { snaptr(tr, "PURCHASE", d) }
        e.snapViewContent = function (d = {}) { snaptr(tr, 'VIEW_CONTENT', d); }
        e.snapAddToCart = function (d = {}) { snaptr(tr, "ADD_CART", d); }
        e.snapAddToWishlist = function (d = {}) { snaptr(tr, "ADD_WISHLIST", d); }
        e.snapSignUp = function (d = {}) { snaptr(tr, 'SIGN_UP', d); }
        var s = 'script';
        var r = t.createElement(s);
        r.async = !0;
        r.src = n;
        var u = t.getElementsByTagName(s)[0];
        u.parentNode.insertBefore(r, u);
      })(window, document, 'https://sc-static.net/scevent.min.js', 'track');
      // Snapchat Setup Event
      for (const pixel of settings.snapchat_pixel) {
        if (pixel.active) {
          snapPixel(pixel.id, pixel.email);
        }
      }
    }

    // Twitter Pixel
    if (!app.context.store.state.isPreview && settings && settings.twitter_pixel && settings.twitter_pixel.length > 0) {
      // Twitter Pixel Function
      !function (e, t, n, s, u, a) {
        let i = '//static.ads-twitter.com/uwt.js';
        e.twq || (s = e.twq = function () {
          s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
        }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = i,
          a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a)
        )
        e.twitterPixel = function (id) { twq('init', id); }
        e.twitterPageView = function (d = {}) { twq('track', 'PageView'); }
        e.twitterViewContent = function (d = {}) { twq('track', "ViewContent", d); }
        e.twitterAddToCart = function (d = {}) { twq('track', "AddToCart", d); }
        e.twitterAddToWishlist = function (d = {}) { twq('track', "AddToWishlist", d); }
        e.twitterInitiateCheckout = function (d = {}) { twq('track', "InitiateCheckout", d); }
        e.twitterSearch = function (d = {}) { twq('track', "Search", d); }
        e.twitterAddPaymentInfo = function (d = {}) { twq('track', "AddPaymentInfo", d); }
        e.twitterSignup = function (d = {}) { twq('track', "Signup", d); }
        e.twitterCompleteRegistration = function (d = {}) { twq('track', "CompleteRegistration", d); }
        e.twitterDownload = function (d = {}) { twq('track', "Download", d); }
        e.twitterPurchase = function (d = {}) { twq('track', "Purchase", d); }
      }(window, document, 'script');
      // Setup Twitter Pixel
      settings.twitter_pixel.forEach(p => {
        if (p.active) {
          twitterPixel(p.id);
        }
      });
      // Twitter Purchase Pixel
      if (route.query.pixel) {
        const pixel = JSON.parse(route.query.pixel);
        twitterPurchase({
          content_ids: pixel.contents.map(p => { return p.id }),
          num_items: pixel.contents.length,
          content_type: 'product',
          value: pixel.total,
          currency: store.state.currency.code || "USD"
        });
      }
    }

    // TikTok Pixel
    if (settings.tiktok_pixel && settings.tiktok_pixel.length > 0) {
      // Tiktok Function
      !function (w, d, t) {
        w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)ttq.setAndDefer(e, ttq.methods[n]); return e }, ttq.load = function (e, n) {
          var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          if (settings.tiktok_pixel && settings.tiktok_pixel.length > 0) {
            ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a)
          }
        }
        w.tiktokPixel = function (id) { ttq.load(id); }
        w.tiktokPageView = function () { ttq.page(); }
        w.tiktokAddPaymentInfo = function (s = {}) { ttq.track('AddPaymentInfo', s); }
        w.tiktokAddToCart = function (s = {}) { ttq.track('AddToCart', s); }
        w.tiktokAddToWishlist = function (s = {}) { ttq.track('AddToWishlist', s); }
        w.tiktokClickButton = function (s = {}) { ttq.track('ClickButton', s); }
        w.tiktokPurchase = function (s = {}) { ttq.track('CompletePayment', s); }
        w.tiktokCompleteRegistration = function (s = {}) { ttq.track('CompleteRegistration', s); }
        w.tiktokViewContent = function (s = {}) { ttq.track('ViewContent', s); }
        w.tiktokSubscribe = function (s = {}) { ttq.track('Subscribe', s); }
        w.tiktokSubmitForm = function (s = {}) { ttq.track('SubmitForm', s); }
        w.tiktokSearch = function (s = {}) { ttq.track('Search', s); }
        w.tiktokPlaceAnOrder = function (s = {}) { ttq.track('PlaceAnOrder', s); }
        w.tiktokInitiateCheckout = function (s = {}) { ttq.track('InitiateCheckout', s); }
        w.tiktokDownload = function (s = {}) { ttq.track('Download', s); }
        w.tiktokContact = function (s = {}) { ttq.track('Contact', s); }
      }(window, document, 'ttq');
      // Set Tiktok Pixel
      for (const pixel of settings.tiktok_pixel) {
        if (pixel.active) {
          window.tiktokPixel(pixel.id);
        }
      }
      // Tiktok Purchase
      if (route.query.pixel) {
        const pixel = JSON.parse(route.query.pixel);
        window.tiktokPurchase({
          contents: pixel.contents.map(p => {
            return {
              content_id: p.id,
              content_type: 'product',
              content_name: p.name,
              quantity: p.quantity,
              price: p.price
            }
          }),
          value: pixel.total,
          currency: store.state.currency.code || "USD"
        });
      }
    }

    // LinkedIn Setup Function
    function getEvent(source, eventName) {
      let events = source.filter((e) => e.name == eventName)
      if (events && events.length > 0) {
        return events
      }
      return null
    }

    // LinkedIn Pixel
    if (settings.linkedin_pixel && settings.linkedin_pixel.id && settings.linkedin_pixel.events && settings.linkedin_pixel.events.length > 0) {
      // Linkedin Pixel Function
      !function (w, d, n) {
        settings.linkedin_pixel.events.forEach(element => {
          let _linkedin_partner_id = element.pId;
          w._linkedin_data_partner_ids = w._linkedin_data_partner_ids || [];
          w._linkedin_data_partner_ids.push(_linkedin_partner_id);
        });
        if (!w.lintrk) {
          w.lintrk = function (a, b) { w.lintrk.q.push([a, b]) };
          w.lintrk.q = []
        }
        var s = d.getElementsByTagName("script")[0];
        var b = d.createElement("script");
        b.type = "text/javascript"; b.async = true;
        b.src = n
        "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      }(window, document, "https://snap.licdn.com/li.lms-analytics/insight.min.js");
      // Set LinkedIn Events
      window.linkedInEvent = function (eventName) {
        let eventsGroup = getEvent(settings.linkedin_pixel.events, eventName)
        if (eventsGroup) {
          for (let index = 0; index < eventsGroup.length; index++) {
            const event = eventsGroup[index];
            window.lintrk('track', { conversion_id: event.value });
          }
        }
      }
      // LinkedIn Purchase
      if (route.name == 'thanks' && route.query.pixel) {
        window.linkedInEvent('purchase');
      }
    }

    // Google Ads
    if (settings.google_ads && settings.google_ads.id && settings.google_ads.events && settings.google_ads.events.length > 0) {
      // Google Ads Function
      (function (w, d, t) {
        var s = d.createElement(t); s.async = !0;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${settings.google_analytics_id}`;
        var h = d.getElementsByTagName('head')[0];
        h.appendChild(s);
        w.dataLayer = w.dataLayer || [];
        w.gtag = function gtag() { dataLayer.push(arguments); };
        w.gtag('js', new Date());
        w.gtag('config', settings.google_ads.id);
      })(window, document, 'script');
      // Setup Google Ads
      window.googleAdsEvent = (eventName) => {
        const eventsGroup = settings.google_ads.events.filter((e) => e.name == eventName)
        if (eventsGroup.length > 0) {
          for (const event of eventsGroup) {
            const object = {
              'send_to': `${settings.google_ads.id}/${event.value}`,
              'event_callback': () => { }
            };
            gtag('event', 'conversion', object);
          }
        }
      }
      // Google Ads Purchase
      if (route.name == 'thanks' && route.query.pixel) {
        window.googleAdsEvent('purchase');
      }
    }

    // google analytics
    if (settings && settings.google_analytics_id) {
      var ga = document.createElement('script');
      ga.type = 'text/javascript'; ga.async = true;
      ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + settings.google_analytics_id;
      document.getElementsByTagName('head')[0].appendChild(ga);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); }
      window.gtag('js', new Date());
      window.gtag('config', settings.google_analytics_id);
    }

    // store.state.IP = '206.71.50.230';
    if (store.state.settings.store_currencies && store.state.settings.store_currencies.length > 1 && store.state.IP) {
      (async () => {
        try {
          const res = await $http.get(`https://api-views.storeino.com/api/geoLite/get?ip=${store.state.IP}`);
          if (res.data.geoplugin_currencyCode != store.state.currency.code && store.state.settings.store_currencies.find(c => c.code == res.data.geoplugin_currencyCode)) {
            store.state.showCurrencyModal = true;
          }
        } catch (err) {
          this.$sentry.captureException(err)
        }
      })();
    }
  }
  inject('settings', store.state.settings);
}
