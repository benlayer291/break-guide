<template>
  <svg
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>{{ title }}</title>
    <use :xlink:href="`#${file}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    className: {
      required: false,
      type: String,
      default() {
        return ''
      },
    },

    file: {
      required: true,
      type: String,
    },

    title: {
      required: true,
      type: String,
    },
  },
}
</script>
