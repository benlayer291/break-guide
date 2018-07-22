const { getConfigForKeys } = require('./lib/envConfig.js')

const keys = getConfigForKeys(['CTF_SPACE_ID', 'CTF_CDA_ACCESS_TOKEN'])

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['babel-polyfill', 'intersection-observer'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    // Process css with postcss plugins
    postcss: [
      require('postcss-import')(),
      require('postcss-calc')(),
      require('postcss-nested')(),
      require('postcss-preset-env')({
        stage: 1,
        browsers: ['last 2 versions', 'ie >= 11'],
      }),
    ],
  },
  /*
  ** CSS
  */
  css: [
    {
      src: '@/assets/css/base.css',
      lang: 'postcss',
    },
  ],
  /*
  ** Define environment variables available
  ** in generate and browser context
  */
  env: keys,
  /*
  ** Generate routes
  */
  generate: {
    fallback: true, // Use 404.html on Netlify
    subFolders: false,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'break-guide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A journal site built with Nuxt.js',
      },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Anonymous+Pro' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000000' },
  /*
  ** Nuxt mode
  */
  mode: 'universal',
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/markdownit',
  ],

  markdownit: {
    breaks: true,
    html: true,
    injected: true,
    xhtmlOut: true,
  },
  /*
  ** Plugins
  */
  plugins: [
    {
      src: '@/plugins/contentful',
    },
    {
      src: '@/plugins/observe',
      ssr: false,
    },
  ],
}
