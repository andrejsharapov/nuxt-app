<template>
  <div
    :class="{ 'position-absolute': absolute }"
    :style="{
      top: top ? `${top}px` : '',
      right: right ? `${right}px` : '',
      bottom: bottom ? `${bottom}px` : '',
      left: left ? `${left}px` : '',
    }"
  >
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 530 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="modeling-cube"
    >
      <path
        class="modeling-cube__stroke"
        d="M529 87.5L359.5 246.5H167.5L124.5 203V0.5L167.5 43.5H359.5L316.5 0.5V203L359.5 246V42.5L317.5 0.5H126V204.517L167.5 245.5V45H316V203H0"
        stroke="#fff"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ModelingCube',
  props: {
    width: {
      type: [Number, String],
      default: 530,
    },
    height: {
      type: [Number, String],
      default: 250,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    top: {
      type: String,
      default: '',
    },
    right: {
      type: String,
      default: '',
    },
    bottom: {
      type: String,
      default: '',
    },
    left: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.modeling-cube {
  &__stroke {
    animation: stroke-width 4s ease-in-out infinite;
    stroke-dasharray: 4000;
    stroke-dashoffset: -4000;
  }
}

@keyframes stroke-width {
  70%,
  100% {
    stroke-dashoffset: 0;
  }

  to {
    opacity: 0;
  }
}
</style>
