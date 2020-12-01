<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          <v-icon class="mr-1">mdi-food</v-icon>
          Recipe
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2"> Recipe </v-card-title>

        <v-card-text>
          <v-list dense>
            <v-subheader>Ingredients</v-subheader>
            <v-list-item v-for="item in ingredients" :key="item">
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <p>{{ recipe }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    ingredients: Array,
    recipe: String,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>