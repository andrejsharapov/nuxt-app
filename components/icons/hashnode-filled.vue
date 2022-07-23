<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="hashnode-filled"
    class="hashnode-filled"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <path
      d="M1.64919 15.9811C-0.549729 13.7824 -0.549729 10.2176 1.64919 8.01869L8.01879 1.64904C10.2175 -0.549681 13.7822 -0.549681 15.9812 1.64904L22.351 8.01869C24.5497 10.2174 24.5497 13.7822 22.351 15.9811L15.9812 22.351C13.7824 24.5497 10.2177 24.5497 8.01879 22.351L1.64919 15.9811ZM12 15.931C14.171 15.931 15.931 14.1711 15.931 12C15.931 9.82895 14.171 8.06897 12 8.06897C9.82895 8.06897 8.06896 9.82895 8.06896 12C8.06896 14.1711 9.82895 15.931 12 15.931Z"
      fill="currentColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'HashnodeFilled',
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
