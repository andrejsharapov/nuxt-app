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
      hsla(0deg 0% 100% / 20%),
      hsla(0deg 0% 100% / 4%)
    );

    &:nth-child(1) {
      transform: rotateX(40deg) rotateX(18deg) rotateZ(53deg);
      animation: flying 8s infinite alternate both;
    }

    &:nth-child(2) {
      transform: translate3d(0, 90px, 0) rotateX(40deg) rotateX(18deg)
        rotateZ(53deg);
      animation: flying 6s infinite alternate both;
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
