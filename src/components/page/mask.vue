<style lang="scss">
  .font-mask {
    .demo {
      position: relative;
      display: block;
      width: 100%;
      padding-bottom: 50%;
      overflow: hidden;
      // background: url(../../../assets/demo0.jpg) no-repeat center / cover;
      &::after {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 2000%;
        height: 1000%;
        background-size: 25% 50%;
        background-image: radial-gradient(ellipse,#fc605d, #fc605d, #fdbc40, #34c849, #d08ce0, #51baf2);
        animation: slantMove 60s cubic-bezier(.5, .3, .5, .6) infinite;
        opacity: .3;
        z-index: -1;
      }
    }
  }
  @keyframes slantMove {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-5%, -50%, 0);}
    50% {transform: translate3d(-30%, -65%, 0);}
    75% {transform: translate3d(-55%, -35%, 0);}
    100% {transform: translate3d(-75%, -50%, 0);}
  }
</style>

<template>
  <div class="font-mask">
    <h2><span>Mask</span> <span class="chinese">蒙版</span></h2>
    <p>利用蒙版制作文字镂空效果.</p>
    <p>
      <span class="demo">
        <xc-mask text="Mask" color="#ffffff" :h="70" :scale="1.4" :opacity="[70, 20]"></xc-mask>
      </span>
    </p>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doc: [
        {property: 'text', description: '显示的文字', type: 'String', default: ''},
        {property: 'color', description: '蒙版层颜色,合法的颜色值都可以(未设置转换,传入的就是最终使用的颜色值)', type: 'Color', default: '#d3d3d3'},
        {property: 'h', description: '显示文字的区域高度上的占比(0-100)', type: 'Number', default: '70'},
        {property: 'fz', description: '不设置时根据当前实际显示区域自动调整字体大小,可以传值设定成固定字体大小(需附带单位)', type: 'String', default: 'auto'},
        {property: 'scale', description: '文字的缩放,只在未设置 fz 时生效,在自适应的字体大小上添加额外的缩放比例调整实际字体大小', type: 'Number', default: '1'},
        {property: 'opacity', description: '蒙版的透明度设置,可以单设中间部分蒙版的不透明度,分别为中间与上下的不透明度', type: 'Array / Number', default: '[80, 60]'}
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>
