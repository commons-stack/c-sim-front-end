export const utils = {
  body: document.getElementsByTagName('body')[0],
  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
  date: {
    readable: x => new Date(x).toDateString(),
    milis: x => Date.parse(x),
    dhm: x => {
      const time = new Date(x)
      const d = time.getUTCDate() - 1
      const h = time.getUTCHours()
      const m = time.getUTCMinutes()
      return `${d}d ${h}h ${m}m`
    },
  },
  changeScale: (value, min, max, newMin = 0, newMax = 100) =>
    ((value - min) * (newMax - newMin)) / (max - min) + newMin,
  time: {
    seconds: (x, offset = 0) => x * 1000 + offset,
    minutes: (x, offset = 0) => this.time.seconds(x * 60, offset),
    hours: (x, offset = 0) => this.time.minutes(x * 60, offset),
  },
  generate: {
    cantorPair: (num1, num2) => ((num1 + num2) * (num1 + num2 + 1)) / 2 + num2,
    string: (length = 8) => Math.random().toString(36).substr(2, length),
  },
  map: {
    id: (x, index) => {
      x.id = x.id ?? index
      return x
    },
    object: obj => x => ({ ...obj, ...x }),
  },
  array: {
    getRandomElement: array => array[Math.floor(Math.random() * array.length)],
    defer: (array = [], delay = 100) =>
      array.reduce((a, c, i) => {
        setTimeout(() => a.push(c), delay * i)
        return a
      }, []),
  },
  throttle: (func, wait = 100) => {
    let waiting, callTime, _this, _args
    function invoke() {
      const now = Date.now()
      if (now - callTime < wait) return
      func.apply(_this, _args)
      callTime = now
    }
    return function (...args) {
      if (waiting) return
      _this = this
      _args = args
      invoke()
      waiting = true
      setTimeout(() => {
        invoke()
        waiting = false
      }, wait)
    }
  },
  units: {
    remToPx: rem => rem * parseFloat(getComputedStyle(document.documentElement).fontSize),
  },
  css: {
    getProperty: (element, property) => window.getComputedStyle(element).getPropertyValue(property),
    setProperty: (element, property, value) => element.style.setProperty(property, value),
    getVar: name =>
      window.getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim(),
    setVar: (name, value) => document.documentElement.style.setProperty(`--${name}`, value),
    parseStyles: input => {
      let out = {}
      if (Array.isArray(input)) input.forEach(x => (out[x] = true))
      else if (typeof input === 'object') out = input
      else if (typeof input === 'string') {
        if (input.includes(':')) {
          input.split(';').forEach(kv => {
            if (!kv) return
            const keyVal = kv.split(':')
            out[keyVal[0]] = keyVal[1].trim()
          })
        } else input.split(' ').forEach(x => (out[x] = true))
      }
      return out
    },
  },
  log: {
    dev: message =>
      // eslint-disable-next-line no-console
      process.env.NODE_ENV !== 'production' && console.log(message),
  },
  pipe: (...fns) => x => fns.reduce((v, f) => f(v), x),
}
