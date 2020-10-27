<template v-for="item in items">
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

            <div>{{recipe}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Rating</v-card-title>

            <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip pill>
                  <v-avatar left>
                    <v-img :src="`../images/users/${item.cook}.jpg`"></v-img> 
                  </v-avatar>
                  <span>{{item.cook}}</span>
              </v-chip>

                <v-chip>2-Star</v-chip>


            </v-chip-group>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
                Submit
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      items: [
        {title: 'Roasted Tofu', rImg: 'Agave-roasted-tofu-butternut', cook: 'Lauren', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        {title: 'Steak Burrito', rImg: 'steak-burro', cook: 'Tatchy', month: 'October', winner: false, info:'Steak Burrito, salad with cashew cream'},
        {title: 'Curry Noodle', rImg: 'curry-noodles', cook: 'Eddy', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        {title: 'Loco Moco', rImg: 'loco-moco.jpg', cook: 'Bob', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        {title: 'Roasted Tofu', rImg: '1.jpg', cook: 'Bob', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        {title: 'Roasted Tofu', rImg: '1.jpg', cook: 'Bob', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        {title: 'Roasted Tofu', rImg: '1.jpg', cook: 'Bob', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        {title: 'Roasted Tofu', rImg: '1.jpg', cook: 'Bob', month: 'October', winner: false, info:'Agave roasted tofu and butternut squash'},
        

            
    ],
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>