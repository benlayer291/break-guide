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
    <Next />
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

  asyncData({ error, params }) {
    return contentful
      .getEntries({
        content_type: 'break',
        'fields.slug': params.slug,
      })
      .then((res) => {
        const data = res.items[0]
        const title = data.fields.title ? data.fields.title : false
        const displayTitle = data.fields.displayTitle ? data.fields.displayTitle : false
        const content = data.fields.content ? data.fields.content : false
        const metaDescription = data.fields.metaDescription ? data.fields.metaDescription : false
        const metaImage = data.fields.metaImage ? data.fields.metaImage : false

        return {
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
