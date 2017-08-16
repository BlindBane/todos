export const partial = (func, ...args) => func.bind(null, ...args)

const _pipe = (a, b) => (...args) => b(a(...args))

export const pipe = (...funcs) => funcs.reduce(_pipe)
