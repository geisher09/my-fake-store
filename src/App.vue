<template>
  <router-view/>
</template>

<style lang="scss">
// html, body, #app {
//   height: 100%;
// }
html {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow-x: hidden;
}

body, #app, .products-list-main, .dashboard-main {
  min-height: 100vh;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
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
