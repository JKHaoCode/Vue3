<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<!--对比vue2.x-->
<!--beforeCreate -> 使用setup()-->
<!--created -> 使用 setup()-->
<!--beforeMount -> onBeforeMount-->
<!--mounted -> onMounted-->
<!--beforeUpdate -> onBeforeUpdate-->
<!--updated -> onUpdated-->
<!--beforeDestroy -> onBeforeUnmount-->
<!--destroyed -> onUnmounted-->
<!--errorCaptured -> onErrorCaptured-->
