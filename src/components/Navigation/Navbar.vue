<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          aria-controls="navbar"
          data-target="#navbar"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/">
          <a class="navbar-brand">YelpCamp</a>
        </router-link>
      </div>
      <div class="collapse navbar-collapse" id="navbar" aria-expanded="false">
        <ul class="nav navbar-nav navbar-right">
          <router-link to="/campgrounds" activeClass="active" tag="li">
            <a>Campgrounds</a>
          </router-link>
          <router-link to="/login" activeClass="active" tag="li" v-if="!auth">
            <a>Login</a>
          </router-link>
          <router-link to="/register" activeClass="active" tag="li" v-if="!auth">
            <a>Signup</a>
          </router-link>

          <li class="log" v-if="auth" @click="onLogout">Logout</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
.log {
  padding-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  cursor: pointer;
}
</style>
