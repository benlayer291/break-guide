<template>
  <main>
    <section class="block  wrapper">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum risus et orci auctor, vitae consequat risus maximus. Donec ullamcorper gravida dolor, et pretium nisl auctor quis. <a href="#">Duis faucibus</a> luctus sem ut rutrum. Quisque eleifend augue vestibulum elit mollis luctus. Maecenas finibus congue justo.</p>
    </section>
    <section class="block  wrapper">
      <ul>
        <li style="height: 40px; width: 40px; display: inline-block; margin-right: 20px; background-color: #ffffff;" />
        <li style="height: 40px; width: 40px; display: inline-block; margin-right: 20px; background-color: #000000;" />
        <li style="height: 40px; width: 40px; display: inline-block; margin-right: 20px; background-color: #141414;" />
        <li style="height: 40px; width: 40px; display: inline-block; margin-right: 20px; background-color: #c8c8c8;" />
        <li style="height: 40px; width: 40px; display: inline-block; margin-right: 20px; background-color: #003fa3;" />
      </ul>
    </section>
    <section class="block  wrapper">
      <button
        type="button"
        class="button"
      >Button</button>
      <button
        type="button"
        class="button button--solid"
      >Button</button>
    </section>
    <section class="block  wrapper">
      <SvgIcon
        class-name="i-social"
        file="icon-instagram"
        title="Instagram"
      />
    </section>
    <section class="block  wrapper">
      <div class="grid  grid--rigid">
        <div class="grid__item  u-1/2">
          <div class="media media--16:9"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--9:16"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--5:4"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--4:5"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--4:3"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--3:4"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--3:2"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--2:3"/>
        </div>
        <div class="grid__item  u-1/2">
          <div class="media media--1:1"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {
    SvgIcon,
  },
}
</script>
