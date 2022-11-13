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
      viewBox="0 0 1200 402"
      :width="width"
      :height="height"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="waves-line"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M593.678 191.27C672.118 150.207 741.512 142.847 811.103 142.847C939.975 142.847 1014.16 181.494 1138.02 217.066C1240.68 246.547 1319.91 242.685 1402.3 233.386C1514.89 220.678 1553.25 178.895 1604.34 131.752V401.197H404.335H266.277C266.277 401.197 513.83 233.07 593.678 191.27Z"
          fill="url(#waves-line0_linear)"
        />
        <path
          d="M543.429 423.222C787.8 341.476 794.773 181.079 942.806 86.2235C1013.94 40.6535 1129.29 40.0792 1198.29 60.6506L1200.09 423.128L543.429 423.222Z"
          fill="url(#waves-line1_linear)"
        />
        <path
          d="M0.0856934 402.857C45 402.857 154.714 402.857 237 382.286C312.231 363.48 352.611 343.775 405.381 334.753C494.854 319.453 585.163 374.032 724.791 373.003C836.649 372.18 904.791 347.829 942.789 335.156C1015.88 305.405 1149 234 1200.09 186.857"
          stroke="url(#waves-line2_linear)"
          class="waves-line__stroke"
        />
        <path
          d="M239.774 286.641C343.801 260.93 451.277 294.923 514.043 294.923C576.808 294.923 805.285 213.986 942.784 210.826C1043.96 208.501 1131.24 232.109 1200.09 241.683V483.35H0.0856934V422.6C51.9043 445.22 135.303 312.461 239.774 286.641Z"
          fill="url(#waves-line3_linear)"
        />
        <path
          d="M254.935 164.831C395.5 121.271 545.054 164.831 631.192 185.504C759.668 216.337 890.639 287.197 1041.91 230.985C1110.26 205.584 1200.09 131.752 1200.09 131.752V402.858H0.0856934V334.381C0.0856934 334.381 140.753 200.214 254.935 164.831Z"
          fill="url(#waves-line4_linear)"
        />
        <path
          d="M390.208 0H462.951L586.018 280.062H513.274L390.208 0Z"
          fill="url(#waves-line5_linear)"
        />
        <path
          d="M213.699 0H150.913L8.05303 316.637H70.8387L213.699 0Z"
          fill="url(#waves-line6_linear)"
        />
        <path
          d="M1187.32 0H1075.77L1004.34 158.319H1115.89L1187.32 0Z"
          fill="url(#waves-line7_linear)"
        />
        <path
          d="M903.223 0H777.651L565.213 483.446L690.836 483.339L903.223 0Z"
          fill="url(#waves-line8_linear)"
        />
        <path
          d="M653.087 0H478.937L266.499 483.446H440.649L653.087 0Z"
          fill="url(#waves-line9_linear)"
        />
        <path
          d="M543.429 426.513C787.8 344.767 794.773 184.37 942.806 89.5145C1013.94 43.9445 1129.29 43.3702 1198.29 63.9416"
          stroke="url(#waves-line10_linear)"
          class="waves-line__stroke"
        />
        <path
          d="M518.276 388.743C680.704 319.031 792.506 203.282 942.784 176.347C1052.99 157.515 1131.24 197.63 1200.09 207.204"
          stroke="url(#waves-line11_linear)"
          class="waves-line__stroke"
        />
        <path
          d="M62.739 410.176C62.739 410.176 159.454 291.497 288.545 275.888C363.253 266.854 435.685 310.775 566.994 285.266C732.155 253.18 829.745 208.967 966.928 208.967C1046.26 208.967 1216.79 245.217 1216.79 245.217"
          stroke="url(#waves-line12_linear)"
          class="waves-line__stroke"
        />
        <path
          d="M275.165 0H347.858L421.608 167.833L347.858 167.621L275.165 0Z"
          fill="url(#waves-line13_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="waves-line0_linear"
          x1="991.153"
          y1="228.542"
          x2="1029.28"
          y2="299.153"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#9773FF"
            stop-opacity="0.1"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line1_linear"
          x1="1.23019e+06"
          y1="191947"
          x2="1.31748e+06"
          y2="377773"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7673FF"
            stop-opacity="0.1"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line2_linear"
          x1="0.0856934"
          y1="294.887"
          x2="1200.23"
          y2="294.887"
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
          id="waves-line3_linear"
          x1="1.66771e+06"
          y1="228367"
          x2="1.67929e+06"
          y2="341566"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#C173FF"
            stop-opacity="0.1"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line4_linear"
          x1="1.62449e+06"
          y1="150615"
          x2="1.62725e+06"
          y2="196724"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7673FF"
            stop-opacity="0.1"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line5_linear"
          x1="423.435"
          y1="-1.53184"
          x2="563.851"
          y2="143.093"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7E73FF"
            stop-opacity="0.08"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line6_linear"
          x1="-233725"
          y1="755959"
          x2="-233820"
          y2="755868"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#C86EFF"
            stop-opacity="0.08"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line7_linear"
          x1="-207494"
          y1="377987"
          x2="-207520"
          y2="377941"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7379FF"
            stop-opacity="0.08"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line8_linear"
          x1="-3.17485e+08"
          y1="-1.39651e+09"
          x2="-3.17745e+08"
          y2="-1.39633e+09"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7673FF"
            stop-opacity="0.08"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line9_linear"
          x1="-4.12752e+08"
          y1="-1.39651e+09"
          x2="-4.13025e+08"
          y2="-1.39626e+09"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7976F5"
            stop-opacity="0.08"
          />
          <stop
            offset="1"
            stop-color="white"
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="waves-line10_linear"
          x1="543.343"
          y1="238.726"
          x2="1198.35"
          y2="238.726"
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
          id="waves-line11_linear"
          x1="518.19"
          y1="280.057"
          x2="1200.12"
          y2="280.057"
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
          id="waves-line12_linear"
          x1="18.4963"
          y1="335.426"
          x2="1218.64"
          y2="335.426"
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
        <linearGradient
          id="waves-line13_linear"
          x1="348.508"
          y1="-0.917966"
          x2="429.97"
          y2="62.0329"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color="#7E73FF"
            stop-opacity="0.08"
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
  name: 'WavesLine',
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
  &__stroke {
    animation: stroke-width 10s ease-in-out infinite;
    stroke-dasharray: 1235;
    stroke-dashoffset: -1235;
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
