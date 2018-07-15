<template>
  <main>
    <Hero
      :fields="{
        title: 'Article'
      }"
    />
    <TextSplit
      :fields="{
        textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum risus et orci auctor, vitae consequat risus maximus. Donec ullamcorper gravida dolor, et pretium nisl auctor quis. Duis faucibus luctus sem ut rutrum. Quisque eleifend augue vestibulum elit mollis luctus. Maecenas finibus congue justo.',
        textTwo: 'Ut vel velit erat. Nunc et diam nisl. In eu fermentum sapien, non sollicitudin ligula. Maecenas porttitor erat metus. In ullamcorper sodales est nec eleifend. Fusce tincidunt porta urna eu vulputate. Proin sit amet commodo orci. Suspendisse potenti. Cras placerat leo id purus tincidunt, quis efficitur lorem aliquam.',
      }"
    />
    <ImageSplit
      :fields="{
        imageOne: true,
        ratioOne: '1:1',
        imageTwo: true,
        ratioTwo: '1:1',
      }"
    />
    <TextSplit
      :fields="{
        textTwo: 'Ut vel velit erat. Nunc et diam nisl. In eu fermentum sapien, non sollicitudin ligula. Maecenas porttitor erat metus. In ullamcorper sodales est nec eleifend. Fusce tincidunt porta urna eu vulputate. Proin sit amet commodo orci. Suspendisse potenti. Cras placerat leo id purus tincidunt, quis efficitur lorem aliquam.',
      }"
    />
    <ImageSplit
      :fields="{
        imageOne: true,
        ratioOne: '3:4',
        imageTwo: false,
        ratioTwo: '',
      }"
    />
    <ImageFull
      :fields="{
        image: true,
        ratio: '16:9',
      }"
    />
    <TextImageSplit
      :fields="{
        image: true,
        ratio: '16:9',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum risus et orci auctor, vitae consequat risus maximus. Donec ullamcorper gravida dolor, et pretium nisl auctor quis.<br> Duis faucibus luctus sem ut rutrum. Quisque eleifend augue vestibulum elit mollis luctus. Maecenas finibus congue justo. Ut vel velit erat. Nunc et diam nisl. In eu fermentum sapien, non sollicitudin ligula. Maecenas porttitor erat metus. In ullamcorper sodales est nec eleifend. Fusce tincidunt porta urna eu vulputate. Proin sit amet commodo orci. Suspendisse potenti. Cras placerat leo id purus tincidunt, quis efficitur lorem aliquam.<br>Quisque fringilla rhoncus velit quis dignissim. Integer ullamcorper odio ligula, a imperdiet orci accumsan sit amet. Vivamus id efficitur orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer a nibh placerat, tempor orci vel, blandit eros. In vulputate malesuada faucibus. Maecenas viverra magna in mauris hendrerit sodales.'
      }"
    />
    <ImageSplit
      :fields="{
        imageOne: false,
        ratioOne: '',
        imageTwo: true,
        ratioTwo: '4:5',
      }"
    />
    <TextImageSplit
      :fields="{
        image: true,
        ratio: '16:9',
        reverse: true,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum risus et orci auctor, vitae consequat risus maximus. Donec ullamcorper gravida dolor, et pretium nisl auctor quis.<br> Duis faucibus luctus sem ut rutrum. Quisque eleifend augue vestibulum elit mollis luctus. Maecenas finibus congue justo. Ut vel velit erat. Nunc et diam nisl. In eu fermentum sapien, non sollicitudin ligula. Maecenas porttitor erat metus. In ullamcorper sodales est nec eleifend. Fusce tincidunt porta urna eu vulputate. Proin sit amet commodo orci. Suspendisse potenti. Cras placerat leo id purus tincidunt, quis efficitur lorem aliquam.<br>Quisque fringilla rhoncus velit quis dignissim. Integer ullamcorper odio ligula, a imperdiet orci accumsan sit amet. Vivamus id efficitur orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer a nibh placerat, tempor orci vel, blandit eros. In vulputate malesuada faucibus. Maecenas viverra magna in mauris hendrerit sodales.'
      }"
    />
    <TextSplit
      :fields="{
        textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum risus et orci auctor, vitae consequat risus maximus. Donec ullamcorper gravida dolor, et pretium nisl auctor quis. Duis faucibus luctus sem ut rutrum. Quisque eleifend augue vestibulum elit mollis luctus. Maecenas finibus congue justo.',
      }"
    />
    <Next />
  </main>
</template>

<script>
import Hero from '@/components/Hero'
import ImageFull from '@/components/ImageFull'
import ImageSplit from '@/components/ImageSplit'
import Next from '@/components/Next'
import TextSplit from '@/components/TextSplit'
import TextImageSplit from '@/components/TextImageSplit'

export default {
  components: {
    Hero,
    ImageFull,
    ImageSplit,
    Next,
    TextSplit,
    TextImageSplit,
  },
}
</script>
