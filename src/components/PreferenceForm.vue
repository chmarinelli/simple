<template>
  <ValidationObserver ref="form" v-slot="{ changed }">
    <v-card>
      <v-card-title class="headline primary white--text">
        Dog Preference Form
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="Email"
              rules="required|email|max:128"
            >
              <v-text-field
                v-model="value.email"
                :success="valid"
                error-count="1"
                :error-messages="errors"
                :counter="128"
                label="Email*"
              />
            </ValidationProvider>
          </v-col>
          <v-col cols="12">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="Breed"
              rules="required"
            >
              <v-select
                v-model="value.breed"
                :items="breeds"
                :loading="loading"
                loader-height="4"
                :success="valid"
                :error-count="1"
                :error-messages="errors"
                label="What is your favorite dog breed?*"
                placeholder="Start typing to Search"
                prepend-icon="mdi-dog"
              ></v-select>
            </ValidationProvider>
          </v-col>
          <v-col cols="12">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="Had Shiba Inu"
              rules="required"
            >
              <v-radio-group
                v-model="value.hadShiba"
                label="Have you ever had a Shiba Inu?*"
                :success="valid"
                :error-count="1"
                :error-messages="errors"
                row
              >
                <v-radio label="Yes" :value="true"></v-radio>
                <v-radio label="No" :value="false"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </v-col>
          <v-col cols="12">
            <v-switch
              v-model="value.receiveNews"
              inset
              label="Yes, I'd like to receive news about Shiba Inu puppies."
            ></v-switch>
          </v-col>
          <v-col cols="12">
            <ValidationProvider
              v-slot="{ errors }"
              name="Rating"
              rules="required"
            >
              <label>How much do you love our form?*</label>
              <RatingField name="Rating" v-model="value.rating" />
              <div class="v-text-field__details">
                <div
                  v-if="errors.length"
                  class="v-messages theme--light error--text"
                  role="alert"
                >
                  <div class="v-messages__wrapper">
                    <div class="v-messages__message">
                      {{ errors[0] }}
                    </div>
                  </div>
                </div>
              </div>
            </ValidationProvider>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn type="submit" color="primary" text :disabled="!changed" name="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import RatingField from "./RatingField.vue";

export default {
  name: "PreferenceForm",
  components: {
    RatingField,
    ValidationObserver
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    breeds: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>
