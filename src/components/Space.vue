<!--
  Wraps the app's various features, in the context of a space.
-->
<template>
  <div>
    <h2>
      <router-link :to="{ path: '/' }">
        Home
      </router-link> /
      <span v-if="space">{{ space.name }} (#{{ space.sys.id }})</span>
    </h2>

    <div v-if="loading">
      Loading...
    </div>

    <!-- Sanity check -->
    <div v-else-if="!product" class="alert alert-danger">
      <p class="lead">
        <strong>
          No "Product" content type detected in this space.
        </strong>
      </p>
      <p>
        Have you created this space as a "Product catalogue" example space?
      </p>
    </div>

    <div v-else-if="product">

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Your first Delivery API call</h3>
        </div>
        <div class="panel-body">
          <a :href="url_first_cda_call" target="_blank">
            {{ url_first_cda_call }}
          </a>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Let's find yourself on the preview API</h3>
        </div>
        <div class="panel-body">
          <a :href="url_find_yourself_cpa" target="_blank">
            {{ url_find_yourself_cpa }}
          </a>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Setup webhook</h3>
        </div>
        <div class="panel-body">
          <dl>
            <dt>NAME:</dt>
            <dd><code>Your nice name</code></dd>

            <dt>URL:</dt>
            <dd><code>https://6ajny5opo2.execute-api.us-east-1.amazonaws.com/production/logging</code></dd>

            <dt>HEADER-KEY:</dt>
            <dd><code>x-api-key</code></dd>

            <dt>HEADER-VALUE:</dt>
            <dd><code>hiYmkFjFOV8DuuycYfb6b9TOhmjPjcdGaO7BYJy8</code></dd>

          </dl>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Hello Insomnia</h3>
        </div>
        <div class="panel-body">
          Download from here:
          <a href="https://insomnia.rest/" target="_blank">
            https://insomnia.rest/
          </a>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Download Insomnia configuration</h3>
        </div>
        <div class="panel-body">
          <a href="https://drive.google.com/open?id=0B35vixJzhTxlLUNxSUt2X3hFWm8" target="_blank">
            https://drive.google.com/open?id=0B35vixJzhTxlLUNxSUt2X3hFWm8
          </a>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Import Insomnia environment</h3>
        </div>
        <div class="panel-body">
          <pre>
{
    "space_id": "{{ space.sys.id }}",
    "cda_key": "{{ spaceTokens.cda }}",
    "cpa_key": "{{ spaceTokens.cpa }}",
    "cma_key": "{{ cmaToken }}",
    "cda_url": "https://cdn.contentful.com/spaces/",
    "cpa_url": "https://preview.contentful.com/spaces/",
    "cma_url": "https://api.contentful.com/spaces/",
    "content_type": "application/vnd.contentful.management.v1+json"
}
          </pre>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  name: 'space',
  computed: {
    ...mapState(['spaces', 'space', 'user', 'cmaToken', 'contentTypes', 'spaceTokens']),

    loading () {
      return this.contentTypes.length === 0 || this.spaceTokens.name === null
    },

    product () {
      for (var ct of this.contentTypes) {
        if (ct.name === 'Product') return ct
      }

      return null
    },

    cdaUrl () {
      return 'https://cdn.contentful.com/spaces/' + this.space.sys.id
    },

    cpaUrl () {
      return 'https://preview.contentful.com/spaces/' + this.space.sys.id
    },

    url_first_cda_call () {
      return this.cdaUrl + '/entries?access_token=' + this.spaceTokens.cda
    },

    url_find_yourself_cpa () {
      return this.cpaUrl + '/entries?access_token=' + this.spaceTokens.cpa + '&content_type=' + this.product.sys.id + '&fields.productName%5Bmatch%5D=' + this.user.firstName + '&select=fields&include=0'
    }
  },
  props: ['spaceId'],
  methods: {
    ...mapMutations(['SET_SPACE', 'SET_SPACE_TOKENS']),
    ...mapActions(['LOAD_CONTENT_TYPES', 'LOAD_SPACE_TOKENS'])
  },
  created () {
    for (var space of this.spaces) {
      if (space.sys.id === this.spaceId) {
        this.SET_SPACE(space)
        this.LOAD_CONTENT_TYPES(space)
        this.LOAD_SPACE_TOKENS(space)
      }
    }
  }
}
</script>
