<template>
  <div class="o-transfer" :class="{'disabled': disabled}">
    <div class="transfer-panel" :style="panelStyle">
      <div class="tab-head">
        <div class="tab-item" :class="{'select': tabID === 0}" @click="tabID = 0" v-if="display.depts">
          <span :data-num="SDepts.length">部门</span>
        </div>
        <div class="tab-item" :class="{'select': tabID === 1}" @click="tabID = 1" v-if="display.dutys">
          <span :data-num="SDutys.length">职务</span>
        </div>
        <div class="tab-item" :class="{'select': tabID === 2}" @click="tabID = 2" v-if="display.groups">
          <span>群组</span>
        </div>
        <div class="tab-item" :class="{'select': tabID === 3}" @click="tabID = 3" v-if="display.users">
          <span :data-num="SUsers.length">用户</span>
        </div>
      </div>
      <div class="tab-bar" :class="'seq' + TrueTabID"></div>
      <div class="tab-content" :style="{'height': BH + 'px'}">
        <div class="body-wrapper" :class="'seq' + tabID">
          <!-- 部门列表 -->
          <div class="body">
            <div class="content" :style="bodyStyle">
              <xc-tree :data="i" v-for="i in Depts" :key="i.id"></xc-tree>
              <!-- <div class="item" v-for="i in depts" :class="{'select': i.select}" v-text="i.name" @click="i.select = !i.select" :key="'deptsl' + i.id"></div> -->
            </div>
          </div>
          <!-- 职务-部门 列表 -->
          <div class="body">
            <div class="content dutys" :style="bodyStyle">
              <div class="item" v-for="i in dutys" :key="'dutysl' + i.id" :class="{'select': i.select}">
                <p v-text="i.name" @click="toggleDutys(i)" class="cup" title="全选 / 取消"></p>
                <p class="min-tag" v-if="false"><span v-for="d in i.depts" :key="'dutysltag' + d.id" v-text="d.name" @click="d.select = !d.select" :class="{'select': d.select}"></span></p>
              </div>
            </div>
          </div>
          <!-- 用户组列表 -->
          <div class="body">
            <div class="content" :style="bodyStyle">
              <div class="item" v-for="i in groups" :class="{'select': i.select}" v-text="i.name + ' ( ' + i.users.length + ' )'" @click="i.select = !i.select" :key="'groupsl' + i.id"></div>
            </div>
          </div>
          <!-- 用户列表 -->
          <div class="body">
            <div class="content" :style="bodyStyle">
              <div class="item" v-for="i in Users" :class="{'select': i.select}" @click="toggleUser(i)" :key="'usersl' + i.id">
                <span v-text="i.name"></span>
                <!-- <i class="el-icon-star-on" v-if="i.follow" @click.stop="follow(i, false)" title="取消常用联系人"></i> -->
                <!-- <i class="el-icon-star-off" v-else @click.stop="follow(i, true)" title="添加为常用联系人"></i> -->
                <svg class="icon-star on" v-if="i.follow" @click.stop="follow(i, false)" title="取消常用联系人" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="24">
                  <path d="M174.784 992c0-291.712 0-583.296 0-874.88 0.832-7.808 1.472-15.552 2.624-23.296C182.208 61.312 200.96 41.216 232.704 35.008 240.768 33.408 249.088 32.96 257.28 32c169.344 0 338.752 0 508.096 0 4.992 0.448 9.92 0.96 14.912 1.344 36.544 2.752 58.688 21.376 65.92 55.36 1.216 5.952 1.984 11.968 2.944 17.92 0 295.104 0 590.272 0 885.376-1.792-1.216-3.712-2.304-5.376-3.584-97.728-75.904-195.52-151.552-293.248-227.456-12.736-9.792-25.472-19.776-38.208-29.504-2.368 1.728-4.288 3.2-6.144 4.672-107.648 83.328-215.168 166.72-322.816 249.984C180.672 988.288 177.664 990.08 174.784 992zM634.752 576.896c10.368 0.192 14.976-4.672 14.016-13.376-0.256-2.432-0.96-4.8-1.6-7.04C635.776 518.528 624.384 480.512 612.992 442.56c-7.296-24.32-2.304-40.128 17.664-55.808 27.456-21.632 54.848-43.2 82.24-64.832 3.072-2.496 6.272-4.8 8.896-7.808 6.08-6.72 4.544-13.44-4.032-16.064-6.016-1.728-12.416-2.688-18.624-2.688-31.872-0.32-63.744 0-95.616-0.128C581.056 295.168 561.472 280.256 555.648 258.624c-9.536-35.456-18.944-71.04-28.544-106.624C526.208 148.608 525.312 144.896 523.2 142.464c-2.816-3.2-6.976-7.296-10.496-7.232C509.312 135.296 505.408 139.648 502.656 142.912 500.8 145.088 500.288 148.416 499.456 151.424 489.344 186.816 479.36 222.272 469.248 257.536 462.656 280.768 443.584 295.168 419.456 295.232 386.112 295.424 352.704 295.744 319.296 296c-3.456 0-6.976 0.192-10.304 1.216C298.432 300.16 295.936 309.12 303.296 317.12c2.176 2.496 4.8 4.544 7.36 6.464C338.944 345.152 367.36 366.592 395.52 388.224c17.472 13.44 22.848 30.592 16.704 51.52C401.024 478.016 389.632 516.288 378.496 554.496c-1.088 3.776-2.112 7.68-2.368 11.52-0.384 7.04 3.712 11.008 10.816 10.88 7.68-0.192 13.632-4.032 18.944-9.216 26.944-26.432 53.888-52.864 80.896-79.232 16.576-16.256 33.152-16.192 49.728 0C563.392 514.944 590.4 541.248 617.344 567.68 622.656 572.928 628.8 576.448 634.752 576.896z"></path>
                </svg>
                <svg class="icon-star off" v-else @click.stop="follow(i, true)" title="添加为常用联系人" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="24">
                  <path d="M174.912 992 175.68 118.848c0.576-5.504 1.152-11.008 1.92-16.448 5.44-36.928 27.392-60.16 63.36-67.264 5.76-1.152 11.584-1.728 17.408-2.304l7.168-0.768L755.712 32l15.296 1.28c40.896 3.008 66.816 24.96 75.008 63.36 0.832 4.416 1.536 8.704 2.176 12.992l0.768 4.928 0.192 877.312-19.904-13.312c-2.944-1.92-4.48-2.944-5.888-4.032l-310.912-241.024-308.48 238.912c-2.048 1.6-4.16 2.944-6.336 4.352L174.912 992zM754.56 57.6 260.928 58.368c-5.056 0.448-10.048 0.96-15.04 1.92-25.024 4.928-39.104 19.904-42.88 45.824C202.24 111.232 201.664 116.288 201.152 121.408L200.448 128.064l0.064 814.592 311.808-241.472 311.104 241.088-0.64-828.8c-0.576-3.904-1.216-7.808-1.984-11.712-5.76-27.072-22.208-40.768-51.776-42.944L754.56 57.6zM630.656 581.568c-0.256 0-0.576 0-0.832 0l-0.704 0c-8.64-0.64-17.216-4.928-24.832-12.416L526.528 492.864c-10.88-10.688-19.008-10.688-29.888 0C470.72 518.272 444.8 543.616 418.944 569.088 410.496 577.344 401.664 581.376 392 581.568c-9.408 0-14.464-3.52-17.472-6.656-3.008-3.136-6.464-8.64-5.952-17.28 0.32-5.184 1.6-9.92 2.816-13.952L403.776 433.28c4.416-15.168 0.832-26.176-11.584-35.776C372.096 382.08 351.936 366.784 331.712 351.424l-21.12-16C307.904 333.376 304.576 330.816 301.632 327.424c-6.208-6.72-8.64-15.296-6.4-23.232 2.24-7.936 8.832-14.016 18.048-16.64 4.864-1.472 9.728-1.664 13.44-1.664 32-0.32 64.128-0.512 96.256-0.704 17.536-0.064 30.848-10.112 35.584-26.88l29.12-102.144c1.152-4.544 2.304-9.152 5.696-13.056 3.648-4.288 9.92-11.584 19.072-11.776 8.512 0.64 15.168 5.824 19.904 11.136 4.032 4.736 5.44 10.048 6.464 13.952L566.4 259.392c4.096 15.104 17.92 25.664 33.664 25.728l34.432 0c19.2 0 38.4 0 57.6 0.128 7.168 0 14.592 1.088 21.504 3.136 11.136 3.392 14.72 10.752 15.872 14.848 1.152 4.16 1.92 12.416-6.016 21.44C720.64 327.68 717.504 330.24 714.304 332.8L634.048 395.968C618.88 407.872 615.808 417.536 621.376 435.904l32.896 109.44c0.896 3.008 1.664 5.952 2.048 9.088 1.088 9.792-2.432 15.936-5.568 19.392C647.488 577.408 641.344 581.568 630.656 581.568zM511.552 459.2c11.2 0 22.464 5.12 32.96 15.36l77.76 76.224C625.152 553.664 628.224 555.52 630.528 555.904c-0.256-1.216-0.512-2.176-0.832-3.2l-32.896-109.44c-8.512-28.416-1.92-49.152 21.376-67.456l79.04-62.272c0.896-0.768 1.792-1.408 2.56-1.984-2.688-0.448-5.312-0.64-7.872-0.64-19.2-0.128-38.336-0.128-57.472-0.128l-34.56 0C572.672 310.656 548.672 292.288 541.632 266.112L514.176 163.584C513.728 161.984 513.344 160.384 513.024 159.488 512.896 159.616 512.832 159.744 512.704 159.808L512.256 163.136 483.2 265.28c-7.808 27.52-31.36 45.376-60.16 45.504C390.976 310.976 358.912 311.232 326.784 311.488c-1.344 0-3.072 0-4.544 0.256 1.344 1.28 2.624 2.24 3.904 3.264l21.056 16c20.224 15.36 40.448 30.72 60.608 46.208C428.736 393.28 435.84 415.168 428.416 440.512L395.904 550.848C395.52 552.256 395.072 553.728 394.752 555.264c1.728-0.704 3.712-1.984 6.272-4.48C426.816 525.376 452.736 499.968 478.72 474.56 489.152 464.32 500.352 459.2 511.552 459.2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <div class="transfer-panel" :style="panelStyle">
      <!-- 搜索框（添加额外人员） -->
      <div class="tab-head" :class="{'disabled': disableadd}">
        <div class="search-select">
          <input type="text" :style="{width: BW - 55 + 'px'}" :disabled="disableadd" class="search" v-model="key" :class="{'error': key && !user, 'success': key && user}" @keyup.enter="addUser">
          <div class="search-content">
            <div class="item" v-for="i in list" :key="i.id" @click="selectUser(i)">
              <span v-text="i.name" class="name"></span>
              <span v-text="i.dept"></span>
            </div>
          </div>
        </div>
        <button type="button" :class="{'disable': !user}" @click="addUser">添加</button>
      </div>
      <div class="tab-content" :style="{'height': BH + 'px'}">
        <div class="content del" :style="bodyStyle">
          <!-- 选择的部门 -->
          <xc-tree :data="i" v-for="i in Depts" :key="i.id" :result="true"></xc-tree>
          <!-- <div class="item dept" v-for="i in SDepts" @click="i.select = false" :key="'deptsr' + i.id">
            <span v-text="i.name"></span>
            <svg class="del" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M641.536 189.781333V64c0-35.157333-23.893333-64-56.490667-64H448.597333c-32.426667 0-66.048 28.842667-66.048 64v125.781333H179.2c7.850667 0-51.2 12.885333-51.2 66.218667 0 35.157333 26.624 64 59.050667 64h649.898666C869.376 320 896 291.157333 896 256c0-53.333333-59.050667-66.218667-59.050667-66.218667h-195.413333zM448 192V128c0-44.544 28.416-64 64-64 36.437333 0 64 19.626667 64 64v64h-128zM320 1024h384c70.4 0 128-57.6 128-128v-512H192v512c0 70.4 57.6 128 128 128z m323.754667-483.584c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.453334 28.501334-14.421333 0-26.282667-12.8-26.282666-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.453334-28.416 14.421333 0 26.282667 12.8 26.282666 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z" p-id="2699"></path></svg>
          </div> -->
          <!-- 选择的职务 -->
          <div class="item duty" v-for="i in SDutys" :key="'dutysr' + i.id" @click="toggleDutys(i)">
            <p v-text="i.name"></p>
            <!-- <p class="min-tag">
              <template v-for="d in i.depts"><span class="select" :key="d.id" v-if="d.select" v-text="d.name" @click="d.select = false"></span></template>
            </p> -->
            <svg class="del" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M641.536 189.781333V64c0-35.157333-23.893333-64-56.490667-64H448.597333c-32.426667 0-66.048 28.842667-66.048 64v125.781333H179.2c7.850667 0-51.2 12.885333-51.2 66.218667 0 35.157333 26.624 64 59.050667 64h649.898666C869.376 320 896 291.157333 896 256c0-53.333333-59.050667-66.218667-59.050667-66.218667h-195.413333zM448 192V128c0-44.544 28.416-64 64-64 36.437333 0 64 19.626667 64 64v64h-128zM320 1024h384c70.4 0 128-57.6 128-128v-512H192v512c0 70.4 57.6 128 128 128z m323.754667-483.584c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.453334 28.501334-14.421333 0-26.282667-12.8-26.282666-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.453334-28.416 14.421333 0 26.282667 12.8 26.282666 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z" p-id="2699"></path></svg>
          </div>
          <!-- 选择的用户 -->
          <div class="item user" v-for="i in SUsers" @click="cancelUser(i.id)" :key="'usersr' + i.id">
            <span v-text="i.name"></span>
            <svg class="del" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M641.536 189.781333V64c0-35.157333-23.893333-64-56.490667-64H448.597333c-32.426667 0-66.048 28.842667-66.048 64v125.781333H179.2c7.850667 0-51.2 12.885333-51.2 66.218667 0 35.157333 26.624 64 59.050667 64h649.898666C869.376 320 896 291.157333 896 256c0-53.333333-59.050667-66.218667-59.050667-66.218667h-195.413333zM448 192V128c0-44.544 28.416-64 64-64 36.437333 0 64 19.626667 64 64v64h-128zM320 1024h384c70.4 0 128-57.6 128-128v-512H192v512c0 70.4 57.6 128 128 128z m323.754667-483.584c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.453334 28.501334-14.421333 0-26.282667-12.8-26.282666-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.368-28.416 14.506667 0 26.368 12.8 26.368 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z m-158.122667 0c0-15.616 11.946667-28.416 26.453334-28.416 14.421333 0 26.282667 12.8 26.282666 28.416v341.333333c0 15.701333-11.946667 28.501333-26.368 28.501334-14.506667 0-26.368-12.8-26.368-28.501334v-341.333333z" p-id="2699"></path></svg>
            <!-- <i class="el-icon-delete"></i> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oTransfer',
  props: ['data', 'value', 'disabled', 'disableadd', 'size'],
  data() {
    return {
      tabID: -1,
      selectValue: null,
      key: '',
      depts: [],
      dutys: [],
      groups: [],
      users: [],
      usersID: [],
      user: null,
      list: [],
      display: {
        depts: true,
        dutys: true,
        groups: true,
        users: true
      }
    };
  },
  watch: {
    data: 'update',
    key: 'search',
    dutys: {
      handler: 'updateValue',
      deep: true
    }
  },
  methods: {
    selectUser(i) {
      this.user = i;
      this.list = [];
    },
    search() {
      this.$emit('search', this.key, data => {
        if(data.status && data.users) {
          if(data.users.length === 1) this.user = data.users[0];
          if(data.users.length >= 1) this.list = data.users;
        }else this.user = null;
      });
    },
    follow(i, status) {
      this.$emit('follow', {id: i.id, name: i.name, follow: status}, data => {
        if(data.status) this.users.some(u => {
          if(u.id === i.id) {
            u.follow = status;
            return true;
          }
          return false;
        });
      });
    },
    addUser() {
      if(this.user) {
        this.user.follow = false;
        if(this.users.every(i => i.id !== this.user.id)) this.users.push(this.user);
        this.usersID.push(this.user.id);
        this.key = '';
      }
    },
    update() {
      if(this.data.display) {
        for(var i in this.display) {
          if(this.data.display[i] === false) this.display[i] = false;
          else this.display[i] = true;
        }
      }
      const map = ['depts', 'dutys', 'groups', 'users'];
      map.some((i, index) => {
        if(this.display[i]) {
          this.tabID = index;
          return true;
        }
        return false;
      });
      if(Array.isArray(this.data.depts)) {
        this.depts = this.data.depts.map(i => ({
          select: false,
          id: i.id,
          pid: i.pid,
          name: i.name,
          child: []
        }));
      }
      if(Array.isArray(this.data.dutys)) {
        this.dutys = this.data.dutys.map(i => ({
          id: i.id,
          name: i.name,
          select: false,
          depts: i.depts.map(d => ({
            id: d.id,
            name: d.name,
            tid: d.tid,
            select: false
          }))
        }));
      }
      if(Array.isArray(this.data.groups)) {
        this.groups = this.data.groups.map(i => ({
          id: i.id,
          name: i.name,
          select: false,
          users: i.users.map(u => u.id)
        }));
      }
      if(Array.isArray(this.data.depts)) {
        this.users = this.data.users.map(i => ({id: i.id, name: i.name, follow: true}));
      }
      this.defaultSelect();
    },
    defaultSelect() {
      var tem;
      if(this.value) {
        if(this.value.depts) {
          tem = {};
          this.value.depts.forEach(i => {
            tem[i.id] = true;
          });
          this.depts.forEach(i => {
            if(tem[i.id]) i.select = true;
          });
        }
        if(this.value.dutys) {
          tem = {};
          this.value.dutys.forEach(d => {
            d.depts.forEach(i => {
              tem[d.id + '-' + i.id] = true;
            });
          });
          this.dutys.forEach(d => {
            d.depts.forEach(i => {
              if(tem[d.id + '-' + i.id]) {
                i.select = true;
                d.select = true;
              }
            });
          });
        }
        if(this.value.users) {
          this.value.users.forEach(u => {
            if(this.users.every(i => i.id !== u.id)) this.users.push({id: u.id, name: u.name, follow: false});
            this.usersID.push(u.id);
          });
        }
      }
    },
    toggleDutys(i) {
      var s = i.depts.every(d => d.select);
      i.depts.forEach(d => {d.select = !s;});
      i.select = !s;
    },
    cancelUser(id) {
      this.groups.forEach(i => {
        if(i.select && i.users.some(u => u === id)) {
          i.select = false;
          this.usersID = this.usersID.concat(i.users.filter(u => u !== id));
        }
      });
      this.usersID = this.usersID.filter(i => i !== id);
    },
    toggleUser(i) {
      if(i.select) this.cancelUser(i.id);
      else this.usersID.push(i.id);
    },
    updateValue() {
      clearTimeout(this._st);
      this._st = setTimeout(() => {
        this.selectValue = {
          depts: this.SDepts.map(i => ({id: i.id, name: i.name})),
          dutys: this.SDutys.map(i => ({
            id: i.id,
            name: i.name,
            depts: i.depts.filter(d => d.select).map(d => ({id: d.id, name: d.name, tid: d.tid}))
          })),
          users: this.SUsers.map(i => ({id: i.id, name: i.name}))
        };
        this.$emit('change', this.selectValue);
      }, 242);
    }
  },
  computed: {
    Depts() {
      var depts = this.depts;
      var tem = depts.filter(i => !i.pid);
      function loop(t) {
        t.child = depts.filter(i => t.id === i.pid);
        t.child.forEach(i => {
          i.parent = t;
          loop(i);
        });
      }
      tem.forEach(i => {
        loop(i);
      });
      return tem;
    },
    TrueTabID() {
      var t = this.tabID;
      const map = ['depts', 'dutys', 'groups', 'users'];
      for(var i = 0; i <= this.tabID; i++) {
        if(this.display[map[i]] === false) t--;
      }
      return t;
    },
    SDepts() {
      this.updateValue();
      return this.depts.filter(i => i.select);
    },
    SDutys() {
      this.updateValue();
      return this.dutys.filter(i => i.depts.some(d => d.select));
    },
    SUsers() {
      this.updateValue();
      var t = this.usersID;
      this.groups.forEach(i => {
        i.select && (t = t.concat(i.users));
      });
      return this.users.filter(i => t.some(u => u === i.id));
    },
    Users() {
      var t = this.usersID;
      this.groups.forEach(i => {
        i.select && (t = t.concat(i.users));
      });
      return this.users.map(i => ({
        id: i.id,
        name: i.name,
        follow: i.follow,
        select: t.some(u => u === i.id)
      }));
    },
    Value() {
      return this.selectValue;
    },
    BW() {
      var width = 240;
      if(this.size && this.size[0]) width = this.size[0];
      if(width < 240) width = 240;
      return width;
    },
    BH() {
      var height = 100;
      if(this.size && this.size[1]) height = this.size[1];
      if(height < 100) height = 100;
      return height - 34;
    },
    panelStyle() {
      var width = 240, height = 320;
      if(this.size && this.size[0]) {
        width = this.size[0];
        height = this.size[1];
      }
      return {
        width: width + 'px',
        height: height + 'px'
      };
    },
    bodyStyle() {
      var width = 260;
      if(this.size && this.size[0]) width = this.size[0] + 20;
      return {
        width: width + 'px'
      };
    }
  },
  mounted() {
    this.update();
  }
};
</script>

