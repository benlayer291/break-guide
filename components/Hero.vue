<template>
  <div class="Hero  wrapper">
    <h1 class="Hero__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hero',

  props: {
    fields: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return this.fields.title ? this.fields.title : ''
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

  @media (--sm) {
    height: calc(100vh - 180px);
  }

  &__title {
    margin-top: 50vh;
    margin-bottom: 0;
  }
}
</style>
