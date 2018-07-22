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

  head() {
    return {
      title: this.meta && this.meta.title ? this.meta.title : 'Break',
      meta: [
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
          hid: 'description',
          name: 'description',
        },
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
          hid: 'dcterms.Description',
          name: 'dcterms.Description',
        },
        {
          content: this.meta && this.meta.title ? this.meta.title : 'Break',
          hid: 'dcterms.Title',
          name: 'dcterms.Title',
        },
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
          hid: 'og:description',
          name: 'og:description',
        },
        {
          content: this.meta.image ? `${this.meta.image.fields.file.url}?w=438` : '/imgs/social-default.jpg',
          hid: 'og:image',
          name: 'og:image',
        },
        {
          content: this.meta && this.meta.title ? this.meta.title : 'Break',
          hid: 'og:title',
          name: 'og:title',
        },
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break – lunch, coffee, city breaks. Curating travel, culture, & food.',
          hid: 'twitter:description',
          name: 'twitter:description',
        },
        {
          content: this.meta && this.meta.image ? `${this.meta.image.fields.file.url}?w=438` : '/imgs/social-default.jpg',
          hid: 'twitter:image',
          name: 'twitter:image',
        },
        {
          content: this.meta && this.meta.title ? this.meta.title : 'Break',
          hid: 'twitter:title',
          name: 'twitter:title',
        },
      ],
    }
  },

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
