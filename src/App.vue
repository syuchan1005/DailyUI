<template>
  <div id="app">
    <sui-button v-if="$route.path !== '/'" icon="arrow left"
                class="back-button" @click="$router.push({ path: '/' })"></sui-button>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped lang="scss">
  .back-button {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 10000;
  }
</style>
