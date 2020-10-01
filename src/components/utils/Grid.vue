<script>
import FlexMixin from './FlexMixin.vue'

export default {
  name: 'grid',
  mixins: [FlexMixin],
  props: {
    gtc: String,
    gtcFill: String,
    gtr: String,
    gta: String,
  },
  computed: {
    styles() {
      const styles = {}
      styles.display = 'grid'
      if (this.gtc || this.gtcFill) {
        styles.gridTemplateColumns =
          this.gtc || `repeat(auto-fill, minmax(${this.gtcFill}, 1fr))`
      }
      if (this.gtr) styles.gridTemplateRows = this.gtr
      if (this.gta) styles.gridTemplateAreas = this.gta
      return styles
    },
  },
}
</script>

<style scoped lang="scss">
</style>
