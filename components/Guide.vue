<template>
  <div>
    <input
      type="checkbox"
      class="guide__toggle"
    >
    <div class="guide">
      <div class="guide__wrapper  wrapper">
        <div class="guide__grid  grid  grid--rigid">
          <div
            v-for="i in 12"
            :key="i"
            class="grid__item  u-1/12"
          >
            <div class="guide__item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@import "../assets/css/settings/vars";

.guide {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translate3d(0, 0, 0);
  width: 100%;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: var(--trans);
}

.guide__item {
  height: 100vh;
  background-color: color-mod(pink a(0.5));
}

.guide__toggle {
  position: fixed;
  right: var(--bsu);
  bottom: var(--bsu);
  z-index: var(--z5);
  width: var(--bsu-lg);
  height: var(--bsu-lg);
  background-color: var(--white);
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  outline: none;
  transform: translate3d(0, 0, 0);
  transition: var(--trans);
  box-shadow:
      0 2px 5px 0 color-mod(var(--grey1) a(0.15)),
      0 2px 10px 0 color-mod(var(--grey1) a(0.2));
  background-color: color-mod(var(--grey1) a(0.5));

  &:hover {
    box-shadow:
      0 5px 11px 0 color-mod(var(--grey1) a(0.2)),
      0 4px 15px 0 color-mod(var(--grey1) a(0.25));
  }

  &:active,
  &:checked {
    box-shadow:
      0 2px 5px 0 color-mod(var(--grey1) a(0.15)),
      0 2px 10px 0 color-mod(var(--grey1) a(0.2));
  }

  &:checked + .guide {
    opacity: 1;
  }
}
</style>
