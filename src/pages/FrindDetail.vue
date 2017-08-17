<template title="亲友详细页面">
  <div class="myFriends">
    <div class="list-box">
      <div class="item">
        <div class="item-left">
          <i class="icon userphoto"><img src="~@/assets/userphoto.png" width="100%"/></i>
          <div class="list-info">
            <h4 class="info-title">许可梁</h4>
            <p class="info-label">更新于：07月10日 13:49</p>
          </div>
        </div>
        <div class="item-right">
          <div class="dropdown-wrap">
            <div class="btn-change"><i class="icon icon_change"></i>切换亲友</div>
            <!--<div class="dropdown-list">
              <mt-cell title="许可梁" class="selected"><i class="icon icon_check"></i></mt-cell>
              <mt-cell title="许可梁" class=""></mt-cell>
            </div>-->
          </div>
  
        </div>
      </div>
    </div>
    <h4 class="page-part-title">最近一次健康数据</h4>
    <div class="list-box">
      <div class="item">
        <div class="item-left">
          <i class="icon icon_pwv"></i>
          <div class="list-info">
            <h4 class="info-title">PWV值</h4>
            <p class="info-label">07月10日 13:49</p>
          </div>
        </div>
        <div class="item-right is-link">
          <span><b>8.62</b>米/秒</span>
        </div>
        <i class="mint-cell-allow-right"></i>
      </div>
      <div class="item">
        <div class="item-left">
          <i class="icon icon_bloodpressure"></i>
          <div class="list-info">
            <h4 class="info-title">血压值</h4>
            <p class="info-label">07月10日 13:49</p>
          </div>
        </div>
        <div class="item-right is-link">
          <span><b>129/75</b>毫米汞柱</span>
        </div>
        <i class="mint-cell-allow-right"></i>
      </div>
      <div class="item">
        <div class="item-left">
          <i class="icon icon_heartrate"></i>
          <div class="list-info">
            <h4 class="info-title">心率指数</h4>
            <p class="info-label">07月10日 13:49</p>
          </div>
        </div>
        <div class="item-right is-link">
          <span><b>78</b>次/分</span>
        </div>
        <i class="mint-cell-allow-right"></i>
      </div>
      <div class="item">
        <div class="item-left">
          <i class="icon icon_sport"></i>
          <div class="list-info">
            <h4 class="info-title">运动步数</h4>
            <p class="info-label">07月10日 13:49</p>
          </div>
        </div>
        <div class="item-right is-link">
          <span><b>12988</b>步</span>
        </div>
        <i class="mint-cell-allow-right"></i>
      </div>
      <div class="item">
        <div class="item-left">
          <i class="icon icon_sleep"></i>
          <div class="list-info">
            <h4 class="info-title">睡眠情况</h4>
            <p class="info-label">07月10日 13:49</p>
          </div>
        </div>
        <div class="item-right is-link">
          <span><b>10</b>小时<b>18</b>分</span>
        </div>
        <i class="mint-cell-allow-right"></i>
      </div>
    </div>
    <div class="footer-btnWrap">
      <mt-button type="primary" size="large">设为紧急联系人</mt-button>
      <mt-button type="default" size="large">取消关注</mt-button>
    </div>
  </div>
</template>