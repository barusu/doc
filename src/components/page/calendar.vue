<style lang="scss">
  .calendar-page {
    .demo {
      position: relative;
      display: block;
      width: 400px;
      overflow: hidden;
    }
    .preview {
      padding: 0;
      font-size: 12px;
      code {
        height: 100%;
        padding: 1em;
      }
    }
  }
</style>

<template>
  <div class="calendar-page">
    <h2><span>Calendar</span> <span class="chinese">日历</span></h2>
    <p>简易日历.</p>
    <p>添加slot插槽,可用于添加标题等. (可能重叠,样式根据项目自行添加覆盖)</p>
    <p class="tip">项目需添加 moment.js 才可使用此组件. NPM等形式引入需挂载到全局变量 moment 中.</p>
    <p>
      <span class="demo">
        <xc-calendar :sp="spDays" @select="select" align="center"><xc-icon type="github" style="height: 24px; vertical-align: text-top;"></xc-icon> 工作安排</xc-calendar>
      </span>
    </p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="code" line="26"></xc-code>
    </div>
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
        {property: 'spDays', description: '日期字符串数组,标红点', type: 'Array', default: `[]<br>🌰['2019-11-11']`},
        {property: 'align', description: '顶部年月对齐方式 [left, center]', type: 'String', default: `left`}
      ],
      eventsDoc: [
        {eventName: 'change', description: '月份切换事件', callbackParamet: 'YYYY, M'},
        {eventName: 'select', description: '日期点击事件', callbackParamet: 'YYYY-MM-DD'}
      ],
      code: `<template>
  <xc-calendar :sp="spDays" @select="select" align="center">
    <xc-icon type="github" style="height: 24px; vertical-align: text-top;"></xc-icon> 工作安排
  </xc-calendar>
</template>

<script>
  export default {
    data() {
      return {
        spDays: ['2019-11-11']
      };
    },
    methods: {
      select(d) {
        this.$msg.info(d);
      }
    }
  };
<\/script>`
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
