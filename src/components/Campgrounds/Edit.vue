<template>
  <div class="container">
    <h3 class="text-center">Edit {{name}}</h3>
    <div class="log">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <input type="text" name="name" class="form-control" v-model="name" value="{name}" />
        </div>
        <div class="form-group">
          <input type="text" name="price" class="form-control" v-model="price" value="{price}" />
        </div>
        <div class="form-group">
          <input type="text" name="image" class="form-control" v-model="image" value="{image}" />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="description"
            class="form-control"
            v-model="description"
            value="{description}"
          />
        </div>
        <div class="form-group">
          <input type="submit" value="Submit" class="btn btn-primary" />
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
  mounted() {
    axios
      .get(`/campground/${this.$route.params.id}`)
      .then(response => {
        this.name = response.data.campground.name;
        this.price = response.data.campground.price;
        this.image = response.data.campground.image;
        this.description = response.data.campground.description;
      })
      .catch(error => console.log(error));
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
        .patch(`/campground/${this.$route.params.id}`, formData, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(() => this.$router.push(`/campground/${this.$route.params.id}`))
        .catch(error => console.log(error));
    },
  },
};
</script>

<style scoped>
.log {
  width: 30%;
  margin: 25px auto;
}
</style>
