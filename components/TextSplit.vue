<template>
  <section
    v-observe-visibility="{
      callback: setInView,
      intersection: { threshold: 0.1 }
    }"
    :class="{
      'js-in-view': inView,
      'js-out-of-view': !inView
    }"
    class="TextSplit  block  wrapper">
    <div class="TextSplit__inner  grid  grid--rigid">
      <div
        class="TextSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="textOne"
          v-html="$md.render(textOne).replace('<a','<a target=_blank')" />
      </div>
      <div
        class="TextSplit__item  grid__item  u-1/2@sm">
        <div
          v-if="textTwo"
          v-html="$md.render(textTwo).replace('<a','<a target=_blank')" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TextSplit',

  props: {
    fields: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      inView: false,
    }
  },

  computed: {
    textOne() {
      return this.fields.textOne ? this.fields.textOne : false
    },
    textTwo() {
      return this.fields.textTwo ? this.fields.textTwo : false
    },
  },

  methods: {
    setInView(visibility) {
      if (visibility) {
        this.inView = visibility
      }
    },
  },
}
</script>
