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
    class="ImageSplit  block  wrapper">
    <div class="ImageSplit__inner  grid  grid--rigid">
      <div class="ImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="imageOne"
          :class="`media--${ratioOne}`"
          class="media"
        >
          <img
            :srcset="`${imageOne.file.url}?w=300 300w, ${imageOne.file.url}?w=500 500w, ${imageOne.file.url}?w=800 800w`"
            :src="`${imageOne.file.url}?w=300`"
            :alt="imageOne.title"
            sizes="calc(100vw - 80px), (min-width: 800px) calc(0.5 * (100vw - (160px + 16.66%)))">
        </div>
      </div>
      <div class="ImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="imageTwo"
          :class="`media--${ratioTwo}`"
          class="media"
        >
          <img
            :srcset="`${imageTwo.file.url}?w=300 300w, ${imageTwo.file.url}?w=600 600w`"
            :src="`${imageTwo.file.url}?w=300`"
            :alt="imageTwo.title"
            sizes="calc(100vw - 80px), (min-width: 800px) calc(0.5 * (100vw - (160px + 16.66%)))">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageSplit',

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
    imageOne() {
      return this.fields.imageOne && this.fields.imageOne.fields ? this.fields.imageOne.fields : false
    },
    ratioOne() {
      return this.fields.imageOneRatio ? this.fields.imageOneRatio : '1:1'
    },
    imageTwo() {
      return this.fields.imageTwo && this.fields.imageTwo.fields ? this.fields.imageTwo.fields : false
    },
    ratioTwo() {
      return this.fields.imageTwoRatio ? this.fields.imageTwoRatio : '1:1'
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
