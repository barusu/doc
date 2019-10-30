<template>
  <div class="button">
    <h2><span>Button</span> <span class="chinese">按钮</span></h2>
    <p>基础的操作按钮,只监听了点击事件,其它事件需使用.native来监听或自行添加.</p>
    <p class="tip">动画与disabled的样式需浏览器对 <a class="keyword" href="https://caniuse.com/#search=filter" target="blank">filter</a> 的支持.</p>
    <div class="preview clearfix">
      <p>外观类型.</p>
      <div class="clearfix">
        <xc-button>Default</xc-button>
        <xc-button type="dashed">Dashed</xc-button>
        <xc-button type="dotted">Dotted</xc-button>
        <xc-button type="primary">Primary</xc-button>
        <xc-button type="info">Info</xc-button>
        <xc-button type="warning">Warning</xc-button>
        <xc-button type="error">Error</xc-button>
        <xc-button type="success">Success</xc-button>
      </div>
      <p>禁用状态.</p>
      <div class="clearfix">
        <xc-button :disabled="true">Default</xc-button>
        <xc-button :disabled="true" type="dashed">Dashed</xc-button>
        <xc-button :disabled="true" type="dotted">Dotted</xc-button>
        <xc-button :disabled="true" type="primary">Primary</xc-button>
        <xc-button :disabled="true" type="info">Info</xc-button>
        <xc-button :disabled="true" type="warning">Warning</xc-button>
        <xc-button :disabled="true" type="error">Error</xc-button>
        <xc-button :disabled="true" type="success">Success</xc-button>
      </div>
      <br>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_button1" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head"><xc-icon type="vue"></xc-icon>  <label class="code-control" for="code_button1">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="html1" line="28"></xc-code>
        </div>
      </div>
    </div>
    <br>
    <div class="preview clearfix">
      <p>最小宽度和大小.</p>
      <div class="clearfix">
        <xc-button type="info" width="4em">4em</xc-button>
        <xc-button type="info" width="4em">4em (文字过长不会换行)</xc-button>
        <xc-button type="info" width="100px">100px</xc-button>
        <xc-button type="success" size="12px">font-size: 12px</xc-button>
        <xc-button type="success" size="16px">font-size: 16px</xc-button>
        <xc-button type="success" size="20px">font-size: 20px</xc-button>
      </div>
      <p>边框形状.</p>
      <div class="clearfix">
        <xc-button type="info">default</xc-button>
        <xc-button shape="rectangle" type="info">Rectangle</xc-button>
        <xc-button shape="circle"><xc-icon type="github"></xc-icon></xc-button>
      </div>
      <br>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_button2" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head vue"><xc-icon type="vue"></xc-icon>  <label class="code-control" for="code_button2">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="html2" line="20"></xc-code>
        </div>
      </div>
    </div>
    <br>
    <div class="preview clearfix">
      <p>点击动画.</p>
      <div class="clearfix">
        <xc-button effect="spread" type="dashed" @click="message('click')">Spread</xc-button>
        <xc-button effect="spread" type="info" @click="message('click')">Spread</xc-button>
        <xc-button effect="spread" type="error" @click="message('click')">Spread</xc-button>
      </div>
      <p>loading状态.</p>
      <div class="clearfix">
        <xc-button effect="spread" :loading="true" @click="message('click')">loading状态下</xc-button>
        <xc-button effect="spread" type="info" :loading="true" @click="message('click')">不会触发</xc-button>
        <xc-button effect="spread" type="warning" :loading="false" @click="message('click')">click事件</xc-button>
      </div>
      <br>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_button3" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head vue"><xc-icon type="vue"></xc-icon>  <label class="code-control" for="code_button3">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="html3" line="17"></xc-code>
        </div>
      </div>
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
      baseDisabled: false,
      loading: false,
      doc: [
        {property: 'type', description: '情景色: primary/info/success/warning/error; 边框类型: dashed/dotted 多个时优先级递增', type: 'String', default: ''},
        {property: 'disabled', description: '是否禁用,禁用后会变成黑白模式同时鼠标hover时会有禁用样式, 屏蔽事件', type: 'Boolean', default: 'false'},
        {property: 'width', description: '设定按钮最小宽度,支持auto/inherit以及px、em、rem等单位的数值', type: 'Length', default: 'auto'},
        {property: 'size', description: '设定按钮文字字号,支持inherit、px、em、rem等单位的数值', type: 'Length', default: 'inherit'},
        {property: 'effect', description: '附加动画效果, spread: 波纹扩散', type: 'String', default: ''},
        {property: 'shape', description: '形状,可能的值: circle/rectangle, circle需要与icon搭配使用来制作图标按钮', type: 'String', default: ''},
        // {property: 'icon', description: '附加图标, 值为xc-icon支持的所有值, 默认位置在左边如需在特定位置添加请直接在文字中使用xc-icon添加', type: 'String', default: ''},
        {property: 'for', description: '外壳使用的label能直接继承for属性', type: 'String', default: ''},
        {property: 'loading', description: '加载状态, 添加loading icon 如已有icon属性生成的图标会替换掉原有图标, 同disabled一样会屏蔽事件', type: 'Boolean', default: 'false'}
      ],
      eventsDoc: [
        {eventName: 'click', description: '点击事件的回调', callbackParamet: ''}
      ],
      html1: `<p>外观类型.</p>
<div class="clearfix">
  <xc-button>Default</xc-button>
  <xc-button type="dashed">Dashed</xc-button>
  <xc-button type="dotted">Dotted</xc-button>
  <xc-button type="primary">Primary</xc-button>
  <xc-button type="info">Info</xc-button>
  <xc-button type="warning">Warning</xc-button>
  <xc-button type="error">Error</xc-button>
  <xc-button type="success">Success</xc-button>
</div>
<p>禁用状态.</p>
<div class="clearfix">
  <xc-button :disabled="true">Default</xc-button>
  <xc-button :disabled="true" type="dashed">Dashed</xc-button>
  <xc-button :disabled="true" type="dotted">Dotted</xc-button>
  <xc-button :disabled="true" type="primary">Primary</xc-button>
  <xc-button :disabled="true" type="info">Info</xc-button>
  <xc-button :disabled="true" type="warning">Warning</xc-button>
  <xc-button :disabled="true" type="error">Error</xc-button>
  <xc-button :disabled="true" type="success">Success</xc-button>
</div>`,
      html2: `<p>最小宽度和大小.</p>
<div class="clearfix">
  <xc-button type="info" width="4em">4em</xc-button>
  <xc-button type="info" width="4em">4em (文字过长不会换行)</xc-button>
  <xc-button type="info" width="100px">100px</xc-button>
  <xc-button type="success" size="12px">font-size: 12px</xc-button>
  <xc-button type="success" size="16px">font-size: 16px</xc-button>
  <xc-button type="success" size="20px">font-size: 20px</xc-button>
</div>
<p>边框形状.</p>
<div class="clearfix">
  <xc-button type="info">default</xc-button>
  <xc-button shape="rectangle" type="info">Rectangle</xc-button>
  <xc-button shape="circle"><xc-icon type="github"></xc-icon></xc-button>
</div>`,
      html3: `<p>点击动画.</p>
<div class="clearfix">
  <xc-button effect="spread" type="dashed" @click="message('click')">Spread</xc-button>
  <xc-button effect="spread" type="info" @click="message('click')">Spread</xc-button>
  <xc-button effect="spread" type="error" @click="message('click')">Spread</xc-button>
</div>
<p>loading状态.</p>
<div class="clearfix">
  <xc-button effect="spread" :loading="true" @click="message('click')">loading状态下</xc-button>
  <xc-button effect="spread" type="info" :loading="true" @click="message('click')">不会触发</xc-button>
  <xc-button effect="spread" type="warning" :loading="false" @click="message('click')">click事件</xc-button>
</div>`
    };
  },
  methods: {
    message(msg) {
      this.$msg(msg);
    }
  }
}
</script>

<style lang="scss">
  .button {
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