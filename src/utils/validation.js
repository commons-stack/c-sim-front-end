const getTag = value =>
  value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : toString.call(value)

const isObjectLike = value => typeof value === 'object' && value !== null

export const is = {
  not: fn => value => !fn(value),
  all: (...fns) => value => fns.every(f => f(value)),
  some: (...fns) => value => fns.some(f => f(value)),
  none: (...fns) => value => !fns.some(f => f(value)),
  array: value => Array.isArray(value),
  boolean: value => typeof value === 'boolean',
  string: value => typeof value === 'string',
  number: value => typeof value === 'number',
  numeric: value =>
    typeof value === 'number' || (!is.empty(value) && !isNaN(value)),
  function: value =>
    typeof value === 'function' &&
    !/^class\s/.test(Function.prototype.toString.call(value)),
  object: value =>
    typeof value === 'object' && typeof value !== 'function' && value !== null,
  plainObject: value => {
    if (!isObjectLike(value) || getTag(value) != '[object Object]') return false
    if (Object.getPrototypeOf(value) === null) return true
    let proto = value
    while (Object.getPrototypeOf(proto) !== null)
      proto = Object.getPrototypeOf(proto)
    return Object.getPrototypeOf(value) === proto
  },
  nil: value => value == null,
  null: value => value === null,
  undefined: value => value === undefined,
  value: value => value !== undefined && !is.empty(value),
  empty: value =>
    value == null ||
    (Array.isArray(value) || typeof value === 'string' ? !value.length : true),
  eq: (toValue, strict = false) => value =>
    strict ? value === toValue : value == toValue,
  gt: number => value => value > number,
  lt: number => value => value < number,
  gte: toNumber => value => value >= toNumber,
  lte: toNumber => value => value <= toNumber,
  email: value =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value,
    ),
}
