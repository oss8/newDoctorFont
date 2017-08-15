
const login = {
  data() {
    return {
      mobile: '',
      code: '',
      waitSeconds: 0
    }
  },
  computed: {
    mobileValid: function () {
      return this.mobile != null && this.mobile.length === 11
    },
    smsBtnDisabled: function () {
      return !this.mobileValid || this.waitSeconds > 0
    },
    smsBtnText: function () {
      return this.waitSeconds > 0 ? `${this.waitSeconds}秒后重试` : '获取验证码'
    },
    okBtnDisabled: function () {
      return !(this.mobileValid && this.code != null && this.code.length > 0)
    }
  },
  methods: {
    async sendVerifyCode() {
      await this.$api.sendVerifyCode(this.mobile)

      this.waitSeconds = 60

      const countDown = () => {
        this.waitSeconds--
        if (this.waitSeconds > 0) {
          setTimeout(countDown.bind(this), 1000)
        }
      }

      countDown()
    }
  }
}

export default login
