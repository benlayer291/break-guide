<template>
  <section
    v-observe-visibility="{
      callback: setInView,
      intersection: { threshold: 0.25 }
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
        :src="image.file.url"
        :alt="image.title">
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
