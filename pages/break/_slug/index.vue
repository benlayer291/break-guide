<template>
  <main>
    <Hero
      :fields="{
        title: displayTitle
      }"
    />
    <div
      v-for="contentItem in content"
      :key="contentItem.sys.id"
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
