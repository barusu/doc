<template>
  <div class="xc-tree" v-if="isShow">
    <div class="item" @click="select(data)" :class="{'select': data.select}" :style="style">
      <span class="arrow" :class="{'open': status}" @click.stop="status = !status">
        <svg v-if="hasChild" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
          <path d="M802.68856889 453.16323555l-381.64837605-381.64837603a83.2203173 83.2203173 0 0 0-142.05708173 58.83676446L278.98311111 893.64837602a83.2203173 83.2203173 0 0 0 142.05708173 58.83676446l381.64837605-381.64837603a83.2203173 83.2203173 0 0 0 0-117.6735289z"></path>
        </svg>
      </span>
      <span v-text="data.name" class="txt"></span>
      <svg v-if="result" class="del" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M641.536 189.781333V64c0-35.157333-23.893333-64-56.490667-64H448.597333c-32.426667 0-66.048 28.842667-66.048 64v125.781333H179.2c7.850667 0-51.2 12.885333-51.2 66.218667 0 35.157333 26.624 64 59.050667 64h649.898666C869.376 320 896 291.157333 896 256c0-53.333333-59.050667-66.218667-59.050667-66.218667h-195.413333zM448 192V128c0-44.544 28.416-64 64-64 36.437333 0 64 19.626667 64 64v64h-128zM320 1024h384c70.4 0 128-57.6 128-128v-512H192v512c0 70.4 57.6 128 128 128z m323.754667-483.584c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.453334 28.501334-14.421333 0-26.282667-12.8-26.282666-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.453334-28.416 14.421333 0 26.282667 12.8 26.282666 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z" p-id="2699"></path></svg>
    </div>
    <xc-tree v-show="status" :data="i" :level="Level + 1" v-for="i in data.child" :key="i.id" :result="result"></xc-tree>
  </div>
</template>

<script>
export default {
  props: ['data', 'level', 'result'],
  data() {
    return {
      status: false
    };
  },
  methods: {
    select(data) {
      if(this.result) {
        if(data.select) data.select = false;
        return;
      }
      if(data.select) {
        if(this.getStatus(data)) this.check(data, false);
        else data.select = false;
      }else {
        this.check(data, true);
        this.selectParent(data);
      }
    },
    selectParent(data) {
      if(data.parent) {
        data.parent.select = true;
        this.selectParent(data.parent);
      }
    },
    check(data, flag) {
      data.select = flag;
      if(data.child) {
        data.child.forEach(i => {
          this.check(i, flag);
        });
      }
    },
    getStatus(data) {
      if(!data.select) return false;
      if(data.child) {
        return data.child.every(i => this.getStatus(i));
      }
      return true;
    }
  },
  computed: {
    hasChild() {
      // console.log(this.data);
      if(this.data && this.data.child && this.data.child.length) return true;
      return false;
    },
    Level() {
      return this.level || 0;
    },
    style() {
      return {
        paddingLeft: this.Level * 10 + 5 + 'px'
      };
    },
    isShow() {
      function loop(item) {
        if(item.select) return true;
        if(item.child) {
          return item.child.some(i => loop(i));
        }
        return false;
      }
      if(this.result) return loop(this.data);
      return true;
    }
  }
};
</script>

<style lang="scss">
  .xc-tree {
    .arrow {
      display: inline-block;
      width: 20px;
      transition: transform .34s;
      vertical-align: middle;
      text-align: center;
      margin: 0 -3px;
      &.open {
        transform: rotate(90deg) translate(-0px, -0px);
      }
    }
    svg {
      fill: #444;
    }
  }
</style>

