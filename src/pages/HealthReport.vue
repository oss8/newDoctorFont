<template title="健康报告">
  <div class="HealthReport">
    <div class="state-info">
      <div class="info-box">
        <i class="icon icon_report"></i>
        <h4>健康周报</h4>
        <p>更新于：13:49:46</p>
        <h2>健康评分：良好</h2>
        <p>评估时间：07月03日 - 07月09日</p>
        <div class="info-other">
          <i class="icon icon_smile"></i>
          <i class="icon icon_sad"></i>
        </div>
      </div>
      <div class="btn-more"><button class="btn-noline">查看今日健康数据</button></div>
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

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_analysis"></i>
            <div class="list-info">
              <h4 class="info-title">本周分析</h4>
            </div>
          </div>
        </div>
        <p class="report-text">本周，您家人的心血管健康状况有所好转，发生高血压、冠心病、动脉粥样硬化等心血管疾病的风险有所下降。 心-桡脉搏波速度（cardio radial pulse wave velocity）指的是脉搏波仔心脏到桡动脉之间的传播速度，可以精确地反映这一段动脉的硬化情况。它的升高，与高血压、冠心病、心肌梗死、中风等心血管疾病的风险呈强相关性。</p>
      </div>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_pwv"></i>
            <div class="list-info">
              <h4 class="info-title">PWV变化趋势<span>单位: 米/秒</span></h4>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
        <p class="report-text">本周，您的家人共完成0次动脉硬化检测，其中出现PWV最高值为0.00m/s，最低值为0.00m/s。</p>
      </div>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_bloodpressure"></i>
            <div class="list-info">
              <h4 class="info-title">血压波动数据统计<span>单位: 毫米汞柱</span></h4>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
        <p class="report-text">本周血压出现过0次的轻微波动。本周变化趋势不变。 长期的血压波动频率可能引发脑卒中、冠心病等严重并发症，建议每天两次测量，持续监测心血管健康。</p>
      </div>

      <div class="chart-box">
        <div class="item chart-title">
          <div class="item-left">
            <i class="icon icon_heartrate"></i>
            <div class="list-info">
              <h4 class="info-title">心率统计<span>单位: 次/分</span></h4>
            </div>
          </div>
        </div>
        <div class="chart-main">
          图表
        </div>
        <p class="report-text">本周您的家人共完成0次心率测量，其中心率最高值为0次／分钟，最低值为0次／分钟。</p>
      </div>


    </div>
    
  </div>
</template>