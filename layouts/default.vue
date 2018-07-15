<template>
  <div>
    <SvgSprite />
    <Header />
    <nuxt/>
    <Footer />
    <Guide />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Guide from '@/components/Guide.vue'
import Header from '@/components/Header.vue'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
  components: {
    Header,
    Guide,
    Footer,
    SvgSprite,
  },
}
</script>
