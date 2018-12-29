const contentful = require('contentful')

const config = {
  accessToken: process.env.accessToken,
  host: process.env.host,
  space: process.env.space,
}

module.exports = {
  createClient: () => contentful.createClient(config),
}
