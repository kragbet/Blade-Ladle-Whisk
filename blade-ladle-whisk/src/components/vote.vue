<template>
  <v-container>
    <v-row>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-1"
            small
            text
            color="primary"
            @click="sortBy('cook')"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left small>mdi-face</v-icon>
            <span class="caption text-lowercase">User</span>
          </v-btn>
        </template>
        <span>Sort by User</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-1"
            small
            text
            color="primary"
            @click="sortBy('month')"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left small>mdi-calendar</v-icon>
            <span class="caption text-lowercase" @click="sortBy('cook')"
              >Month</span
            >
          </v-btn>
        </template>
        <span>Sort by Month</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="ma-1"
            small
            text
            color="primary"
            @click="sortBy('status')"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left small>mdi-ribbon</v-icon>
            <span class="caption text-lowercase">Winners</span>
          </v-btn>
        </template>
        <span>Sort by Winners</span>
      </v-tooltip>
    </v-row>
    <v-row dense>
      <v-col v-for="item in items" :key="item.title" cols="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            v-if="item.rImg"
            height="250"
            :src="`../images/food/${item.rImg}.jpg`"
          >
            <!-- :src="required ('@/assets/images/' + `${rImg}`)" -->
          </v-img>
          <v-img v-else height="250" :src="`../images/food/ComingSoon.png`">
            <!-- :src="required ('@/assets/images/' + `${rImg}`)" -->
          </v-img>

          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.info }}</v-card-subtitle>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div>
                <RecipePop
                  :ingredients="item.ingredients"
                  :recipe="item.recipe"
                />
                <!-- <RecipePop /> -->
              </div>
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
                <span>{{ item.cook }}</span>
              </v-chip>

              <v-chip class="`ma-1 ${item.month}`" :ripple="false">{{
                item.month
              }}</v-chip>

              <v-chip
                :class="`ma-1 ${item.status}`"
                v-if="item.status === 'winner'"
                color="success"
                ><v-icon>mdi-ribbon</v-icon></v-chip
              >
              <v-chip
                :class="`ma-1 ${item.status}`"
                v-if="item.status === 'second'"
                color="accent"
                ><v-icon>mdi-ribbon</v-icon></v-chip
              >
              <v-chip
                :class="`ma-1 ${item.status}`"
                v-if="item.status === 'third'"
                color="info"
                ><v-icon>mdi-ribbon</v-icon></v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import RecipePop from "./RecipePop";
import db from "../fb";

export default {
  components: {
    RecipePop,
  },

  data: () => ({
    loading: false,
    selection: 1,
    items: [],
    //   items: [
    //     {
    //       title: 'Roasted Tofu',
    //       rImg: 'Agave-roasted-tofu-butternut',
    //       cook: 'Lauren',
    //       month: 'October',
    //       status: 'winner',
    //       info:'Agave roasted tofu and butternut squash',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Steak Burrito',
    //       rImg: 'steak-burro',
    //       cook: 'Tatchy',
    //       month: 'October',
    //       status: 'third',
    //       info:'Steak Burrito, salad with cashew cream',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Curry Noodle',
    //       rImg: 'curry-noodles',
    //       cook: 'Eddy',
    //       month: 'October',
    //       status: 'second',
    //       info:'Agave roasted tofu and butternut squash',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Loco Moco',
    //       rImg: 'loco-moco',
    //       cook: 'Melissa',
    //       month: 'October',
    //       status: 'winner',
    //       info:'A simple diner',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Cabanara',
    //       rImg: 'cabanara',
    //       cook: 'Tatchy',
    //       month: 'September',
    //       status:'',
    //       info:'My take on carbonara....',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Soba diner',
    //       rImg: 'soba',
    //       cook: 'Melissa',
    //       month: 'September',
    //       status:'second',
    //       info:'Cold soba, tempura, kaarage, and potstickers.',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Tofu Chili',
    //       rImg: 'tofu-chili',
    //       cook: 'Lauren',
    //       month: 'September',
    //       status:'winner',
    //       info:'Tofu, butternut, and bean chili topped with green onions and cheese.',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon spice'},
    //         { text: '3 Tablespoons the good stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    //     {
    //       title: 'Cheese Shrimp and Grits',
    //       rImg: 'cheese-grits',
    //       cook: 'Tatchy',
    //       month: 'September',
    //       status:'',
    //       info:'Cheesey jalapeño grits with Cajun shrimp and sausage...',
    //       ingredients: [
    //         { text: '1 cup sugar'},
    //         { text: '1 teaspoon cream'},
    //         { text: '3 Tablespoons the odd stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //      },
    //     {
    //       title: 'Omlete',
    //       rImg: 'omlete',
    //       cook: 'Roni',
    //       month: 'September',
    //       status:'third',
    //       info:'just some eggs, with leftover spinach, and left over pickled onion from vietnamese food, with bacon and fresh tomatoes.',
    //       ingredients: [
    //         { text: '1 cup pepper'},
    //         { text: '1 teaspoon rum'},
    //         { text: '3 Tablespoons the right stuff'},
    //       ],
    //       recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    //     },
    // ],
  }),

  methods: {
    sortBy(prop) {
      this.items.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },

  created() {
    db.collection("submitted-recipes").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.items.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>
<style lang="css">
.v-chip .October {
  background-color: #e8b573;
}

.v-chip .September {
  background-color: #e1423a;
}
</style>