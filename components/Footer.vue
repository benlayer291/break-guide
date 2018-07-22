<template>
  <footer
    :class="{'is-hidden': onHome }"
    class="Footer">
    <div class="Footer__left">
      <button
        class="Footer__link  Footer__link--anchor"
        type="button">Back to top</button>
    </div>
    <div class="Footer__right">
      <ul
        class="Footer__list">
        <li
          v-for="breakItem in breaks"
          :key="breakItem.sys.id"
          class="Footer__listItem">
          <nuxt-link
            :to="`/break/${breakItem.fields.slug}`"
            class="Footer__link">
            {{ breakItem.fields.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="Footer__credits">
      <ul class="Footer__list">
        <li class="Footer__listItem">&copy; Break guide</li>
        <li class="Footer__listItem">Design &amp; build by
          <a
            href="#"
            class="t-link"
          >Ben&nbsp;Layer</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { createClient } from '@/plugins/contentful'

const contentful = createClient()

export default {
  name: 'Footer',

  data() {
    return {
      breaks: [],
      onHome: this.$nuxt.$route.name === 'index',
    }
  },

  watch: {
    $route() {
      this.onHome = this.$nuxt.$route.name === 'index'
      return this.onHome
    },
  },

  created() {
    return contentful
      .getEntries({
        content_type: 'break',
      })
      .then((res) => {
        this.breaks = res.items
        return this.breaks
      })
      .catch(error => console.error(error))
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.Footer {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: var(--bsu-lg) var(--bsu) calc(var(--bsu-lg) - var(--bsu));

  @media (--sm) {
    padding: var(--bsu-xl) var(--bsu-xl) calc(var(--bsu-xl) - var(--bsu));
  }

  &.is-hidden {
    display: none;
  }
}

.Footer__left {
  flex: 0 0 100%;
  margin-bottom: var(--bsu-lg);

  @media (--sm) {
    flex: 0 1 33%;
    margin-bottom: 0;
  }
}

.Footer__right {
  flex: 0 0 100%;

  @media (--sm) {
    flex: 0 1 67%;
  }
}

.Footer__credits {
  flex: 0 0 100%;
  align-items: flex-end;
  font-size: 12px;
  margin-top: var(--bsu-lg);

  & .Footer__list {
    align-items: flex-end;
  }
}

.Footer__list {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 0;
}

.Footer__listItem {
  flex: 0 0 50%;

  @media (--sm) {
    flex: 0 0 33%;
  }
}

.Footer__link {
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
