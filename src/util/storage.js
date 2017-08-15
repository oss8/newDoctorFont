export default {
  getToken() {
    const token = localStorage.getItem('token')
    if (typeof token === 'string' && token.length > 0) {
      return token
    } else {
      return null
    }
  },
  setToken(token) {
    if (typeof token === 'string' && token.length > 0) {
      localStorage.setItem('token', token)
    }
  },
  getCity() {
    const city = localStorage.getItem('city')
    if (typeof city === 'string' && city.length > 0) {
      return JSON.parse(city)
    } else {
      return null
    }
  },
  setCity(city) {
    if (typeof city === 'object' && city != null) {
      localStorage.setItem('city', JSON.stringify(city))
    }
  },
  getCityList() {
    const list = localStorage.getItem('city-list')
    if (typeof list === 'string' && list.length > 0) {
      return JSON.parse(list)
    } else {
      return null
    }
  },
  setCityList(list) {
    if (Array.isArray(list)) {
      localStorage.setItem('city-list', JSON.stringify(list))
    }
  }
}
