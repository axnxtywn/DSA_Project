<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="train-image">
      <img src="@/assets/gg.webp" alt="gg" />
    </div>
  </div>
</template>

<style scoped>
.train-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.train-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
