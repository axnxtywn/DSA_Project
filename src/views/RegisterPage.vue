<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="firstName" placeholder="First Name" required />
        <input type="text" v-model="lastName" placeholder="Last Name" required />
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p>Sudah Punya Akun? Silahkan <router-link to="/login">Login</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    }
  },
  methods: {
    register() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password,
      }
      localStorage.setItem('user', JSON.stringify(user))
      alert('Registrasi berhasil!')
      this.$router.push('/login')
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

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.register-box {
  width: 300px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.register-box h2 {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.register-box input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 16px;
}

.register-box button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.register-box button:hover {
  background-color: #0056b3;
}

.register-box p {
  margin-top: 12px;
  color: #555;
}

.register-box a {
  color: #007bff;
  text-decoration: none;
}
</style>
