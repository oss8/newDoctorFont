<template title="历史数据">
  <div class="HistoryData btn-p-b">
    <div class="state-info">
      <div class="info-box">
        <i class="icon icon_report"></i>
        <h4>健康日报</h4>
        <p>更新于：13:49:46</p>
        <h2>今日健康测量未完成</h2>
        <p>坚持健康测试，建立精准的健康档案</p>
        <div class="info-other">
          <div class="step-box">
            <span>0/5</span>
            <p>数据完成度</p>
          </div>
        </div>
        
      </div>
      <div class="btn-more"><button class="btn-noline disable">查看健康报告</button></div>
    </div>
    <!--无测量数据
          <div class="no-data fn-center" style="height:400px;padding-bottom:0px;">
            <div>
              <i class="icon icon_empty"></i>
              <p>当前暂无数据，马上测一下吧！</p>
            </div>
          </div>
          <div class="footer-btnWrap">
            <mt-button type="default" size="large">查看其他亲友</mt-button>
          </div>
          -->
  
    <!--数据列表-->
    <div class="data-list">
      <h4 class="page-part-title">健康数据<span>最近7日</span></h4>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_pwv"></i>
            <div class="list-info">
              <h4 class="info-title">PWV值</h4>
              <p class="info-label">日平均值：8.60</p>
            </div>
          </div>
          <div class="item-right">
            <div class="newest-number pwv">
              <span>无数据</span>
              <p>测量时间</p>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
      </div>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_bloodpressure"></i>
            <div class="list-info">
              <h4 class="info-title">血压值</h4>
              <p class="info-label">日平均值：8.60</p>
            </div>
          </div>
          <div class="item-right">
            <div class="newest-number bloodpressure">
              <span>无数据</span>
              <p>测量时间</p>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
      </div>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_heartrate"></i>
            <div class="list-info">
              <h4 class="info-title">心率指数</h4>
              <p class="info-label">日平均值：80</p>
            </div>
          </div>
          <div class="item-right">
            <div class="newest-number heartrate">
              <span>无数据</span>
              <p>测量时间</p>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
      </div>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_sport"></i>
            <div class="list-info">
              <h4 class="info-title">运动步数</h4>
              <p class="info-label">日平均值：1000</p>
            </div>
          </div>
          <div class="item-right">
            <div class="newest-number sport">
              <span>1490<b>步</b></span>
              <p>今天 13:49</p>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
      </div>
      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_sleep"></i>
            <div class="list-info">
              <h4 class="info-title">睡眠情况</h4>
              <p class="info-label">日平均值：9小时20分</p>
            </div>
          </div>
          <div class="item-right">
            <div class="newest-number sleep">
              <span>10<b>小时</b>18<b>分</b></span>
              <p>8/9 06:59</p>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
      </div>

    </div>
    <div class="join-p">
      <mt-button type="default" size="large">查看其他亲友</mt-button>
    </div>
    
  </div>
</template>