<template>
  <v-app>
    <v-app-bar
    app
    color="primary"
    dark
    >
      <v-app-bar-title class="title">The Blade, Ladle, and Whisk</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      class="pt-15"    
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://www.iconfinder.com/data/icons/hotel-vacation-long-shadow-flat/33/chef-512.png"></v-img>
        </v-list-item-avatar>
  
        <v-list-item-title>A La Carte</v-list-item-title>
  
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
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
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

<!-- Winners Circle -->

        <v-list>
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
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
    </v-navigation-drawer>
   
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home' },
      {title:'Rules', icon:'mdi-file-document'},
      { title: 'Contact', icon: 'mdi-phone' },
      { title: 'Calendar', icon: 'mdi-calendar' },
        
    ],

    monthly: [
         {
          action: 'mdi-ribbon',
          active: true,
          items: [
            { title: 'October' },
            { title: 'November' },
            { title: 'December' },
          ],
          title: 'Winners',
        },
      ],
    
    mini: true,
  }),
};
</script>
