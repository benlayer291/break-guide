<template>
  <section class="ImageSplit  block  wrapper">
    <div class="ImageSplit__inner  grid  grid--rigid">
      <div class="ImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="imageOne"
          :class="`media--${ratioOne}`"
          class="media"
        />
      </div>
      <div class="ImageSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="imageTwo"
          :class="`media--${ratioTwo}`"
          class="media"
        />
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

  computed: {
    imageOne() {
      return this.fields.imageOne ? this.fields.imageOne : ''
    },
    ratioOne() {
      return this.fields.ratioOne ? this.fields.ratioOne : '1:1'
    },
    imageTwo() {
      return this.fields.imageTwo ? this.fields.imageTwo : ''
    },
    ratioTwo() {
      return this.fields.ratioTwo ? this.fields.ratioTwo : '1:1'
    },
  },
}
</script>
