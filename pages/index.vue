<template>
  <main>
    <List
      v-if="breaks && breaks.length"
      :breaks="breaks"
    />
  </main>
</template>

<script>
import Contentful from '@/plugins/contentful'

import List from '@/components/List.vue'

const contentful = Contentful.createClient()

export default {
  components: {
    List,
  },

  transition: 'fade',

  asyncData({ error }) {
    return contentful
      .getEntries({
        content_type: 'break',
      })
      .then((res) => {
        const data = res.items
        const breaks = data

        return {
          breaks,
        }
      })
      .catch((err) => {
        if (err.response) {
          error({ status: err.response.status, msg: err.response.statusText })
        } else {
          error({ status: 500, msg: 'Something went wrong' })
        }
      })
  },
}
</script>
