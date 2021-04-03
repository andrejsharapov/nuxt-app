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
      class="waves-line-three"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M29.5959 402.56C29.5959 402.56 146.773 379.589 239.795 361.291C303.92 348.676 403.223 328.825 403.223 328.825C403.223 328.825 580.25 289.832 693.21 264.995C778.659 246.207 827.466 237.37 912.764 220.426C1022.77 198.573 1195.05 163.748 1195.05 163.748"
          stroke="url(#waves-line-three0_linear)"
          class="waves-line-three__stroke"
        />
        <path
          d="M390.208 0H462.951L586.018 280.062H513.274L390.208 0Z"
          fill="url(#waves-line-three1_linear)"
        />
        <path
          d="M213.699 0H150.913L8.05303 316.637H70.8387L213.699 0Z"
          fill="url(#waves-line-three2_linear)"
        />
        <path
          d="M1187.32 0H1075.77L1004.34 158.319H1115.89L1187.32 0Z"
          fill="url(#waves-line-three3_linear)"
        />
        <path
          d="M903.223 0H777.651L565.213 483.446L690.836 483.339L903.223 0Z"
          fill="url(#waves-line-three4_linear)"
        />
        <path
          d="M653.087 0H478.937L266.499 483.446H440.649L653.087 0Z"
          fill="url(#waves-line-three5_linear)"
        />
        <path
          d="M543.429 426.512C543.429 426.512 808.87 229.98 984.982 119.514C1062.89 70.6491 1182.19 1.1875 1182.19 1.1875"
          stroke="url(#waves-line-three6_linear)"
          class="waves-line-three__stroke stroke__two"
        />
        <path
          d="M518.276 388.742C680.704 319.031 912.632 224.354 912.632 224.354L1135.22 112.248"
          stroke="url(#waves-line-three7_linear)"
          class="waves-line-three__stroke stroke__three"
        />
        <path
          d="M62.7393 410.177L332.601 328.337L571.437 255.224L919.13 139.868L1190.46 40.7598"
          stroke="url(#waves-line-three8_linear)"
          class="waves-line-three__stroke stroke__four"
        />
        <path
          d="M275.165 0H347.858L421.608 167.833L347.858 167.621L275.165 0Z"
          fill="url(#waves-line-three9_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="waves-line-three0_linear"
          x1="0.0856928"
          y1="294.887"
          x2="1200.23"
          y2="294.887"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.11" stop-color="white" stop-opacity="0" />
          <stop offset="0.33" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three1_linear"
          x1="423.435"
          y1="-1.53184"
          x2="563.851"
          y2="143.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--light)" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three2_linear"
          x1="-233725"
          y1="755959"
          x2="-233820"
          y2="755868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--light)" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three3_linear"
          x1="-207494"
          y1="377987"
          x2="-207520"
          y2="377941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--light)" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three4_linear"
          x1="-3.17485e+08"
          y1="-1.39651e+09"
          x2="-3.17745e+08"
          y2="-1.39633e+09"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--light)" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three5_linear"
          x1="-4.12752e+08"
          y1="-1.39651e+09"
          x2="-4.13025e+08"
          y2="-1.39626e+09"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--light)" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three6_linear"
          x1="543.343"
          y1="238.726"
          x2="1198.35"
          y2="238.726"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.17" stop-color="white" stop-opacity="0" />
          <stop offset="0.29" stop-color="white" stop-opacity="0.18" />
          <stop offset="0.54" stop-color="white" stop-opacity="0.29" />
          <stop offset="0.77" stop-color="white" stop-opacity="0.5" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three7_linear"
          x1="518.19"
          y1="280.057"
          x2="1200.12"
          y2="280.057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.12" stop-color="white" stop-opacity="0.18" />
          <stop offset="0.36" stop-color="white" stop-opacity="0.29" />
          <stop offset="0.7" stop-color="white" stop-opacity="0.62" />
          <stop offset="0.77" stop-color="white" stop-opacity="0.7" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three8_linear"
          x1="18.4966"
          y1="335.426"
          x2="1218.64"
          y2="335.426"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.15" stop-color="white" stop-opacity="0" />
          <stop offset="0.45" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="waves-line-three9_linear"
          x1="348.508"
          y1="-0.917966"
          x2="429.97"
          y2="62.0329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--light)" stop-opacity="0.18" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="1200" height="402" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'WavesLineThree',
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

<style>
.waves-line-three__stroke {
  stroke-dasharray: 1235;
  stroke-dashoffset: -1235;
  animation: stroke-width 4s ease-in-out infinite;
}

.stroke__two {
  animation-delay: 22s;
}

.stroke__three {
  animation-delay: 14s;
}

.stroke__four {
  animation-delay: 8s;
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
