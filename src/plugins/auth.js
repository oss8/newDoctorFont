import { storage } from '@/util'

const auth = {
  checkLoggedIn() {
    return storage.getToken() != null
  }
}

export default class Auth {
  static install(Vue) {
    Object.defineProperty(Vue.prototype, '$auth', {
      get() { return auth }
    })
  }
}
