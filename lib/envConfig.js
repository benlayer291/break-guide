/**
 * Library to check environment variables are present and valid
 * in both local and production environments
 *
 * Adapted from https://github.com/contentful/blog-in-5-minutes/blob/master/lib/config.js
 *
 * @param {*} configEnv (set as process.env in production, set as .contentful.json in development)
 * @param {*} keys (keys present in the set configEnv)
 */

const checkValidConfig = (configEnv, keys) => {
  const { config, missingKeys } = keys.reduce(
    (acc, key) => {
      if (!configEnv[key]) {
        acc.missingKeys.push(key)
      } else {
        acc.config[key] = configEnv[key]
      }

      return acc
    },
    { config: {}, missingKeys: [] },
  )

  if (missingKeys.length) {
    throw new Error('Please provide needed Contentful configs:\n' +
        `\nMissing values: ${missingKeys.join(', ')}\n\n` +
        'There are two way to do so:\n' +
        '- define a .keys.json file (similar to .keys.sample.json) in the root of this directory\n' +
        `- define all environment variables ${keys.join(', ')}`)
  }

  return config
}

const getConfigForKeys = (keys) => {
  let configEnv

  try {
    configEnv = require('../.keys.json')
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      configEnv = process.env

      return checkValidConfig(configEnv, keys)
    }
    throw error
  }

  return checkValidConfig(configEnv, keys)
}

module.exports = {
  getConfigForKeys,
}
