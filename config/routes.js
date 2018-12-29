const Contentful = require('contentful')
const { getConfigForKeys } = require('../lib/envConfig.js')

const keys = getConfigForKeys([
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CPA_ACCESS_TOKEN',
  'CTF_CDA_HOST',
  'CTF_CPA_HOST',
])

const contentful = Contentful.createClient({
  accessToken: process.env.NODE_ENV === 'production' ? keys.CTF_CDA_ACCESS_TOKEN : keys.CTF_CPA_ACCESS_TOKEN,
  host: process.env.NODE_ENV === 'production' ? keys.CTF_CDA_HOST : keys.CTF_CPA_HOST,
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
  routes: dynamicRoutes,
}
