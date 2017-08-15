import { storage } from '@/util'

const city = {
  get current() {
    return storage.getCity()
  },
  set current(city) {
    storage.setCity(city)
  },
  get list() {
    return storage.getCityList()
  },
  set list(list) {
    storage.setCityList(list)
  },
  isHaveCity (regionId) {
    const citys = storage.getCityList()
    if (citys == null) {
      return false
    }
    for (let city of citys) {
      if (city.regionId === regionId) {
        return true
      }
    }
    return false
  }
}

export default class Auth {
  static install(Vue) {
    Object.defineProperty(Vue.prototype, '$city', {
      get() { return city }
    })
  }
}
