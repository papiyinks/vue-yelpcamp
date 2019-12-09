<template>
  <div>
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar.vue';
export default {
  components: {
    appNavbar: Navbar,
  },
  created() {
    this.$store.dispatch('tryAutoLogin');
  },
};
</script>
