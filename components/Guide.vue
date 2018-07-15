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
  right: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
  transition: var(--trans);
}

.guide__item {
  height: 100vh;
  background-color: color-mod(pink a(.5));
}

.guide__toggle {
  position: fixed;
  right: var(--bsu);
  bottom: var(--bsu);
  z-index: var(--z5);
  width: var(--bsu-lg);
  height: var(--bsu-lg);
  opacity: 1;
  background-color: color-mod(var(--grey1) a(.5));
  border-radius: 50%;
  box-shadow:
    0 2px 5px 0 color-mod(var(--grey1) a(.15)),
    0 2px 10px 0 color-mod(var(--grey1) a(.2));
  cursor: pointer;
  outline: none;
  transform: translate3d(0, 0, 0);
  transition: var(--trans);

  &:hover {
    box-shadow:
      0 5px 11px 0 color-mod(var(--grey1) a(.2)),
      0 4px 15px 0 color-mod(var(--grey1) a(.25));
  }

  &:active,
  &:checked {
    box-shadow:
      0 2px 5px 0 color-mod(var(--grey1) a(.15)),
      0 2px 10px 0 color-mod(var(--grey1) a(.2));
  }

  &:checked + .guide {
    opacity: 1;
  }
}
</style>
