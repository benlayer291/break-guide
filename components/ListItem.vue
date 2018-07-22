<template>
  <li class="List__item  t-h1  swiper-slide">
    <span
      @mouseenter="setHoverIndex(index)"
      @mouseleave="setHoverIndex(null)">
      <nuxt-link
        :to="slug"
        class="List__item-link"
      >
        {{ title }}
      </nuxt-link>
    </span>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ListItem',

  props: {
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
    slug() {
      return this.fields.slug ? `/break/${this.fields.slug}` : ''
    },

    title() {
      return this.fields.title ? this.fields.title : ''
    },
  },

  beforeDestroy() {
    this.setHoverIndex(null)
  },

  methods: {
    ...mapMutations({
      setHoverIndex: 'list/setHoverIndex',
    }),
  },
}
</script>
