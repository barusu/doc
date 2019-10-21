<template>
  <div class="icon">
    <h2><span>Icon</span> <span class="chinese">图标</span></h2>
    <p>常用?的图标集合.</p>
    <div class="preview clearfix">
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseDisabled: false,
      loading: false,
      doc: [
        {property: 'type', description: '情景色: primary/info/success/warning/error; 边框类型: dashed/dotted 多个时优先级递增', type: 'String', default: ''},
        {property: 'disabled', description: '是否禁用,禁用后会变成黑白模式同时鼠标hover时会有禁用样式, 屏蔽事件', type: 'Boolean', default: 'false'},
        {property: 'width', description: '设定按钮最小宽度,支持auto/inherit以及px、em、%等单位的数值', type: 'Length', default: 'auto'},
        {property: 'effect', description: '附加动画效果, spread: 波纹扩散', type: 'String', default: ''},
        {property: 'shape', description: '形状,可能的值: circle/rectangle, circle需要与icon搭配使用来制作图标按钮', type: 'String', default: ''},
        {property: 'icon', description: '附加图标, 值为xc-icon支持的所有值, 默认位置在左边如需在特定位置添加请直接在文字中使用xc-icon添加', type: 'String', default: ''},
        {property: 'for', description: '外壳使用的label能直接继承for属性', type: 'String', default: ''},
        {property: 'loading', description: '加载状态, 添加loading icon 如已有icon属性生成的图标会替换掉原有图标, 同disabled一样会屏蔽事件', type: 'Boolean', default: 'false'}
      ]
    };
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .icon {
    .item {
      float: left;
      margin: 0 .05rem .1rem;
      font-size: .14rem;
      line-height: 2.5;
      border-radius: 4px;
      color: #fff;
    }
    .tip {
      margin: 0 5px 0;
    }
  }
</style>