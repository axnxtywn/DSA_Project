<template>
  <div id="app">
    <nav v-if="$route.name === 'Home'">
      <h1>Selamat Datang di Pembelian Tiket Kereta</h1>
    </nav>
    <button
      v-if="
        $route.path !== '/login' && $route.path !== '/register' && $route.path !== '/train-class'
      "
      @click="$router.push('/login')"
      class="login-button"
    >
      Login
    </button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
    }
  },
  watch: {
    $route(to) {
      this.isLoggedIn = to.path !== '/login' && to.path !== '/register'
    },
  },
}
</script>

<style scoped>
#app {
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

h1 {
  margin: 0;
  font-size: 2em;
  white-space: nowrap;
}

.login-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
