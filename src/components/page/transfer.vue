<template>
  <div class="transfer-view">
    <h2><span>Transfer</span> <span class="chinese">基于穿梭框的权限选择器</span></h2>
    <p>高度定制组件。</p>
    <div class="preview clearfix">
      <div class="control">
        <xc-button type="info" @click="disabled = !disabled">
          <span v-text="disabled ? '取消' : '禁用'"></span>
        </xc-button>
        <xc-button type="info" @click="disablesearch = !disablesearch">
          <span v-text="disablesearch ? '启用搜索' : '禁用搜索'"></span>
        </xc-button>
      </div>
      <!-- ref: 自定义组件名称 使用[this.$refs.名称.Value]获取选中的数据集 -->
      <!-- data: 待选数据 value: 初始选中的数据(在data修改之后设置没有效果,需再次修改data或调用组件的defaultSelect方法) -->
      <!-- search: 搜索事件 [param1: 关键字  param2: 回调函数] -->
      <xc-transfer ref="transfer" :data="testData" :value="value" @search="search" @follow="follow" @change="change" :disabled="disabled" :disableadd="disablesearch" :size="[300, 400]">
        <svg t="1563357596999" class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4012" width="32" height="32"><path d="M512 512m-460.8 0a460.8 460.8 0 1 0 921.6 0 460.8 460.8 0 1 0-921.6 0Z" fill="#416b41" p-id="4013"></path><path d="M677.888 584.3968L460.8 801.5872l-72.192-72.3968L605.696 512 388.608 294.7584 460.8 222.3616l289.792 289.5872z" fill="#FFFFFF" p-id="4014"></path></svg>
      </xc-transfer>
      <br>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_transfer" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head vue"><xc-icon type="vue"></xc-icon> <label class="code-control" for="code_transfer">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="html" line="13"></xc-code>
        </div>
      </div>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
    <h3><span>Events</span></h3>
    <xc-doc :list="eventsDoc" type="event"></xc-doc>
    <div class="data-view">
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_transfer_data1" class="kakushi code-control-ck" v-model="ck1">
        <div class="code-json">
          <p class="code-head json"><xc-icon type="json"></xc-icon> Data1 <label class="code-control" for="code_transfer_data1">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="json" :code="data1" line="60"></xc-code>
        </div>
        <input type="checkbox" id="code_transfer_data2" class="kakushi code-control-ck" v-model="ck1">
        <div class="code-json">
          <p class="code-head json"><xc-icon type="json"></xc-icon> Data2 <label class="code-control" for="code_transfer_data2">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="json" :code="data2" line="60"></xc-code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from '@/libs/ajax';
// import Transfer from '@/components/jandar/transfer/transfer';

