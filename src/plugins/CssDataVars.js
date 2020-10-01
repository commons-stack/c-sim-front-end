export const CSSDataVars = {
  install(Vue) {
    Vue.mixin({
      mounted: function() {
        if (!this.cssVars && typeof this.cssVars !== 'object') return
        this.$watch(
          'cssVars',
          function(n) {
            Object.entries(n).forEach(([k, v]) =>
              this.$el.style.setProperty(`--${k}`, v),
            )
          },
          {
            deep: true,
            immediate: true,
          },
        )
      },
    })
  },
}
