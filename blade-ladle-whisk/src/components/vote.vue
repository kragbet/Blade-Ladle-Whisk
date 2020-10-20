<template v-for="item in items">
  <v-row dense>
    <v-col
    v-for="item in items"
    :key="item.title"
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
            :src="item.rImg"
            ></v-img>

            <v-card-title>{{item.title}}</v-card-title>

            <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <!-- <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating> -->

                <!-- <div class="grey--text ml-4">
                4.5 (413)
                </div> -->
            </v-row>

            <!-- <div class="my-4 subtitle-1">
                $ • Italian, Cafe
            </div> -->

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
                <v-chip>1-Star</v-chip>

                <v-chip>2-Star</v-chip>

                <v-chip>3-Star</v-chip>

                <v-chip>4-Star</v-chip>

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
        {title: 'Home', rImg: 'mdi-home', Recipie: '/'},
        {title:'Submit A Recipie', icon:'mdi-file-document', link: '/Rules'},
        {title: 'Contact', icon: 'mdi-phone', link: '/Contact'  },
        {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
        {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
        {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
        {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
        {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
        {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
            
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