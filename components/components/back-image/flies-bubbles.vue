<template lang="pug">
.flies-bubbles
  - for (var x = 0; x < 6; x++)
    .flies-bubbles__block
</template>

<script>
export default {
  name: 'FliesBubbles',
}
</script>

<style lang="postcss">
.flies-bubbles {
  &__block {
    position: absolute;
    animation: wave 7s linear infinite;
    opacity: 0.25;
    background-image: linear-gradient(45deg, var(--light), transparent);

    &:nth-of-type(1) {
      top: -11rem;
      left: -11rem;
      width: 22rem;
      height: 22rem;
      border-radius: 38% 62% 55% 45% / 32% 53% 47% 68%;
    }

    &:nth-of-type(2) {
      top: 10vh;
      left: 15vw;
      width: 7rem;
      height: 7rem;
      transform: rotate(90deg);
      border-radius: 38% 62% 33% 67% / 60% 53% 47% 40%;
    }

    &:nth-of-type(3) {
      bottom: 20vh;
      left: 80vw;
      width: 23rem;
      height: 23rem;
      transform: rotate(-75deg);
      border-radius: 38% 62% 55% 45% / 52% 53% 47% 48%;
    }

    &:nth-of-type(4) {
      bottom: 3vh;
      left: 9vw;
      width: 5rem;
      height: 5rem;
      border-radius: 38% 62% 55% 45% / 52% 53% 47% 48%;
    }

    &:nth-of-type(5) {
      right: 17vw;
      bottom: 8vh;
      width: 3rem;
      height: 3rem;
      border-radius: 38% 62% 55% 45% / 52% 53% 47% 48%;
    }

    &:nth-of-type(6) {
      top: 6vh;
      right: 25vw;
      width: 2rem;
      height: 2rem;
      border-radius: var(--px);
    }
  }
}

@keyframes wave {
  20% {
    border-radius: 45% 55% 62% 38% / 53% 51% 49% 47%;
  }

  40% {
    border-radius: 45% 55% 49% 51% / 36% 51% 49% 64%;
  }

  60% {
    border-radius: 60% 40% 57% 43% / 47% 62% 38% 53%;
  }

  80% {
    border-radius: 60% 40% 32% 68% / 38% 36% 64% 62%;
  }
}
</style>
