<template>
  <div class="container heading">
    <header class="jumbotron">
      <div class="container">
        <h1>Welcome To YelpCamp</h1>
        <p>View our hand picked campgrounds from all over the world</p>

        <div></div>

        <p>
          <router-link to="/new" v-if="auth">
            <a class="btn btn-primary btn-lg">Add New Campground</a>
          </router-link>
        </p>
      </div>
    </header>

    <div class="row text-center camp">
      <div class="col-md-3 col-sm-6" v-for="campground in campgrounds" :key="campground.id">
        <div class="thumbnail">
          <img alt v-bind:src="campground.image" />
          <div class="caption">
            <h4>{{campground.name}}</h4>
          </div>
          <p>
            <router-link :to="{path: '/campground/' + campground.id }">
              <a class="btn btn-primary">Show more info</a>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      campgrounds: null,
    };
  },
  mounted() {
    axios
      .get('/campgrounds')
      .then(response => {
        this.campgrounds = response.data.campgrounds;
      })
      .catch(error => console.log(error));
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.heading {
  margin-bottom: 10px;
}
.camp {
  display: flex;
  flex-wrap: wrap;
}

.thumbnail img {
  width: 100%;
}

.thumbnail {
  padding: 0;
}

.thumbnail .caption {
  padding: 9px;
}
</style>
