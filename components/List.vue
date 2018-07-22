<template>
  <section
    class="List"
  >
    <div
      ref="swiper"
      class="List__container  swiper-container"
    >
      <ul class="List__items  List__wrapper  swiper-wrapper">
        <li class="List__item  t-h1  swiper-slide">
          <span class="List__item-link--home">
            break
          </span>
        </li>
        <ListItem
          v-for="(breakItem, index) in breaks"
          :key="breakItem.sys.id"
          :fields="breakItem.fields"
          :index="index"
        />
      </ul>
      <ul class="List__images">
        <ListItemImage
          v-for="(breakItem, index) in breaks"
          :key="breakItem.sys.id"
          :fields="breakItem.fields"
          :index="index"
          :active-index="activeIndex"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import ListItem from '@/components/ListItem'
import ListItemImage from '@/components/ListItemImage'

export default {
  name: 'List',

  components: {
    ListItem,
    ListItemImage,
  },

  props: {
    breaks: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      swiper: null,
      activeIndex: 0,
    }
  },

  mounted() {
    const swiperContainer = this.$refs.swiper

    this.swiper = new Swiper(swiperContainer, {
      slidesPerView: 'auto',
      direction: 'vertical',
      centeredSlides: true,
      freeMode: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumVelocityRatio: 0.5,
      mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
        invert: true,
      },
    })

    this.swiper.on('slideChange', () => {
      this.activeIndex = this.swiper.activeIndex
      return this.activeIndex
    })
  },
}
</script>

<style lang="postcss">
@import "../assets/css/settings/vars";

.List {
  min-height: 100vh;
}

.List__container {
  width: 100%;
  height: 100vh;
  padding-right: var(--bsu);
  padding-left: var(--bsu);

  @media (--sm) {
    padding-right: var(--bsu-xl);
    padding-left: var(--bsu-xl);
  }
}

.List__wrapper {
  height: 100vh;
}

.List__item {
  display: inline;
  height: auto;
  margin-bottom: 0;
}

.List__item-link {
  color: color-mod(var(--blue) a(.25));
  transition: color .9s ease;

  .swiper-slide-active &,
  &:hover,
  &:active {
    color: var(--black);
  }
}

.List__item-link--home {
  color: color-mod(var(--blue) a(.25));

  .swiper-slide-active & {
    color: var(--black);
  }
}

.List__images {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>
