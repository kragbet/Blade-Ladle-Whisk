<template class="Rules">
<v-container>
  <v-row class="pb-2">

    <div >
      <h1 class="pa-2">Terms and Conditions</h1>
    </div>
  <v-card class="pa-4">
    <div class="TOS">
      <ol>
          <li>The promoter is: The Bladle, Ladle, and Whisk.</li>
          <li>The competition is open to members of The Bladle, Ladle, and Whisk Facebook group or invited guest.</li>
          <li>There is no entry fee and no purchase necessary to enter this competition..</li>
          <li>By entering this competition, an entrant is indicating his/her agreement to be bound by these terms and conditions.</li>
          <li>Route to entry for the competition and details of how to enter are via this website submission form can be found at the bottom of this page.</li>
          <li>Only one entry will be accepted per person. Multiple entries from the same person will be disqualified.</li>
          <li>Closing date for entry will be announced via the published schedule. Any submission after these dates the no further entries to the competition will be permitted.</li>
          <li>No responsibility can be accepted for entries not received for whatever reason..</li>
          <li>The promoter reserves the right to cancel or amend the competition and these terms and conditions without notice in the event of a catastrophe, war, civil or military disturbance, act of God or any actual or anticipated breach of any applicable law or regulation or any other event outside of the promoter’s control. Any changes to the competition will be notified to entrants as soon as possible by the promoter.</li>
          <li>Winners will be chosen: [by an independent adjudicator or panel of judges appointed by the Promoter</li>
          <li>The winner will be notified by email and/or DM on Twitter/Facebook and/or letter within 28 days of the closing date. If the winner cannot be contacted or do not claim the prize within 14 days of notification, we reserve the right to withdraw the prize from the winner and pick a replacement winner.</li>
          <li>The promoter will notify the winner when and where the prize can be collected / is delivered.</li>
          <li>The promoter’s decision in respect of all matters to do with the competition will be final and no correspondence will be entered into.</li>
          <li>The winner agrees to the use of his/her name and image in any publicity material, as well as their entry. </li>
          <li>The winner’s name will be available 28 days after closing date by emailing the following address: blade-ladle-whisk@gmail.com</li>
          <li>Entry into the competition will be deemed as acceptance of these terms and conditions</li>
          <li>The rules of the competition and how to enter are as follows:</li>
          <li>The rules of the competition and how to enter are as follows:</li>
      </ol>
    </div>
  </v-card>
  </v-row>
  <v-row center class="pt-2">
    <v-card class="pa-2">
      <h3>Recipe Submission Form</h3>
      <p>Please fill out the form below to submit a recipe for competition. You are encourged to post any pictures within the Facebook group #BLWCompetition</p>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="1000px"
      >
        <template v-slot:activator="{ on, attrs}">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
          Submit Recipe
          </v-btn>
        </template>
        <v-card>
          <SubmitRecipie class="pa-3" />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="secondary"
            text
            @click="dialog = false"
            >
              Cancel Submittion
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-row>
</v-container>
</template>
<script>
import SubmitRecipie from '../components/SubmitRecipie'

  export default {
    components:{
    SubmitRecipie,
    },
    data: () => ({
      dialog: false,
    }),
  }
</script>