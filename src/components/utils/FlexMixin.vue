<script>
const calcGap = x =>
  ['px', 'em', 'rem'].some(u => x.includes(u)) ? x : `${x}rem`

export default {
  props: {
    tag: String,
    gap: String,
    rowGap: String,
    colGap: String,
  },
  computed: {
    baseStyles() {
      const styles = {}
      if (this.gap) styles.gap = calcGap(this.gap)
      if (this.colGap) styles.columnGap = calcGap(this.colGap)
      if (this.rowGap) styles.rowGap = calcGap(this.rowGap)

      return styles
    },
    options() {
      return {
        attrs: this.$props,
        on: this.$listeners,
        style: {
          ...this.baseStyles,
          ...this.styles,
        },
      }
    },
  },
  render(el) {
    return el(this.tag || 'div', this.options, this.$slots.default)
  },
}
</script>
