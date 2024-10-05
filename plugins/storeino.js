export default async function ({ $http, store, app, route }, inject) {
    // Variables
    const storeino = {};

    // Gets
    const gets = ['products', 'collections', 'pages'];

    // Searches
    const searches = ['products', 'collections', 'categories', 'upsells', 'pages', 'brands', 'reviews', 'apps'];

    // Creates and updates
    const creates = []; const updates = [];

    // Get
    for (const module of gets) {
        if (!storeino[module]) storeino[module] = {};
        storeino[module].get = async function (params) {
            return $http.get(`/${module}/get`, { params });
        };
    }

    // Search
    for (const module of searches) {
        if (!storeino[module]) storeino[module] = {};
        storeino[module].search = async function (params) {
            return $http.get(`/${module}/search`, { params });
        };
    }

    // Create
    for (const module of creates) {
        if (!storeino[module]) storeino[module] = {};
        storeino[module].create = async function (params, query) {
            return $http.post(`/${module}/create`, params, { params: query });
        };
    }

    // Update
    for (const module of updates) {
        if (!storeino[module]) storeino[module] = {};
        storeino[module].update = async function (params, query) {
            return $http.post(`/${module}/update`, params, { params: query });
        };
    }

    // Others
    storeino.products.filters = async function (params) {
        return $http.get('/products/filters', { params });
    }

    // Facebook Pixel
    storeino.fbpx = async function (ev, data = {}, params = {}) {
        if (!store.state.isPreview &&
            store.state.settings &&
            store.state.settings.facebook_multiple_pixel &&
            store.state.settings.facebook_multiple_pixel.length > 0) {
            // Facebook Purchase Without Currency
            if (ev == "Purchase" && !route.query.pixel && !data.currency) {
                return 0;
            } 
            // Check Purchase & Query Pixel
            else if (ev == "Purchase" && route.query.pixel) {
                // Convert Route Pixel To Json
                let pixelData = JSON.parse(route.query.pixel);
                //Filter Content 
                pixelData.contents.forEach((element) => {
                    // Get Quantity From Content
                    element.quantity = Math.round(element.quantity);
                    // Delete Unused Element
                    delete element._id;
                    delete element.variant;
                    delete element.name;
                });
                // Fill Data With Content
                data = {
                    content_ids: pixelData.content_ids,
                    content_type: "product",
                    contents: pixelData.contents,
                    value: pixelData.total,
                    currency: (store.state.currency && store.state.currency.code) ? store.state.currency.code : "USD"
                }
                // Set Fb Params
                if (pixelData.fbParams) {
                    params = pixelData.fbParams;
                } 
            }
            // Create Fb Query
            let query = { 
                name: "fbpx", 
                type: ev,
                ref: window.location.href 
            }
            // Get Params
            if (params) { 
                for (const key in params) { 
                    query[key] = params[key]; 
                } 
            }
            // Get External Id
            if (localStorage.getItem('__external_id')) {
                query['user_external_id'] = localStorage.getItem('__external_id');
            } 
            // Get __fbc
            if (localStorage.getItem('__fbc')) {
                query['user_fbc'] = localStorage.getItem('__fbc');
            } 
            // Add Currency Value 
            if (data.currency && data.value && data.contents) {
                let valueCur = 1;
                if (store.state.settings['facebook_currency'] && 
                    store.state.settings.facebook_currency[data.currency] && 
                    store.state.settings.facebook_currency[data.currency] != 0) {
                    valueCur = store.state.settings.facebook_currency[data.currency];
                }
                data.currency = 'USD';
                data.contents.forEach( (content)=> {
                    content.price = Number(content.price) / valueCur;
                })
                data.value = Number(data.value) / valueCur;
            }
            // Check Multi Pixel
            if (ev == "Purchase") {
                store.state.settings['facebook_multiple_pixel'].forEach(pixel => {
                    if (pixel.active && !pixel.token) {
                        if (pixel.type && pixel.type == "Lead") {
                            fbq("trackSingle", pixel.id, 'Lead', data);
                        } 
                        else {
                            fbq("trackSingle", pixel.id, 'Purchase', data);
                        } 
                    }
                })
            // One Pixel
            } else {
                store.state.settings['facebook_multiple_pixel'].forEach(pixel => {
                    if (pixel.active && !pixel.token) {
                        fbq("trackSingle", pixel.id, ev, data);
                    }
                })
            }
            // Check Existent
            let exits = false;
            store.state.settings['facebook_multiple_pixel'].forEach(p => { 
                if (p.active && p.token) {
                    exits = true;
                }
            })
            // Create Event
            if (exits) {
                await $http.post(`/events/create`, data, { params: query });
            }
        }
    }

    // Inject Storeino
    inject('storeino', storeino);
}
