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
      viewBox="0 0 1200 402"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="waves-line__four"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M52 210C96.9143 210 148.5 354.786 237.5 354.786C413.594 354.786 446 -69 605 93.5M762.5 274.5C1021 506 1192 114 982.5 48"
          stroke="url(#waves-line__four0_linear)"
          class="waves-line__four__stroke waves-line__four__two"
        />
        <path
          d="M683 411.5C561.997 229.471 634.441 56.2184 849 14.5002C988.967 -12.7145 1206 27.9991 1198.29 204.999"
          stroke="url(#waves-line__four1_linear)"
          class="waves-line__four__stroke"
        />
        <path
          d="M543.429 464.062C399 179.501 640.919 34.7169 845 52.0011C1028 67.4999 1133.5 278 1020.5 405.5"
          stroke="url(#waves-line__four2_linear)"
          class="waves-line__four__stroke waves-line__four__four"
        />
        <path
          d="M0.0858154 368.57C0.0858154 368.57 133.286 394.366 257.07 394.366C362.992 394.366 509.662 336.509 599.927 330.149C721.586 321.581 819.857 389.999 1042.31 350.763C1112.02 338.471 1200.09 289.713 1200.09 289.713"
          stroke="url(#waves-line__four3_linear)"
          class="waves-line__four__stroke"
        />
      </g>
      <defs>
        <linearGradient
          id="waves-line__four0_linear"
          x1="0.585816"
          y1="267.387"
          x2="1200.73"
          y2="267.387"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.11"
            stop-color="white"
            stop-opacity="0"
          />
          <stop
            offset="0.33"
            stop-color="white"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line__four1_linear"
          x1="543.343"
          y1="295.644"
          x2="1198.35"
          y2="295.644"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.17"
            stop-color="white"
            stop-opacity="0"
          />
          <stop
            offset="0.29"
            stop-color="white"
            stop-opacity="0.08"
          />
          <stop
            offset="0.54"
            stop-color="white"
            stop-opacity="0.29"
          />
          <stop
            offset="0.77"
            stop-color="white"
            stop-opacity="0.5"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line__four2_linear"
          x1="543.343"
          y1="355.379"
          x2="1225.27"
          y2="355.379"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="white"
            stop-opacity="0"
          />
          <stop
            offset="0.12"
            stop-color="white"
            stop-opacity="0.08"
          />
          <stop
            offset="0.36"
            stop-color="white"
            stop-opacity="0.29"
          />
          <stop
            offset="0.7"
            stop-color="white"
            stop-opacity="0.62"
          />
          <stop
            offset="0.77"
            stop-color="white"
            stop-opacity="0.7"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line__four3_linear"
          x1="0.047244"
          y1="342.054"
          x2="1200.19"
          y2="342.054"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.15"
            stop-color="white"
            stop-opacity="0"
          />
          <stop
            offset="0.45"
            stop-color="white"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <clipPath id="clip0">
          <rect
            width="1200"
            height="402"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'WavesLineFour',
  props: {
    width: {
      type: [Number, String],
      default: 1200,
    },
    height: {
      type: [Number, String],
      default: 402,
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
.waves-line {
  &__four {
    &__stroke {
      animation: stroke-width 4s ease-in-out infinite;
      stroke-dasharray: 1235;
      stroke-dashoffset: -1235;
    }

    &__four {
      animation-delay: 4s;
    }

    &__two {
      animation-delay: 2s;
    }
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
