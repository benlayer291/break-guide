<template>
  <div
    :class="{
      'is-scrolled': isScrolled,
      'is-hidden': footerIsInView
    }"
    class="Hero">
    <h1
      class="Hero__title"
    >{{ title }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Hero',

  props: {
    fields: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isScrolled: false,
    }
  },

  computed: {
    ...mapGetters({
      footerIsInView: 'footer/getInView',
    }),

    title() {
      return this.fields.title ? this.fields.title : ''
    },
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      const scrollPosition = window.scrollY
      this.isScrolled = scrollPosition > 120

      return this.isScrolled
    },
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Hero {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: calc(100vh - 120px);
  padding-right: var(--bsu);
  padding-left: var(--bsu);

  @media (--sm) {
    height: calc(100vh - 180px);
    padding-right: var(--bsu-xl);
    padding-left: var(--bsu-xl);
  }

  &__title {
    position: fixed;
    top: calc(50% - .7em);
    z-index: var(--z1);
    margin-bottom: 0;
    opacity: 1;
    pointer-events: none;
    transition: opacity .25s ease, color .9s ease;

    .is-scrolled & {
      color: color-mod(var(--blue) a(.25));
    }

    .is-hidden & {
      opacity: 0;
    }
  }
}
</style>
