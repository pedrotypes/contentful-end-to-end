<template>
  <div>
    <h2>Please select a space</h2>

    <ul>
      <li v-for="space in spaces">
        <router-link :to="{ path: '/spaces/' + space.sys.id }">
          {{ space.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'spacesList',
  computed: {
    ...mapState(['spaces'])
  }
}
</script>
