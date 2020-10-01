<template>
  <transition name="modal-fade">
    <div class="x-wrap" :style="wrapStyle" :class="wrapClass" v-show="isShown">
      <div
        ref="modal"
        tabindex="-1"
        v-click-outside="hide"
        class="x-modal"
        :class="modalClass"
        :style="modalStyle"
      >
        <component :is="modalComponent" :data="modalData" />
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { utils } from '../../utils/utils.js'

export default {
  name: 'modal',
  created() {
    document.addEventListener('keydown', this.handleEscape)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEscape)
    utils.el.body.style.overflowY = 'auto'
  },
  props: {
    xClass: [String, Object, Array],
    xStyle: [String, Object],
    overlay: {
      type: [String, Boolean],
      default: '#000c',
    },
    bg: {
      type: [String, Boolean],
      default: '#fff',
    },
    data: Object,
  },
  data() {
    return {
      isShown: false,
      openEl: [],
      modalData: this.data,
      modalComponent: this.data?.is,
    }
  },
  methods: {
    show(component = undefined, data = undefined) {
      if (component) this.modalComponent = component
      if (data) this.modalData = data
      if (this.isShown) return
      this.openEl.includes(event.target) || this.openEl.push(event.target)
      this.$emit('show')
      this.isShown = true
      this.$nextTick(() => {
        this.$refs.modal.focus()
      })
    },
    hide() {
      if (!this.isShown || this.openEl.includes(event.target)) return
      this.$emit('hide')
      this.isShown = false
    },
    handleEscape() {
      if (event.keyCode === 27) this.hide()
    },
  },
  computed: {
    wrapStyle() {
      const styles = {}
      utils.el.body.style.overflowY = this.isShown ? 'hidden' : 'auto'
      styles.overflowY = this.isShown ? 'auto' : 'hidden'
      if (this.overlay && this.overlay[0] === '#')
        styles.background = this.overlay
      return styles
    },
    wrapClass() {
      const classes = {}
      if (this.overlay && this.overlay[0] !== '#')
        classes[`bg-${this.overlay}`] = true
      return classes
    },
    modalClass() {
      const classes = {}
      if (
        this.bg &&
        this.bg !== 'none' &&
        this.bg !== 'false' &&
        this.bg[0] !== '#'
      )
        classes[`bg-${this.bg}`] = true
      return {
        ...classes,
        ...utils.css.parseStyles(this.xClass),
      }
    },
    modalStyle() {
      const styles = {}
      if (
        this.bg &&
        this.bg !== 'none' &&
        this.bg !== 'false' &&
        this.bg[0] === '#'
      )
        styles.background = this.bg
      return {
        ...styles,
        ...utils.css.parseStyles(this.xStyle),
      }
    },
  },
}
</script>

<style scoped lang="scss">
.x-wrap {
  @extend .center, .h-1-1, .w-1-1, .flex, .box;
  z-index: 100;
  overflow: auto;
}
.x-modal {
  outline: none;
  margin: auto;
}
.modal-dropdown {
  @include transition(all 0.6s cubic-bezier(0.81, 0.17, 0.28, 1.02)) {
    transform: translateY(-6px);
    opacity: 0;
  }
}
.modal-fade {
  @include transition(all 0.6s cubic-bezier(0.8, 0.4, 0.2, 0.8)) {
    opacity: 0;
  }
}
</style>
