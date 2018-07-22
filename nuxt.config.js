const Contentful = require('contentful')

const { getConfigForKeys } = require('./lib/envConfig.js')

const keys = getConfigForKeys(['CTF_SPACE_ID', 'CTF_CDA_ACCESS_TOKEN'])

const contentful = Contentful.createClient({
  accessToken: keys.CTF_CDA_ACCESS_TOKEN,
  space: keys.CTF_SPACE_ID,
})

/*
** Nuxt generate dynamic routes helper functions
*/
const mapEntriesToRoutes = (entries, type = '', omittedEntries = []) => {
  const routes = entries.map((entry) => {
    let route

    if (omittedEntries.includes(entry.fields.slug)) {
      route = false
    } else if (type && type !== 'page') {
      route = `/${type}/${entry.fields.slug}`
    } else {
      route = `/${entry.fields.slug}`
    }

    return route
  })

  return routes
}

const getRoutesByType = type => (
  contentful
    .getEntries({
      content_type: type,
    })
    .then((res) => {
      const entries = res.items
      const routes = mapEntriesToRoutes(entries, type)

      return routes
    })
)

const dynamicRoutes = () => (
  Promise.all([
    getRoutesByType('break'),
    getRoutesByType('page'),
  ]).then((res) => {
    const routesArray = res
    const dynamicRoutes = [].concat(...routesArray).filter(Boolean)

    return dynamicRoutes
  })
)

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
  env: keys,
  /*
  ** Generate routes
  */
  generate: {
    fallback: true, // Use 404.html on Netlify
    routes: dynamicRoutes,
    subFolders: false,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Break Guide',
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Abril+Fatface|Anonymous+Pro'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#000000',
      },
      {
        rel: 'dns-prefetch',
        href: 'cdn.contentful.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'break-guide.netlify.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'images.ctfassets.net',
      },
      {
        rel: 'dns-prefetch',
        href: 'www.google-analytics.com',
      },
    ],
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'msapplication-TileColor',
        content: '#ffffff',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Break Guide',
      },
      {
        content: 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
        hid: 'description',
        name: 'description',
      },
      {
        content: 'Break Guide',
        name: 'dcterms.Contributor',
      },
      {
        content: 'https://break-guide.netlify.com',
        name: 'dcterms.Coverage',
      },
      {
        content: 'Break Guide',
        name: 'dcterms.Creator',
      },
      {
        content: 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
        name: 'dcterms.Description',
        hid: 'dcterms.Description',
      },
      {
        content: 'text/html',
        name: 'dcterms.Format',
      },
      {
        content: 'https://break-guide.netlify.com',
        name: 'dcterms.Identifier',
      },
      {
        content: 'en_GB',
        name: 'dcterms.Language',
      },
      {
        content: 'Break Guide',
        name: 'dcterms.Publisher',
      },
      {
        content: 'Break Guide',
        hid: 'dcterms.Title',
        name: 'dcterms.Title',
      },
      {
        content: 'website',
        name: 'dcterms.Type',
      },
      {
        content: 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
        hid: 'og:description',
        name: 'og:description',
      },
      {
        content: '/imgs/social-default.jpg',
        hid: 'og:image',
        name: 'og:image',
      },
      {
        content: 'en_GB',
        name: 'og:locale',
      },
      {
        content: 'https://www.instagram.com/break_guide/',
        name: 'og:see_also',
      },
      {
        content: 'Break Guide',
        name: 'og:site_name',
      },
      {
        content: 'Break Guide',
        hid: 'og:title',
        name: 'og:title',
      },
      {
        content: 'website',
        name: 'og:type',
      },
      {
        content: 'https://break-guide.netlify.com',
        name: 'og:url',
      },
      {
        content: 'summary_large_image',
        name: 'twitter:card',
      },
      {
        content: 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
        hid: 'twitter:description',
        name: 'twitter:description',
      },
      {
        content: '/imgs/social-default.jpg',
        hid: 'twitter:image',
        name: 'twitter:image',
      },
      {
        content: 'Break Guide',
        hid: 'twitter:title',
        name: 'twitter:title',
      },
    ],
    titleTemplate: '%s - break guide',
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
    routes: dynamicRoutes,
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
