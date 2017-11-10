<!--
  Wraps the entire app.
  This component makes sure we have a valid user before going into a space.
-->
<template>
  <div class="container">
    <div class="row">
      <div class='col-xs-12'>
        <h1>
          Contentful end to end
        </h1>

        <p class="lead">
          Support materials for the training session, because no one likes to type in URLs by hand.
        </p>

        <div v-if="!cmaToken">
          <p>
            Please login with your Contentful account.
          </p>
          <a :href="oauth_url" class="btn btn-default">Login</a>
        </div>

        <div v-if="cmaToken && !user">Retrieving user information...</div>

        <div v-if="token">
          <p>
            <img class="avatar" :src="user.avatarUrl">
            {{ user.firstName }} {{ user.lastName }}
            <button @click="logout" class="btn btn-default">Logout</button>
          </p>
          <router-view v-if="user"></router-view>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Debug from './components/Debug'

export default {
  name: 'app',
  data () {
    return {
      oauth_url: 'https://be.contentful.com/oauth/authorize?response_type=token' +
        '&client_id=' + process.env.CONTENTFUL_APP_ID +
        '&redirect_uri=' + process.env.CONTENTFUL_APP_REDIRECT_URL +
        '&scope=content_management_manage'
    }
  },
  computed: mapState([
    'cmaToken',
    'user',
    'token'
  ]),
  mounted () {
    var cmaToken
    var previousRoute

    // Get token
    if (this.$router.currentRoute.path === '/oauth/contentful_redirect') {
      var hash = this.$router.currentRoute.hash
      cmaToken = hash.match(/access_token=(\w*)/).pop()
      localStorage.setItem('cmaToken', cmaToken)

      previousRoute = localStorage.getItem('previousRoute')
      previousRoute = previousRoute ? JSON.parse(previousRoute).path : '/'
      localStorage.removeItem('previousRoute')
      window.location = previousRoute
    } else {
      cmaToken = localStorage.getItem('cmaToken')
    }

    if (cmaToken && !this.user) {
      this.$store.commit('SET_CMA_TOKEN', cmaToken)
      this.$store.dispatch('LOAD_USER')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('LOGOUT')
    }
  },
  components: { Debug }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.avatar {
  width:  1.33em;
}
</style>
