<template title="病史选择">
  <div class="SickHistory" >
    <h4 class="page-part-title">慢性病史</h4>
    <mt-checklist v-model="value" :options="options">
    </mt-checklist> 
    <p class="page-note">您过去是否检查出以上慢性病，准确的情况输入会对您的风险评估更加准确。</p>
    <div class="footer-btnWrap">
        <mt-button type="primary" size="large">确定</mt-button>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'page-checklist',
    data() {
      return {
        value: [],
  
      };
    },
    created() {
      this.options = ['高血压', '冠心病', '心率不齐','糖尿病', '高血脂', '动脉硬化'];
    }
  };
</script>