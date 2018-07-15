<template>
  <section class="ImageFull  wrapper  block">
    <div
      :class="`media--${ratio}`"
      class="media"
    />
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

  computed: {
    image() {
      return this.fields.image ? this.fields.image : ''
    },
    ratio() {
      return this.fields.ratio ? this.fields.ratio : ''
    },
  },
}
</script>
