<template>
  <div>
    <SvgSprite />
    <main>
      <nuxt/>
    </main>
    <Guide />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
  components: {
    Guide,
    SvgSprite,
  },
}
</script>
