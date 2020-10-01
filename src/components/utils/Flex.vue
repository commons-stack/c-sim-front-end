<script>
import FlexMixin from './FlexMixin.vue'

export default {
  name: 'flex',
  mixins: [FlexMixin],
  props: {
    column: Boolean,
    wrap: Boolean,
    nowrap: Boolean,
  },
  computed: {
    styles() {
      const styles = {}
      styles.display = 'flex'
      if (this.column) styles.flexDirection = 'column'
      if (this.wrap) styles.flexWrap = 'wrap'
      else if (this.nowrap) styles.flexWrap = 'nowrap'
      return styles
    },
  },
}
</script>

<style scoped lang="scss">
</style>
