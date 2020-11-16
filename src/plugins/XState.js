export const XState = {
  install(Vue) {
    Vue.prototype.$send = function(event) {
      if (typeof this.machine?.send !== 'function')
        // eslint-disable-next-line no-console
        console.warn('Can not send event if machine has not been registered.')
      else this.machine.send(event)
    }
    Vue.mixin({
      created: function() {
        if (!this.machine || typeof this.machine.start !== 'function') return
        this.machine
          .onTransition(state => {
            this.xstate = state.value
          })
          .start()
      },
      data() {
        return {
          xstate: this.machine?.initialValue,
        }
      },
    })
  },
}
