<template>
  <section class="TextImageSplit  block  wrapper">
    <div
      :class="{ 'grid--reverse': reverse }"
      class="TextImageSplit__inner  grid  grid--rigid">
      <div
        class="TextImageSplit__item  grid__item  u-1/2@sm">
        <p>{{ text }}</p>
      </div>
      <div class="TextImageSplit__item  grid__item  u-1/2@sm">
        <div
          :class="`media--${ratio}`"
          class="media"
        />
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
      return this.fields.image ? this.fields.image : ''
    },
    ratio() {
      return this.fields.ratio ? this.fields.ratio : '1:1'
    },
    reverse() {
      return this.fields.reverse ? this.fields.reverse : false
    },
    text() {
      return this.fields.text ? this.fields.text : ''
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
