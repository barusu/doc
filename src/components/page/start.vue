<template>
  <div class="components-index">
    <h2><span>介绍</span></h2>
    <p>此文档讲述如何在各项目中使用公司自研的前端组件，组件包含自研组件以及开源二次开发后的组件</p>
    <p class="tip">这里不累赘讲述如何安装nodejs、npm安装，请自行百度</p>
    <h2><span>nrm 安装</span></h2>
    <p class="tip">此文档内组件仅上传至公司npm私服，需切换本地npm镜像地址</p>
    <p>强烈推荐使用nrm来管理自己的npm代理，nrm可以快速修改,切换,增加npm镜像地址</p>
    <p>公司私服地址：http://172.16.137.53:4873</p>
    <div class="preview clearfix">
      <xc-code lang="shell" :code="nrmInstall" line="6"></xc-code>
    </div>
    <h5>nrm其他命令</h5>
    <div class="preview clearfix">
      <xc-code lang="shell" :code="nrmOther" line="6"></xc-code>
    </div>
    <br>
    <p>切换nrm镜像地址后，npm install 将优先从公司私服上进行下载npm包</p>
    <br>
    <h2><span>CDN</span></h2>
    <p>CDN方式需访问<a style="color:blue" href="http://172.16.137.53:4873" target="_black">私服地址</a>搜索对应组件进行Download tarball.</p>
    <h5>提示</h5>
    <p>组件使用方式及API请跳转至组件页查阅，组件版本更新内容请跳转至组件npm私服地址查阅。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nrmInstall: `npm install -g nrm # 安装nrm
nrm add jandar http://172.16.137.53:4873 # 添加公司npm私有仓库地址
nrm use jandar
`,
      nrmOther: `nrm --help  # 查看nrm命令帮助
nrm list # 列出可用的 npm 镜像地址
nrm use taobao # 使用淘宝npm镜像地址
`
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