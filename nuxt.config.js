import { plugins } from "@storeino/template-core";
export default {
  head: {
    title: 'new-theme',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/icons.css',
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css'
  ],
  plugins:[
    ...plugins,
  ],
  serverMiddleware: ['~/server/index'],
  components: true,
  buildModules: [ ],
  modules: [
    '@nuxtjs/axios',
    // ['@nuxtjs/fontawesome', {
    //   component: 'font-awesome-icon',
    //   icons: {
    //     solid: [],
    //     // brands: ['faGithub','faYoutube'], // Add the Font Awesome icons you want to use
    //   },
    // }],
  ],
  axios: {
    baseURL: '/',
  },
  build: {}
}
