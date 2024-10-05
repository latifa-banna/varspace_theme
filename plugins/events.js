export default function ({ app, store, router, $tools }, inject) {
    if (!process.server) {
        // To CheckOut
        window.addEventListener('TO_CHECKOUT', (e) => {
            window.location.href = '/checkout2'
        });

        // App go to
        window.addEventListener('APP_GO_TO', (e) => {
            if (e.detail && e.detail.url) {
                app.router.push(e.detail.url)
            }
        });

        // Page view
        window.addEventListener('PAGE_VIEW', (e) => {
            // SnapChat Pixel
            if (store.state.settings &&
                store.state.settings.snapchat_pixel &&
                store.state.settings.snapchat_pixel.length > 0) {
                // Snapchat PageView
                snapPageView();
                // Snapchat ViewContent
                if (e.data && e.data._id) {
                    snapViewContent({ item_ids: [e.data._id] });
                }
            }

            // Twitter Pixel
            if (!app.context.store.state.isPreview &&
                store.state.settings &&
                store.state.settings.twitter_pixel &&
                store.state.settings.twitter_pixel.length > 0) {
                // Twitter PageView
                twitterPageView();
                // Twitter ViewContent
                if (e.data && e.data._id) {
                    twitterViewContent({
                        content_ids: [e.data._id],
                        content_type: 'product',
                        content_name: e.data.name,
                        value: e.data.price.salePrice,
                        currency: store.state.currency.code || "USD"
                    });
                }
            }

            // Tiktok Pixel
            if (store.state.settings &&
                store.state.settings.tiktok_pixel &&
                store.state.settings.tiktok_pixel.length > 0) {
                // Tiktok PageView
                tiktokPageView();
                // Tiktok ViewContent
                if (e.data && e.data._id) {
                    tiktokViewContent({
                        content_id: e.data._id,
                        quantity: 1,
                        price: e.data.price.salePrice,
                        value: e.data.price.salePrice,
                        currency: store.state.currency.code || "USD"
                    });
                }
            }

            // Google Ads
            if (store.state.settings.google_ads &&
                store.state.settings.google_ads.id &&
                store.state.settings.google_ads.events &&
                store.state.settings.google_ads.events.length > 0) {
                gtag('config', `${store.state.settings.google_ads.id}`);
            }

            // Google Analytics 
            if (store.state.settings &&
                store.state.settings.google_analytics_id) {
                gtag('js', new Date());
                gtag('config', window.escape(`${store.state.settings.google_analytics_id}`));
            }
        });

        // Add to cart
        window.addEventListener('ADD_TO_CART', (e) => {
            // Get Cart item
            const item = $tools.reformCartItem(e.data);

            // Check Item Variants
            let exists = null;
            if (item.variant) {
                exists = store.state.cart.find(i => i._id === item._id && i.variant && i.variant._id === item.variant._id);
            } else {
                exists = store.state.cart.find(i => i._id === item._id);
            }

            // Snapchat Pixel
            if (store.state.settings &&
                store.state.settings.snapchat_pixel &&
                store.state.settings.snapchat_pixel.length > 0) {
                snapAddToCart({
                    item_ids: [item._id],
                    price: item.price,
                    currency: store.state.currency.code || "USD"
                });
            }

            // Twitter Pixel
            if (!app.context.store.state.isPreview &&
                store.state.settings &&
                store.state.settings.twitter_pixel &&
                store.state.settings.twitter_pixel.length > 0) {
                twitterAddToCart({
                    content_ids: [item._id],
                    content_type: 'product',
                    value: item.price * item.quantity,
                    currency: store.state.currency.code || "USD"
                });
            }

            // TikTok Pixel
            if (store.state.settings &&
                store.state.settings.tiktok_pixel &&
                store.state.settings.tiktok_pixel.length > 0) {
                tiktokAddToCart({
                    content_id: item._id,
                    quantity: item.quantity,
                    price: item.price,
                    value: item.price * item.quantity,
                    currency: store.state.currency.code || "USD"
                });
            }

            // Linkedin
            if (store.state.settings.linkedin_pixel &&
                store.state.settings.linkedin_pixel.id &&
                store.state.settings.linkedin_pixel.events &&
                store.state.settings.linkedin_pixel.events.length > 0) {
                window.linkedInEvent('add_to_cart');
            }

            //Check Item Exists
            if (exists) {
                item.parents = [...new Set([...exists.parents, ...item.parents])];
                exists.quantity = item.quantity;
            } else {
                store.state.cart.push(item);
            }

            // Set Cart
            $tools.setCart(store.state.cart);
            if (store.state.settings.analitycs_shere &&
                store.state.settings.analitycs_shere[0] &&
                store.state.settings.analitycs_shere[0]['data-website-id'] && window.umami) {
                window.umami.track('ADD_TO_CART',{ name: item.name, id: item._id })
            }
            // Call Add To Cart
            $tools.call('ADDED_TO_CART');
        });

        // Remove from cart
        window.addEventListener('REMOVE_FROM_CART', (e) => {
            // Reforme Cart
            const item = $tools.reformCartItem(e.data);

            // Set Index
            let index = -1;
            if (item.variant) {
                index = store.state.cart.findIndex(i => i._id === item._id && i.variant && i.variant._id === item.variant._id);
            } else {
                index = store.state.cart.findIndex(i => i._id === item._id);
            } 

            // Return if not found index
            if (index == -1) return;

            // Delete index from cart 
            store.state.cart.splice(index, 1);

            // Set Cart
            const childs = store.state.cart.filter(i => i.parents && i.parents.includes(item._id));
            for (const child of childs) {
                const childIndex = store.state.cart.findIndex(i => i._id == child._id);
                child.parents.splice(child.parents.indexOf(item._id), 1);
                if (child.parents.length == 0) store.state.cart.splice(childIndex, 1);
            }
            $tools.setCart(store.state.cart);
        });

        // Add to wishlist
        window.addEventListener('ADD_TO_WISHLIST', (e) => {
            // Get Wishlist item
            const item = $tools.reformWishlistItem(e.data);

            // Check If Item Exist
            let exists = store.state.wishlist.find(i => i._id === item._id);
            if (!exists) {
                store.state.wishlist.push(item);
            }

            // Set Wishlist
            $tools.setWishlist(store.state.wishlist);

            // SnapChat Pixel
            if (store.state.settings &&
                store.state.settings.snapchat_pixel &&
                store.state.settings.snapchat_pixel.length > 0) {
                snapAddToWishlist({ item_ids: [item._id] });
            }

            // Twitter Pixel
            if (!app.context.store.state.isPreview &&
                store.state.settings &&
                store.state.settings.twitter_pixel &&
                store.state.settings.twitter_pixel.length > 0) {
                twitterAddToWishlist({
                    content_ids: [item._id],
                    content_type: 'product',
                    currency: store.state.currency.code || "USD"
                });
            }

            // Tiktok Pixel
            if (store.state.settings &&
                store.state.settings.tiktok_pixel &&
                store.state.settings.tiktok_pixel.length > 0) {
                tiktokAddToWishlist({
                    content_id: item._id,
                    price: item.price,
                    currency: store.state.currency.code || "USD"
                });
            }
            if (store.state.settings.analitycs_shere &&
                store.state.settings.analitycs_shere[0] &&
                store.state.settings.analitycs_shere[0]['data-website-id'] && window.umami) {
                window.umami.track('ADD_TO_WISHLIST',{ name: item.name, id: item._id })
            }
        });

        // Remove from wishlist
        window.addEventListener('REMOVE_FROM_WISHLIST', (e) => {
            // Reforme Wishlist Items
            const item = $tools.reformWishlistItem(e.data);
            let index = store.state.wishlist.findIndex(i => i._id === item._id);
            if (index == -1) return;
            store.state.wishlist.splice(index, 1);
            $tools.setWishlist(store.state.wishlist);
        });

        // Toast
        window.addEventListener('message', (e) => {
            let response = e.data
            if (response.type == "addToCart") app.router.push(`/products/${response.data.product.slug}`)
            if (response.type == "loading") {
                if (response.data.route == "/login") {
                    app.router.push('/account/login')
                }
                setTimeout(() => {
                    store.state.loading = false
                }, 1000)
            }
            if (e.data.token) store.state.customer = $tools.tokenDecode(e.data.token)
            if (response.data == "login") store.state.customer = null
            if (response.type == 'route') { window.history.pushState({}, "", $tools.$pushState('/account/', [`${response.data}`], '')) }
            if (response.type == 'route_id') { window.history.pushState({}, "", $tools.$pushState('/account/', [`${response.data.name}`], { orderId: response.data.query })) }
        })
    }
}
