<template>
  <span class="homebox">
    <v-container class=" ">
      <v-row class="">
        <v-col cols="2" class="">
          <p class="white--text black pa-2">A place for everyone to share their culinary delights and motivate each other. Whether you prefer the stove-top or the oven, let us have some fun with this! </p>
        </v-col>
        <v-col cols="8" class="">
        </v-col>
        <v-col cols="2">
        </v-col>
      </v-row>
    </v-container>
  </span>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      // msg:'String',
    },

    data: () => ({
      //
    }),
  }
</script>
<style lang="scss" scoped>

.homebox {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(https://miro.medium.com/max/9856/1*rle5GFEFsldTsGtH47WZ_Q.jpeg) no-repeat center center;
  background-size: cover;
  transform: scale(1.0);
}
</style>
