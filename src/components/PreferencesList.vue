<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Email</th>
          <th class="text-center">Favorite dog breed</th>
          <th class="text-center">Had a Shiba Inu</th>
          <th class="text-center">Receive news</th>
          <th class="text-center">Love form</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in preferences" :key="i">
          <td>{{ item.email }}</td>
          <td>{{ item.breed }}</td>
          <td>{{ item.hadShiba ? "Yes" : "No" }}</td>
          <td>{{ item.receiveNews ? "Yes" : "No" }}</td>
          <td>
            <v-rating
              v-model="item.rating"
              :length="5"
              background-color="primary lighten-3"
              color="primary"
              readonly
            ></v-rating>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PreferencesList",
  computed: {
    ...mapGetters(["preferences"]),
  },
};
</script>
