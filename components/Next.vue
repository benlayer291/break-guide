<template>
  <div class="Next  wrapper  block">
    <nuxt-link
      :to="prev"
      class="Next__item"
    >
      <h3 class="Next__item-text  t-h2">Prev</h3>
    </nuxt-link>
    <nuxt-link
      :to="next"
      class="Next__item"
    >
      <h3 class="Next__item-text  t-h2">Next</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Next',

  props: {
    breaks: {
      type: Array,
      required: true,
    },
    current: {
      type: String,
      required: true,
    },
  },

  computed: {
    next() {
      const breakIds = this.breaks.map(breakItem => breakItem.sys.id)
      const currentBreakIndex = breakIds.indexOf(this.current)
      const nextBreakIndex = (currentBreakIndex === breakIds.length - 1) ? 0 : currentBreakIndex + 1
      const nextBreak = this.breaks[nextBreakIndex]

      return `/break/${nextBreak.fields.slug}`
    },

    prev() {
      const breakIds = this.breaks.map(breakItem => breakItem.sys.id)
      const currentBreakIndex = breakIds.indexOf(this.current)
      const prevBreakIndex = (currentBreakIndex === 0) ? breakIds.length - 1 : currentBreakIndex - 1
      const prevBreak = this.breaks[prevBreakIndex]

      return `/break/${prevBreak.fields.slug}`
    },
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Next__item {
  display: inline-block;

  &:first-child {
    margin-right: var(--bsu);
  }

  &:first-child .Next__item-text {
    border-bottom: 1px solid var(--grey2);
    color: var(--grey2);

    &:hover,
    &:active {
      border-color: var(--blue);
      color: var(--blue);
    }
  }
}

.Next__item-text {
  border-bottom: 1px solid var(--black);
  color: var(--black);
  transition: color var(--trans), border-color var(--trans);

  &:hover,
  &:active {
    border-color: var(--blue);
    color: var(--blue);
  }
}
</style>
