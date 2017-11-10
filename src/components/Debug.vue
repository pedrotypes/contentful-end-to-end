<template>
  <div>
    <hr>

    <button @click="setToken">set token</button>
    <button @click="clearToken">clear token</button>

    <button @click="setUser">set user</button>
    <button @click="clearUser">clear user</button>

    <p v-if="cmaToken">
      {{ cmaToken }}
    </p>

    <p v-if="user">
      {{ user }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Debug',
  computed: mapState([
    'cmaToken',
    'user'
  ]),
  methods: {
    setToken () {
      this.$store.commit('SET_CMA_TOKEN', 'cma_token')
    },
    clearToken () {
      this.$store.commit('SET_CMA_TOKEN', null)
    },
    setUser () {
      this.$store.commit('SET_USER', {
        id: 'user_id',
        name: 'Jon Snow'
      })
    },
    clearUser () {
      this.$store.commit('SET_USER', null)
    }
  }
}
</script>