const host = 'https://easy-mock.com/mock/5ce21a974546ce6ad9bd3aca/';
// eslint-disable-next-line
const demoData = {"isAll":false,"depts":[{"id":1,"pid":0,"name":"叶刚"},{"id":2,"pid":0,"name":"熊桂英"},{"id":3,"pid":0,"name":"贾刚"},{"id":4,"pid":1,"name":"方明"},{"id":5,"pid":1,"name":"贾艳"},{"id":6,"pid":1,"name":"蒋霞"},{"id":7,"pid":0,"name":"钱平"},{"id":8,"pid":0,"name":"余勇"},{"id":9,"pid":1,"name":"李秀兰"},{"id":10,"name":"郭桂英"},{"id":11,"pid":20,"name":"邵秀兰"},{"id":12,"name":"杜秀兰"},{"id":13,"pid":20,"name":"贾勇"},{"id":14,"pid":4,"name":"雷艳"},{"id":15,"pid":14,"name":"蔡霞"},{"id":16,"pid":4,"name":"戴强"},{"id":17,"name":"林刚"},{"id":18,"pid":20,"name":"方洋"},{"id":19,"pid":14,"name":"江娟"},{"id":20,"pid":14,"name":"卢超"},{"id":21,"pid":20,"name":"苏勇"}],"dutys":[{"id":1,"name":"徐秀兰","depts":[{"id":1,"name":"梁丽","tid":"Perez"},{"id":2,"name":"王明","tid":"Wilson"},{"id":3,"name":"丁杰","tid":"Perez"}]},{"id":2,"name":"石强","depts":[{"id":1,"name":"潘丽","tid":"Lee"},{"id":2,"name":"叶娜","tid":"Thompson"},{"id":3,"name":"文霞","tid":"White"}]},{"id":3,"name":"于芳","depts":[{"id":1,"name":"于秀英","tid":"Lee"},{"id":2,"name":"韩涛","tid":"Garcia"},{"id":3,"name":"夏桂英","tid":"Hall"},{"id":4,"name":"雷秀兰","tid":"Robinson"},{"id":5,"name":"戴艳","tid":"Wilson"},{"id":6,"name":"孙涛","tid":"Young"},{"id":7,"name":"孔杰","tid":"Martinez"},{"id":8,"name":"尹磊","tid":"Robinson"},{"id":9,"name":"陈磊","tid":"Rodriguez"}]},{"id":4,"name":"范芳","depts":[]}],"groups":[{"id":1,"name":"范桂英","users":[{"id":1,"name":"张三"},{"id":2,"name":"赵四"},{"id":3,"name":"王五"},{"id":4,"name":"王雨"}]},{"id":2,"name":"叶杰","users":[{"id":1,"name":"张三"},{"id":2,"name":"赵四"},{"id":4,"name":"王雨"}]}],"users":[{"id":1,"name":"张三"},{"id":2,"name":"赵四"},{"id":3,"name":"王五"}],"display":{"depts":true,"dutys":true,"groups":true,"users":true}};

