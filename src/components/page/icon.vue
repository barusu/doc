<template>
  <div class="icon">
    <h2><span>Icon</span> <span class="chinese">图标</span></h2>
    <p>常用?的图标集合.</p>
    <p class="tip">还在增减中,还不建议使用.</p>
    <div class="preview clearfix">
      <div class="item">
        <xc-icon type="pic"></xc-icon>
        <span>pic</span>
      </div>
      <div class="item">
        <xc-icon type="del"></xc-icon>
        <span>del</span>
      </div>
      <div class="item">
        <xc-icon type="txt"></xc-icon>
        <span>txt</span>
      </div>
      <div class="item">
        <xc-icon type="ok"></xc-icon>
        <span>ok</span>
      </div>
      <div class="item">
        <xc-icon type="warn"></xc-icon>
        <span>warn</span>
      </div>
      <div class="item">
        <xc-icon type="error"></xc-icon>
        <span>error</span>
      </div>
      <div class="item">
        <xc-icon type="bar"></xc-icon>
        <span>bar</span>
      </div>
      <div class="item">
        <xc-icon type="plus"></xc-icon>
        <span>plus</span>
      </div>
      <div class="item">
        <xc-icon type="bilibili"></xc-icon>
        <span>bilibili</span>
      </div>
      <div class="item">
        <xc-icon type="github"></xc-icon>
        <span>github</span>
      </div>
      <div class="item">
        <xc-icon type="trash"></xc-icon>
        <span>trash</span>
      </div>
      <div class="item">
        <xc-icon type="copy"></xc-icon>
        <span>copy</span>
      </div>
      <div class="item">
        <xc-icon type="html" :colors="['#e54d14']"></xc-icon>
        <span>html</span>
      </div>
      <div class="item">
        <xc-icon type="sass"></xc-icon>
        <span>sass</span>
      </div>
      <div class="item">
        <xc-icon type="json"></xc-icon>
        <span>json</span>
      </div>
      <div class="item">
        <xc-icon type="vue"></xc-icon>
        <span>vue</span>
      </div>
      <br>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['pic', 'del', 'txt', 'ok', 'warn', 'error', 'bar', 'plus', 'bilibili', 'github', 'trash', 'copy', 'html', 'sass', 'json', 'vue', 'left', 'right'],
      doc: [
        {property: 'type', description: '指定使用内置图标的代号(优先级低)', type: 'String', default: ''},
        {property: 'colors', description: '图标颜色(高优先级属性,用于多色图标和修改图标默认颜色)', type: 'Array', default: '[]'},
        {property: 'path', description: '图标轨迹', type: 'Array', default: ''},
        {property: 'view', description: 'viewBox', type: 'String', default: '0 0 1024 1024'}
      ]
    };
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .icon {
    .preview {
      padding-bottom: .18rem;
      .item {
        float: left;
        width: 10%;
        min-width: 60px;
        padding: 10px;
        color: #666;
        text-align: center;
        svg {
          height: 36px;
        }
        span {
          display: block;
          line-height: 2;
        }
      }
    }
  }
</style>