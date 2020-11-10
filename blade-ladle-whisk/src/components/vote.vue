<template>
  <v-container>
    <v-row>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-1" small flat color="primary" @click="sortBy('cook')" v-bind="attrs" v-on="on">
            <v-icon left small>mdi-face</v-icon>
            <span class="caption text-lowercase">User</span>
          </v-btn>
        </template>
        <span>Sort by User</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-1" small flat color="primary" @click="sortBy('month')" v-bind="attrs" v-on="on">
            <v-icon left small>mdi-calendar</v-icon>
            <span class="caption text-lowercase" @click="sortBy('cook')">Month</span>
          </v-btn>  
        </template>
        <span>Sort by Month</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-1" small flat color="primary" @click="sortBy('status')" v-bine="attrs" v-on="on">
            <v-icon left small>mdi-ribbon</v-icon>
            <span class="caption text-lowercase">Winners</span>
          </v-btn> 
        </template>
        <span>Sort by Winners</span>
      </v-tooltip>
    </v-row>
    <v-row dense>
      <v-col
      v-for="item in items"
      :key="item.title"
      cols="4"
      >
          <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
          >
              <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
              </template>

              <v-img
              height="250"
              :src="`../images/food/${item.rImg}.jpg`"
              > 
              <!-- :src="required ('@/assets/images/' + `${rImg}`)" -->
              </v-img>

              <v-card-title>{{item.title}}</v-card-title>
              <v-card-subtitle>{{item.info}}</v-card-subtitle>

              <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >
              </v-row>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Info</v-card-title>

              <v-card-text>
              <div>
                  <v-chip class="ma-2" pill color="primary" :ripple="false">
                    <v-avatar left>
                      <v-img :src="`../images/users/${item.cook}.jpg`"></v-img> 
                    </v-avatar>
                    <span>{{item.cook}}</span>
                </v-chip>

                <v-chip class="`ma-1 ${item.month}`" :ripple="false">{{item.month}}</v-chip>

                <v-chip :class="`ma-1 ${item.status}`" v-if="item.status === 'winner'" color="success"><v-icon>mdi-ribbon</v-icon></v-chip>
                <v-chip :class="`ma-1 ${item.status}`" v-if="item.status === 'second'" color="accent"><v-icon>mdi-ribbon</v-icon></v-chip>
                <v-chip :class="`ma-1 ${item.status}`" v-if="item.status === 'third'" color="info"><v-icon>mdi-ribbon</v-icon></v-chip>            
                </div>
              </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      items: [
        {title: 'Roasted Tofu', rImg: 'Agave-roasted-tofu-butternut', cook: 'Lauren', month: 'October', status: 'winner', info:'Agave roasted tofu and butternut squash'},
        {title: 'Steak Burrito', rImg: 'steak-burro', cook: 'Tatchy', month: 'October', status: 'third', info:'Steak Burrito, salad with cashew cream'},
        {title: 'Curry Noodle', rImg: 'curry-noodles', cook: 'Eddy', month: 'October', status: 'second', info:'Agave roasted tofu and butternut squash'},
        {title: 'Loco Moco', rImg: 'loco-moco', cook: 'Melissa', month: 'October', status: 'winner', info:'A simple diner'},
        {title: 'Cababara', rImg: 'cabanara', cook: 'Tatchy', month: 'September', status:'', info:'My take on carbonara....'},
        {title: 'Soba diner', rImg: 'soba', cook: 'Melissa', month: 'September', status:'second', info:'Cold soba, tempura, kaarage, and potstickers.'},
        {title: 'Tofu Chili', rImg: 'tofu-chili', cook: 'Lauren', month: 'September', status:'winner', info:'Tofu, butternut, and bean chili topped with green onions and "cheese".'},
        {title: 'Cheese Shrimp and Grits', rImg: 'cheese-grits', cook: 'Tatchy', month: 'September', status:'', info:'Cheesey jalapeño grits with Cajun shrimp and sausage...'},
        {title: 'Omlete', rImg: 'omlete', cook: 'Roni', month: 'September', status:'third', info:'just some eggs, with leftover spinach, and left over pickled onion from vietnamese food, with bacon and fresh tomatoes.'},
        

            
    ],
    }),

    methods: {
      sortBy(prop){
        this.items.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      },
    },
  }
</script>
<style lang="css">

.v-chip .October {
  background-color: #E8B573;
}

.v-chip .September {
  background-color: #E1423A;
}
</style>