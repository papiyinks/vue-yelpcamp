<template>
  <div class="container">
    <h1 class="heading">Register</h1>
    <div class="log">
      <form @submit.prevent="onSubmit">
        <div class="form-group" :class="{invalid: $v.email.$error}">
          <input
            class="form-control"
            type="email"
            placeholder="email"
            v-model="email"
            @blur="$v.email.$touch()"
          />
          <p v-if="!$v.email.email">Please provide a valid email address.</p>
        </div>
        <div class="form-group" :class="{invalid: $v.password.$error}">
          <input
            class="form-control"
            type="password"
            placeholder="password"
            v-model="password"
            @blur="$v.password.$touch()"
          />
          <p v-if="!$v.password.minLen">Password must contain at least eight characters.</p>
        </div>
        <button class="btn btn-primary" type="submit" :disabled="$v.$invalid">Submit</button>
      </form>
      <p>
        <router-link to="/login">
          <a>Click here to login</a>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      axios
        .post('/register', formData)
        .then(res => {
          this.$router.push('/verify');
        })
        .catch(error => console.log(error));
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(8),
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
p {
  padding-top: 10px;
}
.form-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}
</style>
