var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONTENTFUL_APP_ID: '"d18a8707d8f41e3cd9dfd8c51e148b1e45f3bdbeba64b3aa261975be5608583a"',
  CONTENTFUL_APP_REDIRECT_URL: '"https://localhost:8080/oauth/contentful_redirect"'
})
