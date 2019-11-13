<template>
  <div class="message-view">
    <h2><span>Message</span> <span class="chinese">消息提示</span></h2>
    <p>常用于主动操作后的反馈提示.</p>
    <p class="tip">由于使用的 v-html 来显示消息内容,只可用于可控内容的显示.</p>
    <div class="preview clearfix">
      <h3>基本用法.</h3>
      <p>顶部出现,固定位置,默认3秒后消失.</p>
      <div class="clearfix">
        <xc-button type="info" @click="msg('默认的消息提示')">基础类型的消息提示</xc-button>
        <xc-button type="error" @click="msg('<span style=&quot;color: #fc605d&quot;>自定义消息</span>')">自定义消息样式</xc-button>
      </div>
      <br>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_button1" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head vue"><xc-icon type="vue"></xc-icon>  <label class="code-control" for="code_button1">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="html1" line="18"></xc-code>
        </div>
      </div>
    </div>
    <br>
    <div class="preview clearfix">
      <h3>状态消息.</h3>
      <p>一些常用状态的简写调用.</p>
      <div class="clearfix">
        <xc-button type="info" @click="open1('消息')">消息</xc-button>
        <xc-button type="success" @click="open2('成功')">成功</xc-button>
        <xc-button type="warning" @click="open3('警告')">警告</xc-button>
        <xc-button type="error" @click="open4('错误')">错误</xc-button>
      </div>
      <br>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_button2" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head vue"><xc-icon type="vue"></xc-icon>  <label class="code-control" for="code_button2">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="html2" line="32"></xc-code>
        </div>
      </div>
    </div>
    <h3><span>Options</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html1: `<template>
  <xc-button type="info" @click="msg('默认的消息提示')">基础类型的消息提示</xc-button>
  <xc-button type="error" @click="msg('<span style=&quot;color: #fc605d&quot;>自定义消息</span>')">自定义消息样式</xc-button>
</template>

<script>
export default {
  methods: {
    msg(msg) {
      this.$msg(msg);
    }
  }
};
<\/script>`,
      html2: `<template>
  <xc-button type="info" @click="open1('消息')">消息</xc-button>
  <xc-button type="success" @click="open2('成功')">成功</xc-button>
  <xc-button type="warning" @click="open3('警告')">警告</xc-button>
  <xc-button type="error" @click="open4('错误')">错误</xc-button>
</template>

<script>
export default {
  methods: {
    open1(msg) {
      this.$msg.info(msg);
    },
    open2(msg) {
      this.$msg.success(msg);
    },
    open3(msg) {
      this.$msg.warning(msg);
    },
    open4(msg) {
      this.$msg.error(msg);
    }
  }
};
<\/script>`,
      doc: [
        {property: 'message', description: '消息文字', type: 'String', default: ''},
        {property: 'closed', description: '关闭后的回调函数', type: 'Function', default: ''},
        {property: 'duration', description: '显示时间(毫秒),0则不自动关闭', type: 'Number', default: '3000'}
      ]
    };
  },
  methods: {
    msg(msg) {
      this.$msg(msg);
    },
    open1(msg) {
      this.$msg.info(msg);
    },
    open2(msg) {
      this.$msg.success(msg);
    },
    open3(msg) {
      this.$msg.warning(msg);
    },
    open4(msg) {
      this.$msg.error(msg);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
  .message-view {
    padding: 20px;
    .preview {
      font-size: 12px;
    }
  }
</style>
