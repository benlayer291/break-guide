<template>
  <div>
    <Header />
    <SvgSprite />
    <nuxt/>
    <Guide />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue'
import Header from '@/components/Header.vue'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
  components: {
    Header,
    Guide,
    SvgSprite,
  },
}
</script>
