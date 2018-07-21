<template>
  <li
    ref="listItem"
    class="List__slide">
    <h1>Slide 1</h1>
  </li>
</template>

<script>
export default {
  name: 'ListItem',

  data() {
    return {
      observer: null,
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(entries => console.log(entries), {
      threshold: [0, 1],
    })
    this.observer.observe(this.$refs.listItem)
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.List {
  position: relative;
  min-height: 100vh;
}

.List__wrapper {
  padding-top: 50vh;
  padding-right: var(--bsu);
  padding-left: var(--bsu);

  @media (--sm) {
    padding-right: var(--bsu-xl);
    padding-left: var(--bsu-xl);
  }
}

.List__slides {
  position: relative;
  z-index: var(--z1);
}

.List__slide {
  position: relative;
}

.List__images {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
}

.List__image {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
}
</style>