export default {
  // components: {
  //   xcTransfer: Transfer
  // },
  data() {
    return {
      testData: {
        isAll: false,
        depts: [],
        dutys: [],
        groups: [],
        users: []
      },
      value: {
        'depts': [
          {
            'id': 5,
            'name': '陈杰'
          }
        ],
        'dutys': [
          {
            'id': 1,
            'name': '邵秀兰',
            'depts': [
              {
                'id': 2,
                'name': '熊秀兰',
                'tid': 'Jones'
              }
            ]
          },
          {
            'id': 2,
            'name': '范涛',
            'depts': [
              {
                'id': 1,
                'name': '赵芳',
                'tid': 'Williams'
              },
              {
                'id': 2,
                'name': '邱强',
                'tid': 'Walker'
              },
              {
                'id': 3,
                'name': '石娟',
                'tid': 'Moore'
              }
            ]
          },
          {
            'id': 3,
            'name': '黄军',
            'depts': [
              {
                'id': 3,
                'name': '贺涛',
                'tid': 'Harris'
              }
            ]
          }
        ],
        'users': [
          {
            'id': 1,
            'name': '张三'
          },
          {
            'id': 2,
            'name': '赵四'
          },
          {
            'id': 3,
            'name': '王五'
          },
          {
            'id': 6,
            'name': '尼古拉斯'
          }
        ],
        'display': {
          'depts': true,
          'dutys': true,
          'groups': true,
          'users': true
        }
      },
      testValue: null,
      disablesearch: false,
      disabled: false,
      html: `<!-- ref: 自定义组件名称 可使用[this.$refs.名称.Value]获取选中的数据项(this.$refs.transfer.Value) -->
<xc-transfer ref="transfer" @search="search" @follow="follow" @change="change"
             :data="testData" :value="value" :disabled="disabled" :disableadd="disablesearch" :size="[300, 400]">
  <!-- 标签内的内容会被添加到两个列表框之间,可以用来添加这样的箭头图标 -->
  <svg class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path d="M512 512m-460.8 0a460.8 460.8 0 1 0 921.6 0 460.8 460.8 0 1 0-921.6 0Z" fill="#416b41"></path>
    <path d="M677.888 584.3968L460.8 801.5872l-72.192-72.3968L605.696 512 388.608 294.7584 460.8 222.3616l289.792 289.5872z" fill="#FFFFFF"></path>
  </svg>
</xc-transfer>`,
      ck1: true,
      data1: `{
  "depts":[
    {"id":1,"pid":0,"name":"部门1"},
    {"id":2,"pid":0,"name":"部门2"},
    {"id":3,"pid":0,"name":"部门3"},
    {"id":4,"pid":1,"name":"部门4"},
    {"id":5,"pid":1,"name":"部门5"}
  ],
  "dutys":[
    {
      "id":1,
      "name":"职务1",
      "depts":[
        {"id":1,"name":"部门1（选了职务默认部门全选）","tid":"Perez"},
        {"id":2,"name":"部门2（需求变更 现不可单独选职务的部门 也不显示）","tid":"Wilson"},
        {"id":3,"name":"部门3","tid":"Perez"}
      ]
    },{
      "id":3,
      "name":"职务4（没有任何部门有此职务 则不可选择）","depts":[]
    }
  ],
  "groups":[
    {
      "id":1,
      "name":"自定义的群组（用来批量选择用户用，结果集中不含群组信息）",
      "users":[
        {"id":1,"name":"张三"},
        {"id":2,"name":"赵四"},
        {"id":3,"name":"王五"},
        {"id":4,"name":"王雨"}
      ]
    }
  ],
  "users":[
    {"id":1,"name":"张三"},
    {"id":2,"name":"赵四"},
    {"id":3,"name":"王五"}
  ],
  "display":{
    "depts":true,
    "dutys":true,
    "groups":true,
    "users":true
  }
}`,
      data2: `{
  "depts": [
    { "id": 5, "name": "部门" }
  ],
  "dutys": [
    {
      "id": 1,
      "name": "职务1",
      "depts": [
        { "id": 2, "name": "部门1", "tid": "Jones" }
      ]
    },
    {
      "id": 2,
      "name": "职务2",
      "depts": [
        { "id": 1, "name": "部门1", "tid": "Williams" },
        { "id": 2, "name": "部门2", "tid": "Walker" },
        { "id": 3, "name": "部门3", "tid": "Moore" }
      ]
    }
  ],
  "users": [
    { "id": 1, "name": "张三" },
    { "id": 2, "name": "赵四" },
    { "id": 3, "name": "王五" },
    { "id": 6, "name": "尼古拉斯" }
  ],
  "display": {
    "depts": true,
    "dutys": true,
    "groups": true,
    "users": true
  }
}`,
      doc: [
        {property: 'data', description: '选择项数据,格式参考下方Data1', type: 'Object', default: ''},
        {property: 'value', description: '默认选中项,格式参考下方Data2', type: 'Object', default: ''},
        {property: 'disabled', description: '是否禁用', type: 'Boolean', default: 'false'},
        {property: 'disableadd', description: '是否禁用搜索', type: 'Boolean', default: 'false'},
        {property: 'size', description: '单个窗体的宽高值(不能小于默认值)', type: 'Array', default: '[240, 100]'}
      ],
      eventsDoc: [
        {eventName: 'search', description: '搜索事件,回调函数参数格式参考mock', callbackParamet: 'String: 关键字, callback: 回调函数'},
        {eventName: 'follow', description: '关注/取关事件(设置常用联系人)', callbackParamet: 'Object: {id, name, follow}, callback: 回调函数'},
        {eventName: 'change', description: '选择项变化时', callbackParamet: 'Object: 已选中的数据项'}
      ]
    };
  },
  methods: {
    search(key, callback) {
      $.get(host + 'cms-rest/manager/search', {name: key}, callback);
    },
    follow(data, callback) {
      $.get(host + 'cms-rest/manager/follow', data, callback);
    },
    change() {
      this.getValue();
    },
    getValue() {
      this.testValue = this.$refs.transfer.Value;
    }
  },
  mounted() {
    // $.get(host + 'cms-rest/manager', data => {
    //   this.testData = data;
    // });
    this.testData = demoData;
  }
};
</script>

<style lang="scss">
  .transfer-view {
    padding: 20px;
    .icon-arrow {
      float: left;
      margin-top: 184px;
    }
  }
</style>
