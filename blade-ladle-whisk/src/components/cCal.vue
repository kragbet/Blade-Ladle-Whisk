<template>
  <v-row justify="center">
    <div class="tile ma-4">
      <h1>Schedule and Announcements</h1>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
    </div>
    <v-expansion-panels popout>
      <v-expansion-panel v-for="(id, month) in months" :key="month">
        <v-expansion-panel-header>{{ id.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>Due Date For submissions: {{ month.dueDates }}</p>
          <p>{{ id.details }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    months: [
      {
        id: 0,
        name: "Janurary",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "Janurary 15, 2021",
      },
      {
        id: 1,
        name: "Feburary",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "Feburary 15, 2021",
      },
      {
        id: 2,
        name: "Mrach",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "March 15, 2021",
      },
      {
        id: 3,
        name: "April",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "April 15, 2021",
      },
      {
        id: 4,
        name: "May",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "May 15, 2021",
      },
      {
        id: 5,
        name: "June",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "June 15, 2021",
      },
      {
        id: 6,
        name: "July",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "July 15, 2021",
      },
      {
        id: 7,
        name: "August",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "Auguest 15, 2021",
      },
      {
        id: 8,
        name: "September",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "September 15, 2021",
      },
      {
        id: 9,
        name: "October",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "October 15, 2021",
      },
      {
        id: 10,
        name: "November",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "November 15, 2021",
      },
      {
        id: 11,
        name: "December",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDates: "December 15, 2021",
      },
    ],
  }),
};
</script>