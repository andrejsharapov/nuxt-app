<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="codepen-outline"
    class="codepen-outline"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient
        id="gradientIcon"
        x1="0"
        x2="100%"
        y1="100%"
        y2="0"
      >
        <stop
          offset="5%"
          :stop-color="stopOne"
        />
        <stop
          offset="95%"
          :stop-color="stopTwo"
        />
      </linearGradient>
    </defs>
    <path
      fill="currentColor"
      d="M12.549 2.26C12.288 2.08706 11.981 1.9965 11.6679 2.00007C11.3548 2.00364 11.05 2.10116 10.793 2.28L2.928 7.76C2.508 8.052 2.258 8.53 2.258 9.042V14.945C2.258 15.47 2.522 15.959 2.96 16.248L10.954 21.533C11.2095 21.702 11.5091 21.7921 11.8155 21.7921C12.1219 21.7921 12.4214 21.702 12.677 21.533L20.83 16.147C21.268 15.857 21.531 15.367 21.531 14.843V9.043C21.531 8.519 21.268 8.03 20.831 7.74L12.549 2.26ZM18.639 8.653L15.625 10.676L12.799 8.621L12.781 4.579L18.638 8.653H18.639ZM10.737 4.583V8.54L7.84 10.564L4.953 8.627L10.737 4.583V4.583ZM4.16 10.576L6.03 11.829L4.16 13.137V10.577V10.576ZM10.785 19.009L4.954 15.1L7.867 13.063L10.787 15.021V19.011L10.785 19.009ZM9.68 11.796L11.568 10.476L13.768 11.921L11.818 13.231L9.68 11.796V11.796ZM12.847 19.009V15.019L15.637 13.149L18.64 15.124L12.847 19.009V19.009ZM19.472 13.204L17.492 11.904L19.472 10.575V13.205V13.204Z"
    />
  </svg>
</template>

<script>
export default {
  name: 'CodepenOutline',
  props: {
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    stopOne: {
      type: String,
      default: 'var(--primary)',
    },
    stopTwo: {
      type: String,
      default: 'var(--accent)',
    },
  },
}
</script>
