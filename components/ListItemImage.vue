<template>
  <li
    :class="[{
      'is-active': (activeIndex - 1) === index,
      'is-active--hover': hoverIndex === index
    }, `List__image--${index}`]"
    class="List__image"
  >
    <style>
      .List__image--{{ index }} {
      top: 50%;
      left: 5%;
      width: 90%;
      }

      @media only screen and (min-width: 500px) {
      .List__image--{{ index }} {
      top: {{ top }}%;
      left: {{ left }}%;
      width: {{ width }}%;
      transform: none;
      }
      }
    </style>
    <div
      :class="`media--${ratio}`"
      class="media"
    >
      <img
        :src="image.file.url"
        :alt="image.title">
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListItemImage',

  props: {
    activeIndex: {
      type: Number,
      required: true,
    },
    fields: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      hoverIndex: 'list/getHoverIndex',
    }),

    image() {
      return this.fields.featureImage && this.fields.featureImage.fields ? this.fields.featureImage.fields : false
    },

    left() {
      return this.fields.featureImagePositionX ? this.fields.featureImagePositionX : 0
    },

    ratio() {
      return this.fields.featureImageRatio ? this.fields.featureImageRatio : '1:1'
    },

    top() {
      return this.fields.featureImagePositionY ? this.fields.featureImagePositionY : 0
    },

    width() {
      return this.fields.featureImageWidth ? this.fields.featureImageWidth : 50
    },
  },
}
</script>

<style lang="postcss">
.List__image {
  position: absolute;
  opacity: 0;
  transform: translateY(-50%);
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
