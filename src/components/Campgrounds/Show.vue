<template>
  <div class="container full">
    <div class="row">
      <div class="col-md-9">
        <div class="thumbnail">
          <img alt class="img-responsive" v-bind:src="image" />
          <div class="caption-full">
            <h4 class="pull-right">₦ {{ price }}</h4>
            <h4>{{ name }}</h4>
            <p>{{ description }}</p>
            <p v-if="this.userSub.sub === this.owner">
              <router-link :to="{path: '/edit/' + id }" class="caption">
                <a class="btn btn-primary">Edit</a>
              </router-link>
              <button @click="deleted" class="btn btn-danger">Delete</button>
            </p>
          </div>
        </div>
      </div>
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
      id: '',
      owner: '',
      userSub: '',
    };
  },
  mounted() {
    const authUser = cookie.get('user');
    if (authUser) {
      this.userSub = JSON.parse(authUser);
    }

    axios
      .get(`/campground/${this.$route.params.id}`)
      .then(response => {
        this.name = response.data.campground.name;
        this.price = response.data.campground.price;
        this.image = response.data.campground.image;
        this.description = response.data.campground.description;
        this.id = response.data.campground.id;
        this.owner = response.data.campground.owner;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleted() {
      axios
        .delete(`/campground/${this.$route.params.id}`, {
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
.thumbnail img {
  width: 100%;
}

.thumbnail {
  padding: 0;
}

.thumbnail .caption {
  padding: 9px;
}

.caption {
  margin-right: 1px;
}
.full {
  margin-bottom: 80px;
}
</style>
