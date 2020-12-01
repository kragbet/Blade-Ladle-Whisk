<template>
  <div id="app">
  <v-app>
    <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    app
    height="100%"
    >
      <v-list-item class="px-2 pt-2">
        <v-list-item-avatar>
          <v-img src="https://www.iconfinder.com/data/icons/hotel-vacation-long-shadow-flat/33/chef-512.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>A La Carte</v-list-item-title>
      </v-list-item>
      
  <v-divider></v-divider>

  <!-- main menu content -->

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title><router-link :to="item.link">{{ item.title }}</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

  <!-- Winners Circle -->

      <!-- <v-list>
        <v-list-group
          v-for="month in monthly"
          :key="month.title"
          v-model="month.active"
          :prepend-icon="month.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="month.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in month.items"
            :key="child.title"
          >
            <v-list-item-content>
              <v-list-item-title><router-link :to="child.link">{{child.title}}</router-link></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list> -->
  </v-navigation-drawer> 
    <v-app-bar
    app
    color="primary"
    dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title">The Blade, Ladle, and Whisk</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-snackbar v-model="snackSubmissionComplete" :timeout="4000" top color="success">
        <span>Thank you for your submission to the contest. Good Luck!</span>
        <v-btn flat color="secondary" class="ml-3" @click="snackSubmissionComplete = false">Close</v-btn>
      </v-snackbar> -->

<!-- socal links -->

      <a :href="`${facebook}`">
      <v-btn text rounded  small color="secondary">
          <v-icon>mdi-facebook</v-icon>
      </v-btn>
      </a>

<!-- Voting button -->

      <!-- <v-btn flat rounded color="warning ma-1">
        <span>VOTE FOR A RECIPIE</span>
          <v-icon>mdi-vote</v-icon>
      </v-btn> -->
    </v-app-bar>   
    <v-main>
      <!-- <router-view @submissionAdded=" snackSubmissionComplete = true" /> -->
      <router-view />
    </v-main>
  </v-app>
</div>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
    
  },

  data: () => ({
    facebook:'https://www.facebook.com/groups/475421553363485',
    drawer: false,
    // snackSubmissionComplete: false,
    group: null, 
    items: [
      {title: 'Home', icon: 'mdi-home', link: '/'},
      {title:'Submit A Recipie', icon:'mdi-file-document', link: '/Rules'},
      {title: 'Contact', icon: 'mdi-phone', link: '/Contact'  },
      {title: 'Calendar', icon: 'mdi-calendar', link: '/Calendar' },
      {title:'Submissions', icon:'mdi-ribbon', link:'/Winners'}

        
    ],

    // monthly: [
    //      {
    //       // action: 'mdi-ribbon',
    //       action: 'mdi-vote',
    //       active: true,
    //       items: [
    //         {title: 'October', link: '/Winners'},
    //         {title: 'November', link: '/Winners'},
    //         {title: 'December', link: '/Winners'},
    //       ],
    //       title: 'Submissions',
    //     },
    //   ],
    
    mini: true,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
