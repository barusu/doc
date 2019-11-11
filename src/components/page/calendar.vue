<style lang="scss">
  .calendar-page {
    .demo {
      position: relative;
      display: block;
      width: 400px;
      overflow: hidden;
    }
  }
</style>

<template>
  <div class="calendar-page">
    <h2><span>Calendar</span> <span class="chinese">日历</span></h2>
    <p>简易日历.</p>
    <p class="tip">项目需添加 moment.js 才可使用此组件.</p>
    <p>
      <span class="demo">
        <xc-calendar :sp="spDays" @select="select"></xc-calendar>
      </span>
    </p>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
    <h3><span>Events</span></h3>
    <xc-doc :list="eventsDoc" type="event"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spDays: ['2019-11-11'],
      doc: [
        {property: 'spDays', description: '日期字符串数组,标红点', type: 'Array', default: `[] (🌰: ['2019-11-11'])`}
      ],
      eventsDoc: [
        {eventName: 'change', description: '月份切换事件', callbackParamet: 'YYYY, M'},
        {eventName: 'select', description: '日期点击事件', callbackParamet: 'YYYY-MM-DD'}
      ]
    };
  },
  methods: {
    select(d) {
      this.$msg.info(d);
    }
  },
  mounted() {}
};
</script>
