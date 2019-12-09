<template>
  <div class="container">
    <h1 class="heading">Create New Campground</h1>
    <div class="log">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input class="form-control" type="text" required placeholder="name" v-model="name" />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="price" required v-model="price" />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="image" required v-model="image" />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            required
            placeholder="description"
            v-model="description"
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
import cookie from 'js-cookie';
export default {
  data() {
    return {
      name: '',
      price: '',
      image: '',
      description: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        price: this.price,
        image: this.image,
        description: this.description,
      };
      axios
        .post('/campgrounds', formData, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push('/campgrounds');
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.heading {
  text-align: center;
}
.log {
  width: 40%;
  margin: 25px auto;
}
</style>
