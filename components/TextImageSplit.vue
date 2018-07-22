<template>
  <section class="TextImageSplit  block  wrapper">
    <div
      :class="{ 'grid--reverse': reverse }"
      class="TextImageSplit__inner  grid  grid--rigid">
      <div
        class="TextImageSplit__item  grid__item  u-1/2@sm">
        <p v-if="text">{{ text }}</p>
      </div>
      <div class="TextImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="image"
          :class="`media--${ratio}`"
          class="media"
        >
          <img
            :src="image.file.url"
            :alt="image.title">
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
