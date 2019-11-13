<template>
  <main class="component">
    <div class="sidebar">
      <div class="oo-menu">
        <p class="oo-menu-title"> <router-link :to="{name: 'components'}">Component <span>组件</span></router-link> </p>
        <input type="checkbox" id="ck_general" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_general" class="oo-menu-group-title">
            <div>General</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'icon'}">Icon <span>图标</span></router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'button'}">Button <span>按钮</span></router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_customized" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_customized" class="oo-menu-group-title">
            <div>Customized</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'transfer'}">Transfer <span>选择器</span></router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_notice" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_notice" class="oo-menu-group-title">
            <div>Notice</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'message'}">Message <span>消息提示</span></router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_other" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_other" class="oo-menu-group-title">
            <div>Other</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'mask'}">Mask <span>蒙版</span></router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'calendar'}">Calendar <span>日历</span></router-link> </li>
          </ul>
        </p>
        <!-- <input type="checkbox" id="ck_feedback" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_feedback" class="oo-menu-group-title">
            <div>Feedback</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'message'}">Message</router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_form" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_form" class="oo-menu-group-title">
            <div>Data Entry</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'input'}">Input</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'select'}">Select</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'checkbox'}">Checkbox</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'upload'}">Upload</router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_special" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_special" class="oo-menu-group-title">
            <div>Special</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'fontmask'}">Font Mask</router-link> </li>
          </ul>
        </p>
        <input type="checkbox" id="ck_project" class="oo-ck">
        <p class="oo-menu-group">
          <label for="ck_project" class="oo-menu-group-title">
            <div>Project</div>
            <span class="oo-arrow"></span>
          </label>
          <ul class="oo-menu-item-list">
            <li class="oo-menu-item"> <router-link :to="{name: 'icon'}">Icon</router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'layout'}">Layout <span class="key">iframe</span></router-link> </li>
            <li class="oo-menu-item"> <router-link :to="{name: 'layout-vue'}">Layout <span class="key">.vue</span></router-link> </li>
          </ul>
        </p> -->
      </div>
    </div>
    <router-view class="content"></router-view>
    <div class="clear-box"></div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
  $borderColor: #ddd;
  .component {
    font-size: .16rem;
    > .sidebar {
      min-height: 100px;
      width: 20%;
      float: left;
      box-shadow: 1px 0 0 0 $borderColor;
    }
    > .content {
      overflow: hidden;
      border-left: 1px solid $borderColor;
      text-align: left;
      padding: 1em 2em;
      h2 {
        font-size: .28rem;
        font-family: Helvetica, Arial, sans-serif;
        line-height: 2.5;
        .chinese {
          font-size: .16rem;
          color: #777;
        }
      }
      h3 {
        font-size: .24rem;
        font-family: Helvetica, Arial, sans-serif;
        line-height: 2.5;
        margin-top: .5em;
        .chinese {
          font-size: .22rem;
        }
        span {
          font-weight: 300;
        }
      }
      h5 {
        font-size: .16rem;
        font-family: Helvetica, Arial, sans-serif;
        line-height: 2.5;
      }
      > p {
        line-height: 1.5;
        color: #678;
        font-size: .14rem;
        margin-bottom: .5em;
        &.tip {
          display: inline-block;
          line-height: 1;
          margin-bottom: 1em;
          border-radius: 1px;
          background: #fdbc40;
          box-shadow: 0 0 0 0.5em #fdbc40;
          font-size: 12px;
          color: #fff;
        }
        .keyword {
          color: #ff3102;
        }
      }
    }
    .preview {
      border: 1px solid $borderColor;
      padding: .18rem .18rem 0;
      border-radius: 3px;
      overflow: hidden;
      .control {
        margin-bottom: 1em;
      }
      .code-wrapper {
        margin: 0 -.18rem 0;
      }
      > h3 {
        margin: 0;
        font-size: .16rem;
        line-height: 1;
        margin-bottom: .5em;
      }
      > p {
        line-height: 1.5;
        margin-bottom: .5em;
        font-size: 12px;
        color: #666;
      }
    }
    .data-view {
      border: 1px solid $borderColor;
      border-radius: 3px;
      overflow: hidden;
      .code-wrapper .code-head {
        border-top: 0;
      }
    }
    .footer {
      border-top: 1px solid $borderColor;
    }
  }
</style>
