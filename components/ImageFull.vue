<template>
  <section
    v-observe-visibility="{
      callback: setInView,
      intersection: { threshold: 0.1 }
    }"
    :class="{
      'js-in-view': inView,
      'js-out-of-view': !inView
    }"
    class="ImageFull  wrapper  block">
    <div
      :class="`media--${ratio}`"
      class="media"
    >
      <img
        :srcset="`${image.file.url}?w=300 300w, ${image.file.url}?w=500 500w, ${image.file.url}?w=800 800w, ${image.file.url}?w=1000 1000w`"
        :src="`${image.file.url}?w=300`"
        :alt="image.title"
        sizes="calc(100vw - 80px), (min-width: 800px) calc(100vw - (160px + 16.66%))">
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageFull',

  props: {
    fields: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      inView: false,
    }
  },

  computed: {
    image() {
      return this.fields.image && this.fields.image.fields ? this.fields.image.fields : false
    },
    ratio() {
      return this.fields.imageRatio ? this.fields.imageRatio : '1:1'
    },
  },

  methods: {
    setInView(visibility) {
      if (visibility) {
        this.inView = visibility
      }
    },
  },
}
</script>
