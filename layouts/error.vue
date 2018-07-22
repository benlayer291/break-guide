<template>
  <main>
    <div
      class="Error">
      <h1
        class="Error__title"
      >{{ message }}</h1>
      <nuxt-link
        to="/"
        class="Error__link"
      >Back to homepage</nuxt-link>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      require: false,
      default() {
        return {}
      },
    },
  },

  computed: {
    message() {
      let msg
      if (this.error && this.error.status) {
        msg = this.error.status
      } else {
        msg = '404'
      }
      return msg
    },
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Error {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding-right: var(--bsu);
  padding-left: var(--bsu);

  @media (--sm) {
    padding-right: var(--bsu-xl);
    padding-left: var(--bsu-xl);
  }
}

.Error__title {
  margin-bottom: 0;
}

.Error__link {
  display: block;
  font-family: var(--font-mono);
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  letter-spacing: .05em;
  text-transform: none;
  margin-bottom: 0;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: border-color var(--trans), color var(--trans);

  &:hover,
  &:active {
    border-color: var(--blue);
    color: var(--blue);
  }
}
</style>
