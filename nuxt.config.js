const { getConfigForKeys } = require('./lib/envConfig.js')
const head = require('./config/head')
const routes = require('./config/routes')

const keys = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CPA_ACCESS_TOKEN',
  'CTF_CDA_HOST',
  'CTF_CPA_HOST',
])

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
          exclude: /(node_modules)/
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
  env: {
    accessToken: process.env.NODE_ENV === 'production' ? keys.CTF_CDA_ACCESS_TOKEN : keys.CTF_CPA_ACCESS_TOKEN,
    host: process.env.NODE_ENV === 'production' ? keys.CTF_CDA_HOST : keys.CTF_CPA_HOST,
    space: keys.CTF_SPACE_ID,
  },
  /*
  ** Generate routes
  */
  generate: {
    fallback: true, // Use 404.html on Netlify
    routes,
    subFolders: false,
  },
  /*
  ** Headers of the page
  */
  head,
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
    '@nuxtjs/sitemap',
  ],

  markdownit: {
    breaks: true,
    html: true,
    injected: true,
    xhtmlOut: true,
  },

  sitemap: {
    exclude: ['/styleguide'],
    generate: true,
    routes,
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
