<style lang="scss">
  .dreamweaver-page {
    .demo {
      position: relative;
      display: block;
      width: 100%;
      overflow: hidden;
    }
    .preview {
      padding: 0;
      font-size: 14px;
      code {
        height: 100%;
        padding: 1em;
      }
    }
  }
</style>

<template>
  <div class="dreamweaver-page">
    <h2><span>Dreamweaver</span> <span class="chinese">版面绘制</span></h2>
    <p>鼠标框选进行版面绘制</p>
    <h2><span>npm</span> <span class="chinese">安装</span></h2>
    <p>暂只支持 npm 的方式安装。</p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="npmInstallCode" line="4"></xc-code>
    </div>
    <p></p>
    <p>引入相关文件</p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="npmImportCode" line="5"></xc-code>
    </div>
    <h2><span>示例</span></h2>
    <Dreamweaver :components="componentList" :data="data"/>
     <!-- <div @click="getData" style="" ref="dreamweaver" >获取数据</div> -->
    <div class="preview clearfix">
      <!-- <xc-code lang="javascript" :code="code" line="60"></xc-code> -->
    </div>
 </div>
</template>

<script>
import Dreamweaver from 'jandar-dreamweaver'

export default {
  components: {
    Dreamweaver
  },
  data() {
    return {
      npmInstallCode: ` npm i jandar-dreamweaver -S`,
      npmImportCode: `// import dreamweaver相关文件
import Dreamweaver from 'jandar-dreamweaver'`,
      componentList: [
        {id: 1, parentId: null, name: "置顶信息", key: "zdxx"},
        {id: 5, parentId: null, name: "在线协作", key: "zxxz"},
        {id: 2, parentId: null, name: "消息中心", key: "xxzx"},
        {id: 3, parentId: 2, name: "横屏", key: "xxzxhp"},
        {id: 4, parentId: 2, name: "竖屏", key: "xxzxsp"},
        {id: 6, parentId: null, name: "通知公告", key: "tzgg"},
        {id: 7, parentId: null, name: "应用服务", key: "yyfw"}
      ],
      data: [
        {
          "name": "置顶信息",
          "key": "zdxx",
          "style": {"left": "0%", "top": "0px", "width": "60%", "height": "150px"},
          "fixed": {"startX": 1, "startY": 1, "endX": 12, "endY": 3}
        },
        {
          "name": "在线协作",
          "key": "zxxz",
          "style": {"left": "60%", "top": "0px", "width": "40%", "height": "150px"},
          "fixed": {"startX": 13, "startY": 1, "endX": 20, "endY": 3}
        }
      ]
    };
  },
  methods: {
    getData(){
      var data = this.$refs.dreamweaver.getData
      console.log(data);
    }
  },
  mounted() {
  }
};
</script>
