<template>
  <main>
    <Hero
      :fields="{
        title: displayTitle
      }"
    />
    <div
      v-for="(contentItem, index) in content"
      :key="`${contentItem.sys.id}--${index}`"
    >
      <ImageFull
        v-if="contentItem.sys.contentType.sys.id === 'imageFull'"
        :fields="contentItem.fields"
      />
      <ImageSplit
        v-if="contentItem.sys.contentType.sys.id === 'imageSplit'"
        :fields="contentItem.fields"
      />
      <TextSplit
        v-if="contentItem.sys.contentType.sys.id === 'textSplit'"
        :fields="contentItem.fields"
      />
      <TextImageSplit
        v-if="contentItem.sys.contentType.sys.id === 'textImageSplit'"
        :fields="contentItem.fields"
      />
    </div>
    <Next
      :breaks="breaks"
      :current="id"
    />
  </main>
</template>

<script>
import Contentful from '@/plugins/contentful'

import Hero from '@/components/Hero'
import ImageFull from '@/components/ImageFull'
import ImageSplit from '@/components/ImageSplit'
import Next from '@/components/Next'
import TextSplit from '@/components/TextSplit'
import TextImageSplit from '@/components/TextImageSplit'

const contentful = Contentful.createClient()

export default {
  components: {
    Hero,
    ImageFull,
    ImageSplit,
    Next,
    TextSplit,
    TextImageSplit,
  },

  transition: 'fade',

  head() {
    return {
      title: this.meta && this.meta.title ? this.meta.title : 'Break',
      meta: [
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break',
          hid: 'description',
          name: 'description',
        },
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break',
          hid: 'dcterms.Description',
          name: 'dcterms.Description',
        },
        {
          content: this.meta && this.meta.title ? this.meta.title : 'Break',
          hid: 'dcterms.Title',
          name: 'dcterms.Title',
        },
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break',
          hid: 'og:description',
          name: 'og:description',
        },
        {
          content: this.meta.image ? `${this.meta.image.fields.file.url}?w=438` : '/imgs/social-default.png',
          hid: 'og:image',
          name: 'og:image',
        },
        {
          content: this.meta && this.meta.title ? this.meta.title : 'Break',
          hid: 'og:title',
          name: 'og:title',
        },
        {
          content: this.meta && this.meta.description ? this.meta.description : 'Break',
          hid: 'twitter:description',
          name: 'twitter:description',
        },
        {
          content: this.meta && this.meta.image ? `${this.meta.image.fields.file.url}?w=438` : '/imgs/social-default.png',
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

  asyncData({ error, params }) {
    return contentful
      .getEntries({
        content_type: 'break',
      })
      .then((res) => {
        const breaks = res.items
        const breakItem = breaks.filter(breakItem => breakItem.fields.slug === params.slug)[0]
        const id = breakItem.sys.id ? breakItem.sys.id : false
        const title = breakItem.fields.title ? breakItem.fields.title : false
        const displayTitle = breakItem.fields.displayTitle ? breakItem.fields.displayTitle : false
        const content = breakItem.fields.content ? breakItem.fields.content : false
        const metaDescription = breakItem.fields.metaDescription ? breakItem.fields.metaDescription : false
        const metaImage = breakItem.fields.metaImage ? breakItem.fields.metaImage : false

        return {
          id,
          breaks,
          title,
          displayTitle,
          content,
          meta: {
            title,
            image: metaImage,
            description: metaDescription,
          },
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
