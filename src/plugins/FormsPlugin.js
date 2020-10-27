export const FormsPlugin = {
  install(Vue) {
    Vue.mixin({
      created: function() {
        if (!this.forms || typeof this.forms !== 'object') return
        const vget = {}
        const vset = {}
        Object.entries(this.forms).forEach(([name, fields]) => {
          vget[name] = { form: false }
          vset[name] = {}

          const keys = Object.keys(fields)
          keys.forEach(key => {
            vget[name][key] = false
            vset[name][key] = x => {
              this.forms.vget[name][key] = x
              this.forms.vget[name].form = keys.every(k => this.forms.vget[name][k])
            }
          })
        })
        this.$set(this.forms, 'vget', vget)
        this.$set(this.forms, 'vset', vset)
      },
    })
  },
}
