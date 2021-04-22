<template lang="pug">
.flies-stars
  - for (var x = 0; x < 4; x++)
    .flies-stars__block
</template>

<script>
export default {
  name: 'FliesStars',
}
</script>

<style lang="postcss">
.flies-stars {
  --size: 5.25rem;

  &__block {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-image: linear-gradient(
      225deg,
      hsla(0, 0%, 100%, 0.2),
      hsla(0, 0%, 100%, 0.04)
    );
    clip-path: polygon(
      25% 25%,
      50% 0,
      75% 25%,
      100% 50%,
      75% 75%,
      50% 100%,
      25% 75%,
      0 50%
    );
    animation: star-clip 5s cubic-bezier(0.4, 0.8, 0.77, 0.26) infinite;

    &:nth-of-type(1) {
      top: 10vh;
      left: 20vw;
    }

    &:nth-of-type(2) {
      bottom: 3vh;
      left: 9vw;
      transform: scale(0.7);
      transition-delay: 0.7s;
    }

    &:nth-of-type(3) {
      top: 6vh;
      right: 25vw;
      transform: scale(0.5);
      transition-delay: 0.5s;
    }

    &:nth-of-type(4) {
      right: 17vw;
      bottom: 8vh;
      transform: scale(0.7);
      transition-delay: 0.3s;
    }
  }
}

@keyframes star-clip {
  50% {
    clip-path: polygon(
      35% 35%,
      50% 0,
      65% 35%,
      100% 50%,
      65% 65%,
      50% 100%,
      35% 65%,
      0 50%
    );
    transform: scale(1.6);
  }
}
</style>
