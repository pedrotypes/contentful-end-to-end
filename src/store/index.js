import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cmaToken: null, // actual token string being used
    token: null,    // representation of what the token has access to
    user: null,
    organizations: [],
    spaces: [],
    space: null,
    contentTypes: null,
    spaceTokens: {}
  },
  actions: {
    LOAD_USER: function (context) {
      axios.get('token')
      .then((response) => {
        context.commit('SET_TOKEN', response.data)
        context.commit('SET_USER', response.data.includes.User[0])
        context.commit('SET_ORGANIZATIONS', response.data.includes.Organization)
        context.commit('SET_SPACES', response.data.includes.Space)
      })
      .catch(() => {
        context.commit('LOGOUT')
      })
    },

    LOAD_CONTENT_TYPES (context, space) {
      context.commit('SET_CONTENT_TYPES', [])
      axios.get('spaces/' + space.sys.id + '/content_types')
      .then((response) => {
        context.commit('SET_CONTENT_TYPES', response.data.items)
      })
    },

    // Let's go down the rabbit hole
    LOAD_SPACE_TOKENS (context, space) {
      context.commit('SET_SPACE_TOKENS', {
        name: null,
        cda: null,
        cpa: null
      })

      // Grab the ID of the first api key
      axios.get('spaces/' + space.sys.id + '/api_keys')
      .then((response) => {
        // Get full representation of the key, including CPA key ID
        var cdaKeyId = response.data.items[0].sys.id
        axios.get('spaces/' + space.sys.id + '/api_keys/' + cdaKeyId)
        .then((response) => {
          var cpaKeyId = response.data.preview_api_key.sys.id
          var cdaToken = response.data.accessToken
          // Finally, grab CPA token
          axios.get('spaces/' + space.sys.id + '/preview_api_keys/' + cpaKeyId)
          .then((response) => {
            context.commit('SET_SPACE_TOKENS', {
              cda: cdaToken,
              cpa: response.data.accessToken
            })
          })
        })
      })
    }
  },
  mutations: {
    /**
     * Auth
     */
    SET_CMA_TOKEN: function (state, cmaToken) {
      state.cmaToken = cmaToken

      // Configure axios client
      axios.defaults.baseURL = process.env.CONTENTFUL_CMA_URL
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + cmaToken
      axios.defaults.headers.common['Content-Type'] = 'application/vnd.contentful.management.v1+json'
    },
    SET_TOKEN: function (state, token) {
      state.token = token
    },
    LOGOUT: function (state) {
      state.cmaToken = null
      state.token = null
      state.user = null
    },

    /**
     * Base state
     */
    SET_USER: function (state, user) {
      state.user = user
    },
    SET_ORGANIZATIONS: function (state, organizations) {
      state.organizations = organizations
    },
    SET_SPACES: function (state, spaces) {
      state.spaces = spaces
    },
    SET_SPACE: function (state, space) {
      state.space = space
    },

    /**
     * Training materials
     */
    SET_CONTENT_TYPES (state, contentTypes) {
      state.contentTypes = contentTypes
    },
    SET_SPACE_TOKENS (state, spaceTokens) {
      state.spaceTokens = spaceTokens
    }
  },
  getters: {}
})

export default store
