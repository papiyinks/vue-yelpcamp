<template>
  <div class="container">
    <h1 class="heading">Verification of account</h1>
    <p class="heading">
      <em>Check your email to get the verification code</em>
    </p>
    <div class="log">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input class="form-control" required type="email" placeholder="email" v-model="email" />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            required
            placeholder="verification code"
            v-model="code"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      code: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        code: this.code,
      };
      axios
        .post('/verify', formData)
        .then(res => {
          this.$router.push('/login');
        })
        .catch(error => console.log(error));
    },
  },
};
</script>

<style scoped>
.heading {
  text-align: center;
}
.log {
  width: 30%;
  margin: 25px auto;
}
</style>
