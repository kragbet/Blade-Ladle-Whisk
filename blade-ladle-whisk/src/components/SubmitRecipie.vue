<template>
  <v-form v-model="valid" ref="submitForm">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="title"
            :rules="titleRules"
            :counter="20"
            label="Title of Recipe"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="cook"
            :rules="cookRules"
            :counter="10"
            label="Cook's Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-combobox
          v-model="ingredients"
          :items="basicIngredients"
          :search-input.sync="search"
          hide-selected
          hint="Maximum of 20 tags"
          label="Add some ingredients"
          multiple
          persistent-hint
          small-chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong
                  >". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="info"
            :rules="infoRules"
            label="Summary"
            :counter="175"
            value=""
          ></v-text-field>
        </v-col>
        <v-col>
          <v-overflow-btn
            v-model="submonth"
            class="my-2"
            :items="months"
            label="Select a month to submit your recipe for competition"
            dense
          >
          </v-overflow-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-textarea
          v-model="recipe"
          name="recipe"
          :rules="recipeRules"
          filled
          label="Recipe"
          auto-grow
          value=""
        ></v-textarea>
      </v-row>
      <v-row>
        <!-- <a :href="`mailto:kragbet@gmail.com?subject=Mail%20from%20BLW&body=${comment}`"> -->
        <!-- <div class="submission-image">
              <v-file-input
                v-model="rImag"
                :rules="imageRules"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="add an image"
                prepend-icon="mdi-camera"
                label="Image"
                ref="mealPic"
              ></v-file-input>
            </div>
            <v-spacer></v-spacer> -->
        <div class="sendEmailbtn ml-2">
          <!-- <a :href="`mailto:kragbet@gmail.com?subject=From%20BLW&body=${comment}`"> -->
          <v-btn @click="submit()" :loading="loading">
            <v-icon>mdi-email</v-icon>
            <span>submit</span>
          </v-btn>
          <!-- </a> -->
        </div>
      </v-row>
      <!-- <v-row><p>Please attached any images of the submission to the email.</p></v-row> -->
    </v-container>
  </v-form>
</template>

<script>
import db from "../fb";

export default {
  data: () => ({
    ingredients: ["1 cp sugar"],
    basicIngredients: ["sugar", "flour", "eggs", "spice", "pepper"],
    months: [
      "Janurary",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    search: null,
    valid: false,
    title: "",
    cook: "",
    recipe: "",
    info: "",
    submonth: "",
    email: "",
    rImag: "",
    titleRules: [
      (v) => !!v || "Recipe title is required",
      (v) => v.length <= 30 || "Recipe title must be less than 30 characters",
    ],
    cookRules: [(v) => !!v || " Name is required"],
    recipeRules: [(v) => !!v || " Name is required"],
    infoRules: [
      (v) => !!v || "Summary is required",
      (v) => v.length <= 175 || "Summary must be less than 175 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    imageRules: [
      (value) =>
        !value ||
        value.size < 6000000 ||
        "Avatar size should be less than 6 MB!",
    ],

    loading: false,
  }),

  methods: {
    submit() {
      if (this.$refs.submitForm.validate()) {
        this.loading = true;

        const contestSub = {
          title: this.title,
          cook: this.cook,
          recipe: this.recipe,
          info: this.info,
          month: this.submonth,
          email: this.email,
          ingredients: this.ingredients,
          // imagename: this.$refs.mealPic.src.split("/").pop().split(".")[0],
        };

        db.collection("submitted-recipes")
          .add(contestSub)
          .then(() => {
            // alert('Thank you for your submission to the contest. Good Luck!');
            this.loading = false;
            this.$emit("close-dialog");
            this.$emit("submissionAdded");
          });
      }
    },
  },

  watch: {
    model(val) {
      if (val.length > 20) {
        this.$nextTick(() => this.model.pop);
      }
    },
  },
};
</script>