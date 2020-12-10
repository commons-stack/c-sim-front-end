const getCssVar = name =>
  window.getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim()

export const BreakpointPlugin = {
  install(Vue) {
    const currentBreakpoints = {
      s: getCssVar('breakpoint-s'),
      m: getCssVar('breakpoint-m'),
      l: getCssVar('breakpoint-l'),
      xl: getCssVar('breakpoint-xl'),
    }
    const breakpoints = Vue.observable({ s: false, m: false, l: false, xl: false })
    const refreshBreakpoints = () => {
      breakpoints.s = !!getCssVar('breakpoint-s-active')
      breakpoints.m = !!getCssVar('breakpoint-m-active')
      breakpoints.l = !!getCssVar('breakpoint-l-active')
      breakpoints.xl = !!getCssVar('breakpoint-xl-active')
    }
    refreshBreakpoints()
    Object.values(currentBreakpoints).forEach(size =>
      window.matchMedia(`(max-width: ${size})`).addEventListener('change', refreshBreakpoints),
    )
    Vue.prototype.$breakpoints = breakpoints
  },
}
