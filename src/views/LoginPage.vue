<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="login">Login</button>
      <p>Belum Punya Akun? Silahkan <router-link to="/register">Register</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (!this.username) {
        alert('Silahkan Masukkan Username')
        return
      }
      if (!this.password) {
        alert('Silahkan Masukkan Password')
        return
      }

      const user = JSON.parse(localStorage.getItem('user'))

      if (user && this.username === user.username && this.password === user.password) {
        alert('Login Berhasil')
        this.$router.push('/train-class')
      } else {
        alert('Silahkan Register Dahulu')
      }
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.login-box {
  width: 300px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-box h2 {
  margin-bottom: 24px;
  color: #333;
  font-size: 24px;
}

.login-box input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 16px;
}

.login-box button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-box button:hover {
  background-color: #0056b3;
}

.login-box p {
  margin-top: 12px;
  color: #555;
}

.login-box a {
  color: #007bff;
  text-decoration: none;
}
</style>
