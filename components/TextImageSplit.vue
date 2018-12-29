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
    class="TextImageSplit  block  wrapper">
    <div
      :class="{ 'grid--reverse': reverse }"
      class="TextImageSplit__inner  grid  grid--rigid">
      <div
        class="TextImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="text"
          v-html="$md.render(text).replace('<a','<a target=_blank')" />
      </div>
      <div class="TextImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="image"
          :class="`media--${ratio}`"
          class="media"
        >
          <img
            :srcset="`${image.file.url}?w=300 300w, ${image.file.url}?w=500 500w, ${image.file.url}?w=800 800w`"
            :src="`${image.file.url}?w=300`"
            :alt="image.title"
            sizes="calc(100vw - 80px), (min-width: 800px) calc(0.5 * (100vw - (160px + 16.66%)))">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextImageSplit',

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
    reverse() {
      return this.fields.reverse ? this.fields.reverse : false
    },
    text() {
      return this.fields.text ? this.fields.text : false
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

<style lang="postcss">
@import "../assets/css/settings/vars";

.TextImageSplit__item:nth-child(2) .media {
  position: relative;

  @media (--sm) {
    position: sticky;
    top: var(--bsu);
  }
}
</style>