<style lang="scss">
  .o-transfer {
    &.disabled {
      filter: grayscale(1);
      pointer-events: none;
    }
    &::after {
      content: "";
      display: table;
      clear: both;
      float: none;
      *zoom: 1;
    }
    .transfer-panel {
      float: left;
      display: block;
      min-width: 240px;
      height: 320px;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      background-color: #fff;
    }
    .tab-head {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-color: #f5f7fa;
      border-radius: 4px 4px 0 0;
      &.disabled {
        filter: grayscale(1);
        cursor: not-allowed;
        * {
          pointer-events: none;
        }
      }
      .tab-item {
        width: 25%;
        text-align: center;
        padding: 3px .5em 0;
        font-size: 14px;
        line-height: 2;
        color: #444;
        cursor: pointer;
        &.select {
          color: #409eff;
        }
        span {
          position: relative;
          &::after {
            content: attr(data-num);
            position: absolute;
            top: -.5em;
            right: -1.1em;
            min-width: 1.5em;
            font-size: 12px;
            background-color: rgba(52,200,73,.6);
            color: #fff;
            border-radius: 50%;
            line-height: 1.5;
            text-align: center;
            transform: scale(.7);
          }
        }
      }
      .search {
        width: 185px;
        margin: 6px 5px 5px;
        padding: 0 .5em;
        border: 1px solid #ccc;
        border-radius: 2px;
        font-size: 12px;
        line-height: 1.5;
        &.error {
          border-color: #fd6461;
        }
        &.success {
          border-color: #34c849;
        }
      }
      button {
        display: inline-block;
        border: 0;
        font-size: 12px;
        line-height: 1.5;
        height: 20px;
        border-radius: 2px;
        background-color: #409eff;
        color: #fff;
        user-select: none;
        cursor: pointer;
        &.disable {
          filter: grayscale(1);
          cursor: not-allowed;
        }
      }
    }
    .tab-bar {
      width: 25%;
      height: 1px;
      background: #34c849;
      transition: margin .34s;
      &.seq1 {
        margin-left: 25%;
      }
      &.seq2 {
        margin-left: 50%;
      }
      &.seq3 {
        margin-left: 75%;
      }
    }
    .tab-content {
      height: 286px;
      overflow: hidden;
      .body-wrapper {
        width: 400%;
        height: 100%;
        transform: translate(0%);
        transition: transform .34s;
        &.seq1 {
          transform: translate(-25%);
        }
        &.seq2 {
          transform: translate(-50%);
        }
        &.seq3 {
          transform: translate(-75%);
        }
      }
      .body {
        float: left;
        width: 25%;
        height: 100%;
        overflow: hidden;
      }
      .content {
        min-width: 260px;
        height: 100%;
        padding-right: 20px;
        overflow-x: hidden;
        overflow-y: scroll;
      }
      .item {
        position: relative;
        font-size: 12px;
        line-height: 2;
        padding: 0 1em;
        margin-bottom: 1px;
        color: #555;
        user-select: none;
        cursor: pointer;
        transition: background .2s;
        &.select {
          background-color: rgba(40,202,64,.1);
          color: #409eff;
        }
        svg.del,
        i {
          position: absolute;
          top: 0;
          line-height: 2em;
          right: .5em;
          width: 2em;
          text-align: center;
          color: #fff;
          transition: color .2s;
          &.el-icon-star-on { color: #fc605d; }
          &.el-icon-star-off { color: #aaa; }
        }
        .icon-star {
          position: absolute;
          top: 0;
          line-height: 2em;
          right: .5em;
          transition: fill .2s;
          &.off {
            fill: #bbb;
            &:hover {
              fill: #fc605d;
            }
          }
          &.on {
            fill: #fc605d;
            &:hover {
              fill: #bbb;
            }
          }
        }
        svg.del {
          top: 4px;
          fill: #fff;
        }
      }
      .del {
        .xc-tree {
          .item {
            color: #999;
            pointer-events: none;
          }
          .arrow {
            pointer-events: all;
          }
          .select {
            pointer-events: all;
            background: none;
            color: #555;
            &:hover {
              background-color: rgba(252,96,93,.1);
              i { color: #fc605d; }
              svg.del { fill: #fc605d; }
            }
          }
        }
        .duty,
        .user,
        .dept {
          border-top: 1px solid #f5f5f5;
          margin: 0;
          &:hover {
            background-color: rgba(252,96,93,.1);
            i { color: #fc605d; }
            svg.del { fill: #fc605d; }
          }
        }
        .item:first-child {
          border: 0;
        }
      }
      .dutys {
        .item {
          cursor: default;
        }
        .cup {
          &:hover {
            color: #409eff;
          }
        }
      }
      .min-tag {
        line-height: 1.5;
        span {
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 0 3px;
          margin: 0 3px 3px 0;
          cursor: pointer;
          &.select {
            border-color: #409eff;
            background-color: #409eff;
            color: #fff;
          }
        }
      }
    }
    .cup {
      cursor: pointer;
    }
  }
</style>
