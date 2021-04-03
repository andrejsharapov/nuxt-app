<template lang="pug">
.flies-cards
  - for (var x = 0; x < 2; x++)
    .flies-card__block
</template>

<script>
export default {
  name: 'FliesCardVertically',
}
</script>

<style lang="postcss">
.flies-card {
  &__block {
    position: absolute;
    top: 10vh;
    right: 10vw;
    width: var(--card-size, 16rem);
    height: var(--card-size, 16rem);
    border-radius: 1rem;
    background-image: linear-gradient(
      to top,
      hsla(0, 0%, 100%, 0.2),
      hsla(0, 0%, 100%, 0.04)
    );

    &:nth-child(1) {
      animation: flying 8s infinite alternate both;
      transform: rotateX(40deg) rotateX(18deg) rotateZ(53deg);
    }

    &:nth-child(2) {
      animation: flying 6s infinite alternate both;
      transform: translate3d(0, 90px, 0) rotateX(40deg) rotateX(18deg)
        rotateZ(53deg);
    }
  }
}

@keyframes flying {
  0% {
    transform: translateY(30px) rotateX(40deg) rotateX(18deg) rotateZ(53deg);
  }
  100% {
    transform: translateY(-30px) rotateX(40deg) rotateX(18deg) rotateZ(53deg);
  }
}
</style>
