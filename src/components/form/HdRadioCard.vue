<template>
  <label :for="name">
    <input
      type="radio"
      :id="name"
      :name="name"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledBy"
      :aria-invalid="isInvalid"
      :disabled="isDisabled"
      :aria-disabled="isDisabled"

      @change="$emit('input', $event.target.value)"
      :checked="isChecked"
      :value="value"
    />
    <slot name="icon" />
    <slot />
    <div class="radio" :class="{ ['radio--selected']: isChecked }"></div>
  </label>
</template>

<script>
// @ts-check

export default {
  name: 'HdRadioCard',
  model: {
    prop: 'nativeValue',
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    nativeValue: [String, Number],
    ariaLabel: String,
    ariaLabelledBy: String,
    isDisabled: Boolean,
    isInvalid: Boolean,
  },
  computed: {
    isChecked() {
      return this.nativeValue === this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "homeday-blocks/src/styles/mixins.scss";

input[type="radio"] {
  display: none;
}

.radio {
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  max-width: 20px;

  border-radius: 50%;
  border: 2px solid $neutral-gray;

  outline-width: 0;
  overflow: hidden;

  &:hover,
  &:active,
  &:focus {
    transition: ease-in-out $time-s;
    box-shadow: 0 0 0 7px getShade($secondary-color, 90);
  }

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background-color: $white;

    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
    transform-origin: top left;
    transition: transform $time-s, opacity $time-s;
  }
}

.radio--selected {
  border-color: getShade($secondary-color, 110);
  background-color: getShade($secondary-color, 110);

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 0 0 7px rgba(getShade($secondary-color, 110), 0.15);
  }

  &:before {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
}
</style>
