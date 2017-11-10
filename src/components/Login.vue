<template>
  <div>
    <p>
      Please login with your Contentful account.
    </p>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    login () {
      var url = 'https://be.contentful.com/oauth/authorize?response_type=token' +
        '&client_id=' + process.env.CONTENTFUL_APP_ID +
        '&redirect_uri=' + process.env.CONTENTFUL_APP_REDIRECT_URL +
        '&scope=content_management_manage'

      window.location = url
    },
    goBack () {
      console.log('going back')
      var targetRoute = localStorage.getItem('targetRoute')
      if (targetRoute) {
        targetRoute = JSON.parse(targetRoute)
      } else {
        targetRoute = '/'
      }
      localStorage.removeItem('targetRoute')

      return this.$router.push(targetRoute)
    }
  }
}
</script>

<style scoped>
</style>
