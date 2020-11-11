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
import CircleNet from './icons/CircleNet.vue'
import Close from './icons/Close.vue'
import CylinderBottom from './icons/CylinderBottom.vue'
import CylinderEmpty from './icons/CylinderEmpty.vue'
import CylinderTop from './icons/CylinderTop.vue'
import Dot from './icons/Dot.vue'
import DropdownLeft from './icons/DropdownLeft.vue'
import DropdownRight from './icons/DropdownRight.vue'
import Edit from './icons/Edit.vue'
import Facebook from './icons/Facebook.vue'
import Google from './icons/Google.vue'
import GridNet from './icons/GridNet.vue'
import Hatchers120 from './icons/Hatchers120.vue'
import Hatchers150 from './icons/Hatchers150.vue'
import Hatchers180 from './icons/Hatchers180.vue'
import Hatchers240 from './icons/Hatchers240.vue'
import Hatchers3 from './icons/Hatchers3.vue'
import Hatchers30 from './icons/Hatchers30.vue'
import Hatchers300 from './icons/Hatchers300.vue'
import Hatchers60 from './icons/Hatchers60.vue'
import Hatchers90 from './icons/Hatchers90.vue'
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
  CircleNet,
  CylinderBottom,
  CylinderEmpty,
  CylinderTop,
  Close,
  Dot,
  DropdownLeft,
  DropdownRight,
  Edit,
  Facebook,
  Google,
  GridNet,
  Hatchers120,
  Hatchers150,
  Hatchers180,
  Hatchers240,
  Hatchers3,
  Hatchers30,
  Hatchers300,
  Hatchers60,
  Hatchers90,
  Heart,
  Profile,
  Search,
  Settings,
  ShapeLeft,
  ShapeRight,
  Trash,
  Twitter,
}

const getIcon = ico => icons[ico]
const pickColorOrVar = x => (x && x[0] === '#' ? x : utils.css.getVar(`color-${x}`))

export default {
  name: 'icon',
  props: {
    icon: {
      type: String,
      required: true,
      validator: x => getIcon(x),
    },
    button: Boolean,
    color: String,
    hover: {
      type: String,
      default: 'tertiary',
    },
    inline: Boolean,
  },
  watch: {
    color(x) {
      this.cssVars.baseColor = pickColorOrVar(x)
    },
    hover(x) {
      this.cssVars.hoverColor = pickColorOrVar(x)
    },
  },
  data() {
    return {
      cssVars: {
        baseColor: pickColorOrVar(this.color),
        hoverColor: pickColorOrVar(this.hover),
      },
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
      if (this.inline) styles.display = 'inline'
      return styles
    },
  },
}
</script>

<style lang="scss">
.g-icon-component {
  @extend .align-items;
  & > svg > * {
    @extend .transition;
  }
  &-color > svg > *[stroke] {
    stroke: var(--base-color);
  }
  &-color > svg > *[fill] {
    fill: var(--base-color);
  }
  &-hover:hover > svg > *[stroke] {
    stroke: var(--hover-color);
  }
  &-hover:hover > svg > *[fill] {
    fill: var(--hover-color);
  }
}
</style>
