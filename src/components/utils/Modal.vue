<template>
  <transition name="modal-fade">
    <div class="x-wrap" :style="wrapStyle" v-show="isShown">
      <div
        ref="modal"
        tabindex="-1"
        v-click-outside="hide"
        class="x-modal"
        :class="xClass"
        :style="modalStyle"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
// TODO - details-summary modal
import { utils } from '../../utils/utils.js'

const defaults = {
  background: '#fff',
  overlay: '#000c',
}

export default {
  name: 'modal',
  created() {
    document.addEventListener('keydown', this.handleEscape)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleEscape)
    utils.body.style.overflowY = 'auto'
  },
  props: {
    xClass: [String, Object, Array],
    xStyle: [String, Object],
    overlay: [Boolean, String],
    bg: {
      type: [Boolean, String],
      default: true,
    },
  },
  data() {
    return {
      isShown: false,
      openEl: [],
    }
  },
  methods: {
    show() {
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
      utils.body.style.overflowY = this.isShown ? 'hidden' : 'auto'
      styles.overflowY = this.isShown ? 'auto' : 'hidden'
      if (this.overlay) {
        styles.background =
          this.overlay === true
            ? defaults.overlay
            : this.overlay === 'true'
            ? defaults.overlay
            : this.overlay[0] === '#'
            ? this.overlay
            : utils.css.getVar(`color-${this.overlay}`)
      }
      return styles
    },
    modalStyle() {
      const styles = {}
      if (this.bg && this.bg !== 'false') {
        styles.background =
          this.bg === true
            ? defaults.background
            : this.bg === 'true'
            ? defaults.background
            : this.bg[0] === '#'
            ? this.bg
            : utils.css.getVar(`color-${this.bg}`)
      }
      return {
        ...utils.css.parseStyles(styles),
        ...this.xStyle,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.x-wrap {
  @extend .center, .h-vh, .w-vw, .flex, .box;
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
