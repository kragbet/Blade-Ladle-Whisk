<template>
  <v-container class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld />
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
