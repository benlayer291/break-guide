<template>
  <Hero
    :fields="{
      title: 'Article'
    }"
  />
</template>

<script>
import Hero from '@/components/Hero'

export default {
  components: {
    Hero,
  },
}
</script>
