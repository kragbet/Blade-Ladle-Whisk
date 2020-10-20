<template>
  <div id="app">
    <aNav :drawer="drawer" />
  <v-app>
    <v-app-bar
    app
    color="primary"
    dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="title">The Blade, Ladle, and Whisk</v-app-bar-title>
    </v-app-bar>   
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import aNav from './components/aNav';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    aNav,
    
  },

  data: () => ({
    drawer:false,
    group: null,
  }),
};
</script>
