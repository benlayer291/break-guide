<template>
  <div class="Next  wrapper  block">
    <nuxt-link
      class="Next__item"
      to="/"
    >
      <h3 class="Next__item-text  t-h2">Back</h3>
    </nuxt-link>
    <nuxt-link
      class="Next__item"
      to="/"
    >
      <h3 class="Next__item-text  t-h2">Next</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Next',
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
