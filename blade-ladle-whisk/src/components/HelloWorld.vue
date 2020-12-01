<template>
  <span class="homebox">
    <v-container class="fill-height">
      <v-row>
        <v-col cols="2" class="black">
          <p class="white--text pa-5">
            A place for everyone to share their culinary delights and motivate
            each other. Whether you prefer the stove-top or the oven, let us
            have some fun with this!
          </p>
        </v-col>
        <v-col cols="8" class=""> </v-col>
        <v-col cols="2"> </v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
        <v-col align-self="end">
          <v-card class="accent infocard">
            <v-card-text class="text-center">
              <p class="black--text">Photo by Jose Antonio Gallego Vázquez on Unsplash</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </span>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg:'String',
  },

  data: () => ({
    unsplash: "https://miro.medium.com/max/9856/1*rle5GFEFsldTsGtH47WZ_Q.jpeg",
  }),
};
</script>
<style lang="scss" scoped>
.homebox {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(https://miro.medium.com/max/9856/1*rle5GFEFsldTsGtH47WZ_Q.jpeg)
    no-repeat center center;
  background-size: cover;
  transform: scale(1);
}

.infocard {
  opacity: 70%;
}
</style>
