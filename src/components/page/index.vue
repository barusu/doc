<template>
  <div class="components-index">
    <h2><span>npm 安装</span> <span class="chinese" v-text="ver"></span></h2>
    <p>为了避免臃肿所有第三方插件都需自行安装.(部分组件需要添加特定插件才可使用)</p>
    <p class="tip">暂无法单独安装某个组件.借助babel-plugin-component应该可以,还未测试.</p>
    <h5>完整引入</h5>
    <div class="preview clearfix">
      <xc-code lang="shell" :code="npm" line="3"></xc-code>
    </div>
    <br>
    <p>在 main.js 中写入以下内容.</p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="js" line="15"></xc-code>
    </div>
    <br>
    <h5>按需引入</h5>
    <p>想要单独引用某个组件的可以尝试参考 https://element.eleme.cn/#/zh-CN/component/quickstart 的按需引用部分来操作.<br>组件名称为此页面上左侧导航中的英文.(区分大小写)</p>
    <h5>版本</h5>
    <p>由于发布模式与开发模式有些不同,发布的版本中有些甚至会无法运行,本业顶部有当前版本号,没在这个页面出现过的版本都是测试不通过的版本.</p>
    <p class="tip">实际版本经常会高于本页面的,不推荐直接更新到最新版本.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ver: this.$root.version,
      npm: 'npm install shiroui -save',
      js: `import Vue from 'vue';
import ShiroUI from 'shiroui';
import 'shiroui/dist/index.css';
import App from './App.vue';

Vue.use(ShiroUI);

new Vue({
  el: '#app',
  render: h => h(App)
});`
    };
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .components-index {
    .preview {
      padding: 0;
      font-size: 12px;
      code {
        height: 100%;
        padding: 1em 1em 0;
      }
    }
  }
</style>