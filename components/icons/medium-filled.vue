<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="medium-filled"
    class="medium-filled"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <path
      d="M13.2812 12.0001C13.2812 15.3138 10.7558 18 7.6407 18C4.52561 18 2 15.3132 2 12.0001C2 8.68705 4.52542 6 7.6407 6C10.756 6 13.2812 8.68644 13.2812 12.0001ZM19.469 12.0001C19.469 15.1192 18.2063 17.6487 16.6487 17.6487C15.091 17.6487 13.8283 15.1192 13.8283 12.0001C13.8283 8.881 15.0908 6.35147 16.6485 6.35147C18.2061 6.35147 19.4688 8.88019 19.4688 12.0001H19.469ZM22 12.0001C22 14.794 21.556 17.0604 21.0081 17.0604C20.4602 17.0604 20.0163 14.7947 20.0163 12.0001C20.0163 9.20555 20.4604 6.93982 21.0081 6.93982C21.5558 6.93982 22 9.20534 22 12.0001"
      fill="currentColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'MediumFilled',
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
