<script>
import { utils } from '@/utils/utils.js'

export default {
  name: 'form-input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    color: String,
    list: String || Array,
    storeModel: String,
    storeValidator: Function,
    validator: Function,
  },
  mounted() {
    this.htmlValid = this.$el.validity.valid
    this.value = this.$el.value
  },
  data() {
    return {
      value: undefined,
      wasFocused: false,
      htmlValid: undefined,
    }
  },
  computed: {
    storePaths() {
      return this.storeModel ? this.storeModel.split('/') : undefined
    },
    initialValue() {
      return this.storeModel
        ? this.$store.state[this.storePaths[0]][this.storePaths[1]]
        : this.value
    },
    isValid() {
      let valid = this.htmlValid
      if (this.validator) valid = valid && this.validator(this.value)
      if (this.storeValidator)
        valid = valid && this.$store.getters[this.storeValidator]
      return valid
    },
    showError() {
      return this.wasFocused && !this.isValid
    },
    element() {
      const elementMap = {
        textarea: 'textarea',
      }
      return elementMap[this.type] || 'input'
    },
    classes() {
      const classes = ['x-base']
      if (this.showError) classes.push('x-error')
      if (this.type !== 'range') classes.push('x-default')
      return classes
    },
  },
  watch: {
    isValid: {
      handler(x) {
        this.$emit('valid', x)
      },
    },
  },
  methods: {
    processValue() {
      let value = this.$el.value
      if (this.type === 'number' || this.type === 'range') {
        if (!isNaN(this.$el.valueAsNumber)) value = this.$el.valueAsNumber
        const max = this.$attrs.max
        if (max !== undefined && value > max) {
          value = max
          this.$el.value = max
        }
      }
      return value
    },
    handleInput() {
      this.value = this.processValue()
      this.htmlValid = this.$el.validity.valid
      if (this.storeModel) {
        const module = this.storePaths[0]
        const setter = `set${utils.capitalize(this.storePaths[1])}`
        this.$store.commit(`${module}/${setter}`, this.value)
      }
      this.$emit('input', this.value)
    },
  },
  render(el) {
    return el(this.element, {
      attrs: {
        ...this.$props,
        value: this.initialValue,
      },
      on: {
        input: this.handleInput,
        focus: () => this.$emit('focus'),
        blur: () => (this.wasFocused = true),
      },
      class: this.classes,
    })
  },
}
</script>

<style scoped lang="scss">
.x-base {
  @extend .transition, .w-1-1;
  font-size: 16px;
  &::placeholder {
    @extend .color-muted;
  }
}
.x-default {
  @extend .shadow-bot-1, .p-0p5;
  &:focus {
    @extend .shadow-bot-2;
  }
}
.x-error {
  box-shadow: 0 1px $color-error;
  &:focus {
    box-shadow: 0 2px $color-error;
  }
}

// date input
input[type='date']::-webkit-calendar-picker-indicator {
  background: url('~@/assets/icons/FormInputDatePicker.svg');
  margin-top: 5px;
  padding: 0;
}

// number input
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

// range input
$track-color: #000 !default;
$thumb-color: $color-light !default;
// $thumb-color: url('~@/assets/icons/FormInputThumbSlider.svg');

$thumb-radius: 22px !default;
$thumb-height: 43px !default;
$thumb-width: 43px !default;
$thumb-border-width: 0px !default;
$thumb-border-color: #000 !default;

$track-width: 100% !default;
$track-height: 2px !default;
$track-border-width: 0px !default;
$track-border-color: #000 !default;

$track-radius: 5px !default;
$contrast: 5% !default;

$ie-bottom-track-color: darken($track-color, $contrast) !default;

@mixin track {
  cursor: default;
  height: $track-height;
  transition: all 0.2s ease-in-out;
  width: $track-width;
}

@mixin thumb {
  background: $thumb-color;
  border: $thumb-border-width solid $thumb-border-color;
  border-radius: $thumb-radius;
  box-sizing: border-box;
  cursor: pointer;
  height: $thumb-height;
  width: $thumb-width;
}

input[type='range'] {
  -webkit-appearance: none;
  background: transparent;
  margin: $thumb-height / 2 0;
  width: $track-width;

  &::-moz-focus-outer {
    border: 0;
  }

  &:focus {
    outline: 0;

    &::-webkit-slider-runnable-track {
      background: lighten($track-color, $contrast);
    }

    &::-ms-fill-lower {
      background: $track-color;
    }

    &::-ms-fill-upper {
      background: lighten($track-color, $contrast);
    }
  }

  &::-webkit-slider-runnable-track {
    @include track;
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
  }

  &::-webkit-slider-thumb {
    @include thumb;
    -webkit-appearance: none;
    margin-top: (
      (-$track-border-width * 2 + $track-height) / 2 - $thumb-height / 2
    );
  }

  &::-moz-range-track {
    @include track;
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: $track-radius;
    height: $track-height / 2;
  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &::-ms-track {
    @include track;
    background: transparent;
    border-color: transparent;
    border-width: ($thumb-height / 2) 0;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: $ie-bottom-track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: ($track-radius * 2);
  }

  &::-ms-fill-upper {
    background: $track-color;
    border: $track-border-width solid $track-border-color;
    border-radius: ($track-radius * 2);
  }

  &::-ms-thumb {
    @include thumb;
    margin-top: $track-height / 4;
  }

  &:disabled {
    &::-webkit-slider-thumb,
    &::-moz-range-thumb,
    &::-ms-thumb,
    &::-webkit-slider-runnable-track,
    &::-ms-fill-lower,
    &::-ms-fill-upper {
      cursor: default;
    }
  }
}
</style>
