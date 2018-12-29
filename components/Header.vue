<template>
  <header
    :class="{ 'Header--home': logoHidden }"
    :style="{ 'opacity': opacity }"
    class="Header">
    <div class="Header__left">
      <nuxt-link
        to="/"
        class="Header__logo"
      >Break</nuxt-link>
    </div>
    <div class="Header__right">
      <ul class="Header__nav">
        <li class="Header__navItem">
          <nuxt-link
            to="/about"
            class="Header__link"
          >About
          </nuxt-link>
        </li>
        <li class="Header__navItem">
          <a
            href="mailto:hello@break-journal.com"
            class="Header__link"
          >Contact
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      logoHidden: false,
      opacity: 1,
      scrollPosition: 0,
    }
  },

  watch: {
    $route() {
      this.logoHidden = this.$nuxt.$route.path === '/'
      return this.logoHidden
    },
  },

  created() {
    this.logoHidden = this.$nuxt.$route.path === '/'
    return this.logoHidden
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll() {
      const prevScrollPosition = this.scrollPosition
      const scrollPosition = window.scrollY

      if (scrollPosition > prevScrollPosition && scrollPosition > 120) {
        this.opacity = 0
      } else {
        this.opacity = 1
      }

      this.scrollPosition = scrollPosition

      return this.opacity
    },
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding-right: var(--bsu);
  padding-left: var(--bsu);
  transition: opacity .3s ease;

  @media (--sm) {
    padding-right: var(--bsu-xl);
    padding-left: var(--bsu-xl);
  }
}

.Header__logo {
  font-family: var(--font-serif);
  font-size: 48px;
  line-height: 1;
  font-weight: normal;
  letter-spacing: .025em;
  text-transform: lowercase;
  opacity: 1;
  transition: opacity 900ms cubic-bezier(.645, .045, .355, 1);

  .Header--home & {
    opacity: 0;
  }
}

.Header__nav {
  margin-bottom: 0;
}

.Header__link {
  font-family: var(--font-mono);
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  letter-spacing: .05em;
  text-transform: none;
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
