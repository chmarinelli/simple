<template>
  <div class="rating-field">
    <v-rating hover ripple :value="value">
      <template #item="props">
        <v-chip
          :color="getRateChipColor(props.isFilled)"
          :class="getRateChipPadding(props.index)"
          class="rounded-pill mr-3 py-6"
          @click="handleChange(props)"
          >{{ getRateNumber(props.index) }}
        </v-chip>
      </template>
    </v-rating>
  </div>
</template>

<script>
export default {
  name: 'RatingField',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    handleChange(props) {
      props.click()
      this.$emit('input', props.index + 1)
    },
    getRateChipColor(isRateFilled) {
      return isRateFilled ? 'primary' : 'white'
    },
    getRateChipPadding(rateIndex) {
      return `px-${(rateIndex * 3 || 1) + 4}`
    },
    getRateNumber(rateIndex) {
      return rateIndex + 1
    }
  }
}
</script>


<style lang="scss" scoped>
.rating-field {
  .v-rating {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .rounded-pill {
    &.white {
      border: 1px solid #dedede !important;
    }

    &.primary {
      border: 1px solid;
    }
  }
}
</style>