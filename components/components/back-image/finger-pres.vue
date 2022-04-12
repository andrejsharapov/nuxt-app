<template lang="pug">
.finger__pres
  - for (var x = 0; x < 4; x++)
    .finger__pres__block
</template>

<script>
export default {
  name: 'FingerPres',
}
</script>

<style lang="postcss">
.finger__pres {
  &__block {
    position: absolute;
    animation: press 10s linear infinite;
    border-radius: 50%;
    opacity: 0.15;
    background-image: linear-gradient(45deg, var(--light), transparent);

    &:nth-of-type(1) {
      right: 17vw;
      bottom: 8vh;
      width: 3rem;
      height: 3rem;
      animation-delay: 10s;
    }

    &:nth-of-type(2) {
      top: 10vh;
      left: 15vw;
      width: 4rem;
      height: 4rem;
      animation-delay: 6s;
    }

    &:nth-of-type(3) {
      bottom: 20vh;
      left: 80vw;
      width: 8rem;
      height: 8rem;
      animation-delay: 8s;
    }

    &:nth-of-type(4) {
      bottom: 3vh;
      left: 9vw;
      width: 2rem;
      height: 2rem;
      animation-delay: 4s;
    }
  }
}

@keyframes press {
  from {
    transform: scale(5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 0.7;
  }
}
</style>
