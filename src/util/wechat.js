import wx from 'weixin-js-sdk'
import axios from 'axios'
// import config from '@/config.conf'

// wxConfig(location.href)
export default {
  shareToFriend(obj, success, cancel) {
    wx.onMenuShareAppMessage({
      title: obj.title, // 分享标题
      desc: obj.desc, // 分享描述
      link: obj.url, // 分享链接
      imgUrl: 'http://car.eshine.cn/logo88.png', // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数
        if (success) {
          success()
        }
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
        if (cancel) {
          cancel()
        }
      }
    })
  },
  wxConfig: wxConfig
}

function wxConfig(url) {
  var params = { GetTicket: { url: url } }
  axios.post(config.baseUrl + 'Visitors/GetTicket/', params)
    .then(data => {
      if (data && data.status === 1) {
        var timeStamp = data.result.timestamp + ''
        var jsTk = data.result.signature
        // var url = data.result.url
        var appId = data.result.appid
        var nStr = data.result.noncestr
        var wxConfig = {
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          timestamp: timeStamp, // 必填，生成签名的时间戳
          nonceStr: nStr, // 必填，生成签名的随机串
          appId: appId,
          signature: jsTk, // 必填，签名，见附录1 jsapitk
          jsApiList: ['hideMenuItems', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        }
        // console.log(wxConfig)
        wx.config(wxConfig)
        wx.error(function(res) {
          console.log('res')
        })
      }
    })
}
