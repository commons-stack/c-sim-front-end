const camelToKebab = s =>
  s
    .split('')
    .reduce((a, c) => {
      const isUpper = c === c.toUpperCase()
      if (isUpper) a.push('-')
      a.push(isUpper ? c.toLowerCase() : c)
      return a
    }, [])
    .join('')

export const CSSVars = {
  install(Vue) {
    Vue.mixin({
      mounted: function() {
        if (!this.cssVars || typeof this.cssVars !== 'object') return
        this.$watch(
          'cssVars',
          function(n) {
            Object.entries(n).forEach(([k, v]) =>
              this.$el.style.setProperty(`--${camelToKebab(k)}`, v),
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
