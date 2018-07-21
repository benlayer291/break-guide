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
          <span
            class="List__item-link"
          >
            break
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(1)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(2)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(3)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(4)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(5)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(6)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(7)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
        <li
          class="List__item  t-h1  swiper-slide">
          <span
            @mouseenter="showImage(8)"
            @mouseleave="hideImage()">
            <nuxt-link
              to="/break/slug"
              class="List__item-link"
            >
              Slide
            </nuxt-link>
          </span>
        </li>
      </ul>
      <ul class="List__images">
        <li
          :style="{ top: '5%', left: '40%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 1,
            'is-active--hover': hoverIndex && hoverIndex === 1
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '10%', left: '35%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 2,
            'is-active--hover': hoverIndex && hoverIndex === 2
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '15%', left: '30%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 3,
            'is-active--hover': hoverIndex && hoverIndex === 3
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '20%', left: '25%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 4,
            'is-active--hover': hoverIndex && hoverIndex === 4
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '25%', left: '20%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 5,
            'is-active--hover': hoverIndex && hoverIndex === 5
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '30%', left: '15%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 6,
            'is-active--hover': hoverIndex && hoverIndex === 6
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '35%', left: '10%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 7,
            'is-active--hover': hoverIndex && hoverIndex === 7
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
        <li
          :style="{ top: '40%', left: '5%' }"
          :class="{
            'is-active': swiper && swiper.activeIndex === 8,
            'is-active--hover': hoverIndex && hoverIndex === 8
          }"
          class="List__image">
          <img src=" http://www.placecage.com/g/200/300">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'List',

  data() {
    return {
      swiper: null,
      hoverIndex: null,
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
  },

  methods: {
    showImage(index) {
      console.log(index)
      this.hoverIndex = index
    },

    hideImage() {
      this.hoverIndex = null
    },
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

.List__images {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.List__image {
  position: absolute;
  opacity: 0;
  transition: opacity .25s ease-in-out;

  &.is-active,
  &.is-active--hover {
    opacity: 1;
  }

  &.is-active--hover {
    z-index: var(--z1);
  }
}
</style>
