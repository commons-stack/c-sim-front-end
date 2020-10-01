const KEY = {
  TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
}

// TODO - (key, encode?)

const prop = key => ({
  get: () => localStorage.getItem(key),
  set: data => localStorage.setItem(key, data),
  remove: () => localStorage.removeItem(key),
})

export const localstore = {
  token: prop(KEY.TOKEN),
  refreshToken: prop(KEY.REFRESH_TOKEN),
  user: prop(KEY.USER),
}
