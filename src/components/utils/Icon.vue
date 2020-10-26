<template>
  <flex
    align-items
    class="g-icon-component"
    :class="classes"
    :style="styles"
    @click="button && $emit('click')"
  >
    <component :is="component"></component>
  </flex>
</template>

<script>
import ArrowBack from './icons/ArrowBack.vue'
import ArrowForward from './icons/ArrowForward.vue'
import ArrowForwardSmall from './icons/ArrowForwardSmall.vue'
import Cad from './icons/Cad.vue'
import Close from './icons/Close.vue'
import Dot from './icons/Dot.vue'
import DropdownLeft from './icons/DropdownLeft.vue'
import DropdownRight from './icons/DropdownRight.vue'
import Edit from './icons/Edit.vue'
import CircleNet from './icons/CircleNet.vue'
import Facebook from './icons/Facebook.vue'
import Google from './icons/Google.vue'
import Heart from './icons/Heart.vue'
import Profile from './icons/Profile.vue'
import Search from './icons/Search.vue'
import Settings from './icons/Settings.vue'
import ShapeLeft from './icons/ShapeLeft.vue'
import ShapeRight from './icons/ShapeRight.vue'
import Trash from './icons/Trash.vue'
import Twitter from './icons/Twitter.vue'
import { utils } from '../../utils/utils.js'

const icons = {
  ArrowBack,
  ArrowForward,
  ArrowForwardSmall,
  Cad,
  Close,
  Dot,
  DropdownLeft,
  DropdownRight,
  Edit,
  CircleNet,
  Facebook,
  Google,
  Heart,
  Profile,
  Search,
  Settings,
  Trash,
  Twitter,
  ShapeLeft,
  ShapeRight,
}

const getIcon = ico => icons[ico]
const pickColorOrVar = (x = '') => (x && x.charAt[0] === '#' ? x : utils.css.getVar(`color-${x}`))

export default {
  name: 'icon',
  props: {
    button: Boolean,
    color: String,
    hover: {
      type: String,
      default: 'tertiary',
    },
    icon: {
      type: String,
      required: true,
      validator: x => getIcon(x),
    },
  },
  data() {
    return {
      baseColor: pickColorOrVar(this.color),
      hoverColor: pickColorOrVar(this.hover),
    }
  },
  computed: {
    component() {
      return getIcon(this.icon)
    },
    classes() {
      const classes = []
      this.button && classes.push('cursor-pointer')
      this.color && classes.push('g-icon-component-color')
      this.hover && this.button && classes.push('g-icon-component-hover')
      return classes
    },
    styles() {
      const styles = {}
      if (this.color) styles['--icon-color'] = this.baseColor
      if (this.hover) styles['--icon-hover-color'] = this.hoverColor
      return styles
    },
  },
}
</script>

<style lang="scss">
.g-icon-component {
  & > svg * {
    @extend .transition;
  }
  &-color > svg > *[stroke] {
    stroke: var(--icon-color);
  }
  &-color > svg > *[fill] {
    fill: var(--icon-color);
  }
  &-hover:hover > svg > *[stroke] {
    stroke: var(--icon-hover-color);
  }
  &-hover:hover > svg > *[fill] {
    fill: var(--icon-hover-color);
  }
}
</style>
