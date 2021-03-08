<template>
    <div>
      <navbar />
      <div class="container">
        <router-view />
    </div>

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'app'
}
</script>

<style lang="css" scoped>
</style>
