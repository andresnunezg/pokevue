<template>
  <div class="pikachu-img">
    <figure>
      <img src="@/assets/images/Ellipse.png" alt="red-background" />
    </figure>
    <figure>
      <img src="@/assets/images/Pikachu.png" alt="pikachu" />
    </figure>
  </div>
</template>

<style scoped lang="css">
.pikachu-img {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  figure {
    position: absolute;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  figure:first-child {
    z-index: 1;
    bottom: 0px;
  }

  figure:last-child {
    z-index: 2;
    bottom: -12px;
    transform: translate(3%, 0%);
  }
}
</style>
