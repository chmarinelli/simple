<template>
  <v-app>
    <v-app-bar app></v-app-bar>

    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col md="6">
            <v-expand-transition>
              <ValidationObserver
                v-show="!formSubmitted"
                ref="form"
                tag="form"
                @submit.prevent="onSubmit"
              >
                <PreferenceForm :value="model" :breeds="collections.breeds" />
              </ValidationObserver>
            </v-expand-transition>
            <v-expand-transition>
              <v-card v-show="formSubmitted">
                <v-img height="500px" :src="imagePath">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                        size="64"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title>Form submitted successfully</v-card-title>
              </v-card>
            </v-expand-transition>
          </v-col>
          <v-col md="12">
            <PreferencesList/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { http } from "@/core/api";
import PreferenceForm from "./components/PreferenceForm.vue";
import PreferencesList from './components/PreferencesList.vue';

export default {
  name: "App",
  components: {
    ValidationObserver,
    PreferenceForm,
    PreferencesList,
  },
  data() {
    return {
      model: {
        email: null,
        breed: null,
        hadShiba: null,
        receiveNews: false,
        raiting: null,
      },
      collections: {
        breeds: []
      },
      formSubmitted: false,
      imagePath: null,
    };
  },
  methods: {
    loadBreedImage() {
      http
        .get(`breed/${this.model.breed}/images/random`)
        .then((response) => (this.imagePath = response.data.message));
    },
    async loadBreeds() {
      this.loading = true;
      await http
        .get("breeds/list/all")
        .then((response) => this.collections.breeds = Object.keys(response.data.message))
        .finally(() => (this.loading = false));
    },
    reset() {
      this.model = {
        email: null,
        breed: null,
        hadShiba: null,
        receiveNews: false,
        rating: null,
      };
      this.imagePath = null;
      this.$refs.form.reset();
      this.formSubmitted = false;
    },
    async onSubmit() {
      if (!(await this.$refs.form.validate())) return;
      this.$store.dispatch("addPreference", this.model);
      this.formSubmitted = true;
      this.loadBreedImage();
      setTimeout(() => this.reset(), 7000);
    },
  },
  mounted() {
    this.loadBreeds();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
