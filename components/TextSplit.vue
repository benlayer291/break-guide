<template>
  <section class="TextSplit  block  wrapper">
    <div class="TextSplit__inner  grid  grid--rigid">
      <div
        class="TextSplit__item  grid__item  u-1/2@sm">
        <p v-if="textOne">{{ textOne }}</p>
      </div>
      <div
        class="TextSplit__item  grid__item  u-1/2@sm">
        <p v-if="textTwo">{{ textTwo }}</p>
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

  computed: {
    textOne() {
      return this.fields.textOne ? this.fields.textOne : ''
    },
    textTwo() {
      return this.fields.textTwo ? this.fields.textTwo : ''
    },
  },
}
</script>
