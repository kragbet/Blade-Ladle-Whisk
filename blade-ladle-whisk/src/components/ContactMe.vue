<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-textarea
            v-model="comment"
            name="input-7-1"
            filled
            label="Label"
            auto-grow
            value=""
          ></v-textarea>
      </v-row>
      <v-row>
          <!-- <a :href="`mailto:kragbet@gmail.com?subject=Mail%20from%20BLW&body=${comment}`"> -->
          <a :href="`mailto:kragbet@gmail.com?subject=From%20BLW&body=${comment}`">
            <v-btn>
              <span>Send</span>
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </a>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
      data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      comment:'',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>