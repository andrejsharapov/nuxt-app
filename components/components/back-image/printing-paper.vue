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
      class="printing-paper"
    >
      <path
        class="printing-paper__stroke"
        d="M352.286 53.4205L423.537 215.044L368.553 218.271L299.221 48.2315L352.863 52.4589L388.346 25.1797L438.897 35.5798L522.904 195.852L476.712 197.585L424.335 215.044L353.067 53.4205L388.346 26.7328L476.712 196.133L425 214.822L367.258 219.347M314.352 230.567L244.306 48.2315L155.072 66.4997L227.442 247.716L223.499 248.536L150.84 67.0287H66.8606L136.865 248.974L222.986 248.536L311.431 230.567L240.274 48.2315L307.812 230.567L236.19 48.9595L304.621 231.133L232.187 47.6785L151.643 67.0287L224.338 248.085"
        stroke="#fff"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PrintingPaper',
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
.printing-paper {
  &__stroke {
    animation: stroke-width 4s ease-in-out infinite;
    stroke-dasharray: 3000;
    stroke-dashoffset: -3000;
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
