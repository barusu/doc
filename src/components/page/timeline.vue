<style lang="scss">
  .timeline-page {
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
  <div class="timeline-page">
    <h2><span>Timeline</span> <span class="chinese">时间轴</span></h2>
    <p>可滑动，伸缩时间轴</p>
    <h2><span>npm</span> <span class="chinese">安装</span></h2>
    <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="npmInstallCode" line="4"></xc-code>
    </div>
    <p></p>
    <p>引入相关文件</p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="npmImportCode" line="6"></xc-code>
    </div>
    <h2><span>CDN</span> <span class="chinese"></span></h2>
    <p>可以通过 <a style="color:blue" href="http://172.16.137.53:4873/-/web/detail/jandar-timelinejs3" target="_black">Download tarball</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
     <p class="tip">值得注意的是，cdn方式引入的为timeline.cdn.js</p>
    <div class="preview clearfix">
      <xc-code lang="javascript" :code="cdnImportCode" line="8"></xc-code>
    </div>
    <h2><span>示例</span></h2>
    <div id="timeline-embed" style="width:100%;height:505px;" />
    <div class="preview clearfix" style="margin-top:10px;">
      <xc-code lang="javascript" :code="code" line="60"></xc-code>
    </div>
    <h2><span>示例（不显示幻灯片）</span></h2>
    <div id="timeline-embed2" style="width:100%;height:220px;" />
    <div class="preview clearfix" style="margin-top:10px;">
      <xc-code lang="javascript" :code="code2" line="26"></xc-code>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
    <h3><span>Events</span></h3>
    <xc-doc :list="eventsDoc" type="event"></xc-doc>
    <h3><span>Methods</span></h3>
    <xc-doc :list="methodsDoc" type="method"></xc-doc>
    <h2><span>数据格式</span></h2>
    <div class="data-view">
      <div class="code-wrapper clearfix">
          <p class="code-head json"><xc-icon type="json"></xc-icon> Data <label class="code-control" for="code_transfer_data1">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="json" :code="data" line="54"></xc-code>
      </div>
  </div>
 </div>
</template>

<script>
import 'jandar-timelinejs3/css/timeline.css'
import {TL} from 'jandar-timelinejs3'

export default {
  data() {
    return {
      npmInstallCode: ` npm i jandar-timelinejs3 -S`,
      timelineOptions: {
        timenav_height: 220,
        zoom_sequence: [0.5, 1],
        scale_factor: 0.5,
        start_at_slide: 2
      },
      timelineOptions2: {
        timenav_height: 220,
        zoom_sequence: [0.5, 1],
        scale_factor: 1,
        start_at_slide: 2,
        is_slide_open: false,
        timeaxis_tick_show: false
      },
      timeline: {
        'events': [
          {
            'text': {
              'headline': '标题',
              'text': '具体内容'
            },
            'start_date': {
              'month': '1',
              'day': '3',
              'year': '2020'
            }
          },
          {
            'text': {
              'headline': '标题2',
              'text': '具体内容2'
            },
            'start_date': {
              'month': '1',
              'day': '10',
              'year': '2020'
            }
          },
          {
            'text': {
              'headline': '标题3',
              'text': '具体内容3'
            },
            'start_date': {
              'month': '1',
              'day': '11',
              'year': '2020'
            }
          },
          {
            'text': {
              'headline': '标题4',
              'text': '具体内容4'
            },
            'start_date': {
              'month': '1',
              'day': '18',
              'year': '2020'
            }
          },
          {
            'text': {
              'headline': '标题5',
              'text': '具体内容5'
            },
            'start_date': {
              'month': '2',
              'day': '1',
              'year': '2020'
            }
          }
        ]
      },
      npmImportCode: `// import timeline相关文件
import 'jandar-timelinejs3/css/timeline.css'
import {TL} from 'jandar-timelinejs3'`,
      cdnImportCode: `// 引入样式
<link rel="stylesheet" href="jandar-timelinejs3/css/timeline.css">
<!-- 引入组件 -->
<script src="jandar-timelinejs3/timeline.cdn.js"><\/script>`,
      doc: [
        {property: 'debug', description: '如果为true，将启用大量控制台日志记录', type: 'Boolean', default: `false`},
        {property: 'height', description: '时间轴的高度', type: 'String', default: `this._el.container.offsetHeight`},
        {property: 'width', description: '时间轴的宽度', type: 'String', default: `this._el.container.offsetWidth`},
        {property: 'hash_bookmark', description: '如果设置为true，则每当幻灯片前进时，TimelineJS都会更新浏览器URL，以便人们可以直接链接到特定的幻灯片', type: 'Boolean', default: `false`},
        {property: 'default_bg_color', description: '用于幻灯片背景的RGB值。指定为十六进制代码，CSS命名的颜色，或用rgb的0-255', type: 'String', default: `white`},
        {property: 'scale_factor', description: '默认时间轴缩放级别。', type: 'Integer', default: `2`},
        {property: 'zoom_sequence', description: 'TimeNav缩放级别的值数组。每个值都是一个scale_factor，这意味着在任何给定级别，完整的时间轴都需要很多屏幕来显示所有事件。', type: 'Array', default: `[0.5、1、2、3、5、8、13、21、34、55、89]`},
        {property: 'timenav_position', description: '在top或bottom显示时间轴导航', type: 'String', default: `bottom`},
        {property: 'timenav_height', description: '时间轴导航的高度（以像素为单位）。优先于 timenav_height_percentage', type: 'Integer', default: `150`},
        {property: 'timenav_height_percentage', description: '将时间轴导航高度指定为屏幕的百分比，而不是像素', type: 'Integer', default: `25`},
        {property: 'marker_padding', description: '标记的顶部和底部填充（以像素为单位）', type: 'Integer', default: `5`},
        {property: 'start_at_slide', description: '加载时间轴时显示的第1张幻灯片', type: 'Integer', default: `0`},
        {property: 'start_at_end', description: '如果为true，则在最后一张幻灯片上加载时间轴', type: 'Boolean', default: `false`},
        {property: 'duration', description: '动画持续时间（以毫秒为单位）', type: 'Integer', default: `1000`},
        {property: 'slide_padding_lr', description: '每张幻灯片左右两侧的填充（以像素为单位）', type: 'Integer', default: `100`},
        {property: 'language', description: '时间轴语言,默认中文', type: 'String', default: `zh`},
        {property: 'is_slide_open', description: '是否显示幻灯片', type: 'Boolean', default: `true`},
        {property: 'timeaxis_tick_show', description: '如果为true，则显示所有时间点，否则仅显示数据时间点', type: 'Boolean', default: `true`}
      ],
      eventsDoc: [
        {eventName: 'back_to_start', description: '当用户单击控件以返回到时间线的开头时', callbackParamet: ''},
        {eventName: 'change', description: '当前幻灯片更改时', callbackParamet: 'unique_id：字符串，新的当前幻灯片的id'},
        {eventName: 'color_change', description: '当前幻灯片的背景改变时', callbackParamet: 'unique_id：字符串，新的当前幻灯片的id'},
        {eventName: 'dataloaded', description: '数据加载后', callbackParamet: ''},
        {eventName: 'hash_updated', description: '网址栏中的hashbookmack更新时', callbackParamet: 'unique_id：字符串，新的当前幻灯片的id<br>hashbookmark：字符串，哈希'},
        {eventName: 'loaded', description: '加载故事滑块和时间导航器之后', callbackParamet: 'scale: 日期刻度类型<br>eras: array<br>events: array<br>title:标题幻灯片数据（如果存在标题幻灯片） <br>'},
        {eventName: 'zoom_in ', description: '当用户放大时间导航器时', callbackParamet: 'zoom_level：整数，当前缩放级别'},
        {eventName: 'zoom_out ', description: '当用户缩小时间导航器时', callbackParamet: 'zoom_level：整数，当前缩放级别'},
        {eventName: 'added ', description: '添加幻灯片后', callbackParamet: ''},
        {eventName: 'removed ', description: '删除幻灯片后', callbackParamet: 'unique_id：字符串，修改后的幻灯片的ID'},
        {eventName: 'nav_next', description: '单击下一个按钮时触发', callbackParamet: ''},
        {eventName: 'nav_previous', description: '单击下一个按钮时触发', callbackParamet: ''}
      ],
      methodsDoc: [
        {methodName: 'goTo(<int slide_index>)', description: '滑动至索引处'},
        {methodName: 'goToId(<string id>)', description: '滑动至ID处'},
        {methodName: 'goToNext()', description: '转到下一张幻灯片'},
        {methodName: 'goToPrev()', description: '转到上一张幻灯片'},
        {methodName: 'goToStart()', description: '转到第一张幻灯片'},
        {methodName: 'goToEnd()', description: '转到最后一张幻灯片'},
        {methodName: 'remove(<int event_index>)', description: '通过索引删除'},
        {methodName: 'removeId(<string id>)', description: '通过ID删除'},
        {methodName: 'add(<object data>)', description: '向事件添加数据（请参见数据格式）'},
        {methodName: 'getData(<int slide_index>)', description: '按索引获取幻灯片的数据'},
        {methodName: 'getDataById(<string id>)', description: '按ID获取幻灯片的数据'},
        {methodName: 'getSlide(<int slide_index>)', description: '通过索引获取TL.Slide对象'},
        {methodName: 'getSlideById(<string id>)', description: '通过id获取TL.Slide对象'}
      ],
      code: ` 
      <!-- 1、参考上方npm 安装或cdn方式 引入timeline文件-->

      <!-- 2、添加div 定义ID， 宽高-->
      <div id='timeline-embed' style="width: 100%; height: 600px"></div>
      
      <!-- 3、-->
      <script type="text/javascript">
      var attributesOptions = {
          timenav_height: 220,
          zoom_sequence: [0.5, 1],
          scale_factor: 0.5,
          start_at_slide: 2
      }
      // 创建Timeline对象
      var timeline = new TL.Timeline('timeline-embed',{
        'events': [
          {
            'text': {'headline': '标题','text': '具体内容'},
            'start_date': {'month': '1','day': '3','year': '2020'}
          },
          {
            'text': {'headline': '标题2','text': '具体内容2'},
            'start_date': {'month': '1','day': '10','year': '2020'}
          },
          {
            'text': {'headline': '标题3','text': '具体内容3'},
            'start_date': {'month': '1','day': '11','year': '2020'}
          },
          {
            'text': {'headline': '标题4','text': '具体内容4'},
            'start_date': {'month': '1','day': '18','year': '2020'}
          },
          {
            'text': {'headline': '标题5','text': '具体内容5'},
            'start_date': {'month': '2','day': '1','year': '2020'}
          }
        ]
      }, attributesOptions);

      // 设置事件，参考Events清单
      // event_name = 字符串, 事件名称, 此处以 "change" 举例
      // data = JavaScript对象，具体参考Events清单中的事件特定的属性。
      timeline.on("change", function(data) {
          console.log(data)
      });
      <\/script>
      `,
      code2: ` 
      <!-- 1、参考上方npm 安装或cdn方式 引入timeline文件-->

      <!-- 2、添加div 定义ID， 宽高-->
      <div id='timeline-embed2' style="width: 100%; height: 220px"></div>
      
      <!-- 3、-->
      <script type="text/javascript">
      var attributesOptions = {
          timenav_height: 220,
          zoom_sequence: [0.5, 1],
          scale_factor: 1,
          start_at_slide: 2,
          is_slide_open: false,
          timeaxis_tick_show: false
      }
      // 创建Timeline对象
      new TL.Timeline('timeline-embed2',{...}, attributesOptions);

      <\/script>
      `,
      data: ` {
    "start_date": {
        "year":			<string>, // 所有事件都必须有年份。
        "month":		<string>, // 其它属性都是可选的
        "day": 			<string>, 
        "hour": 		<string>,
        "minute": 		<string>,
        "second": 		<string>,
        "millisecond": 	<string>,
        "format": 		<string>,
        "display_text": <string>
    },
    "end_date": {                  // 可选的
        "year":			<string>,
        "month":		<string>,
        "day": 			<string>,
        "hour": 		<string>,
        "minute": 		<string>,
        "second": 		<string>,
        "millisecond": 	<string>,
        "format": 		<string>,
        "display_text": <string>
    },
    "location": {                   // 可选的
        "icon":         <string>,   // icon url
        "lat":          <float>,   
        "lon":          <float>,
        "line":         <boolean>,
        "name":         <string>,
        "zoom":         <int>
    },
    "media": {                      // 可选的
        "caption":      <string>,
        "credit":       <string>,
        "url":          <string>,
        "thumbnail":    <string>
    },
    "text": {
        "headline":     <string>,
        "text":         <string>
    },
    "unique_id":         <string>    // 可选的
}
       `
    };
  },
  methods: {
  },
  mounted() {
    var timeline = new TL.Timeline('timeline-embed', this.timeline, this.timelineOptions)
    timeline.on("change", function(data) {
      console.log(data)
    });
    new TL.Timeline('timeline-embed2', this.timeline, this.timelineOptions2)
  }
};
</script>
