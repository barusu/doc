<template>
  <div class="transfer-view">
    <!-- ref: 自定义组件名称 使用[this.$refs.名称.Value]获取选中的数据集 -->
    <!-- data: 待选数据 value: 初始选中的数据(在data修改之后设置没有效果,需再次修改data或调用组件的defaultSelect方法) -->
    <!-- search: 搜索事件 [param1: 关键字  param2: 回调函数] -->
    <xc-transfer ref="transfer" :data="testData" :value="value" @search="search" @follow="follow" @change="change" :disabled="disabled" :disableadd="disablesearch" :size="[300, 400]">
      <svg t="1563357596999" class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4012" width="32" height="32"><path d="M512 512m-460.8 0a460.8 460.8 0 1 0 921.6 0 460.8 460.8 0 1 0-921.6 0Z" fill="#416b41" p-id="4013"></path><path d="M677.888 584.3968L460.8 801.5872l-72.192-72.3968L605.696 512 388.608 294.7584 460.8 222.3616l289.792 289.5872z" fill="#FFFFFF" p-id="4014"></path></svg>
    </xc-transfer>
    <div>
      <button type="button"  @click="disabled = !disabled">禁用/取消</button>
      <button type="button"  @click="disablesearch = !disablesearch">禁用/取消搜索</button>
      <button type="button"  @click="getValue">获取数据</button>
      <pre v-text="testValue"></pre>
    </div>
  </div>
</template>

<script>
import $ from '@/libs/ajax';
import Transfer from '@/components/jandar/transfer/transfer';

const host = 'https://easy-mock.com/mock/5ce21a974546ce6ad9bd3aca/';

export default {
  components: {
    xcTransfer: Transfer
  },
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
      disabled: false
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
    $.get(host + 'cms-rest/manager', data => {
      this.testData = data;
    });
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
