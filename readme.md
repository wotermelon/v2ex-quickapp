# V2ex - 快应用

## 启动

```shell
# 安装依赖
npm install
# 启动并监听自动刷新
npm run watch
# 开启服务器调试
npm run server
```

## 应用调试器

  应用调试器 [下载](https://www.quickapp.cn/docCenter/post/69)

  `打开调试器 --> 点击"扫码安装"`，扫描终端窗口中的 `二维码` 即可完成配置

## 安装rpk包

- 1. 复制rpk包到手机中

      将 `/dist` 目录下编译产出的 `rpk包` 通过USB数据线或其他方式，复制到手机文件系统中

- 2. 本地安装rpk包
      `打开调试器 --> 点击"本地安装"`，选择手机文件系统中的rpk包，并自动唤起平台运行rpk包，查看效果


ps: 快应用调试器手机和电脑要同一网络

# 快应用（Quick App）

## 什么是 `快应用`

> 快应用也叫免安装应用，应用使用`前端技术栈`开发，`原生`渲染，同时具备H5页面和原生应用的双重优点。即点即用，享受原生应用的性能体验。

优势：

- 九大厂商（vivo、oppp、小米、华为、魅族、中兴、联想、努比亚、金立）支持
- 高效链接用户，低成本助力，流量高转化，厂家丰富，强留存用户，容易生存
- 使用前端技术栈，同样具备 HTML 5 与 Native App 的双重优势，用户使用微信小程序和快应用，也皆可以「即点即用」
- #### 免安装，免存储，一键直达，更新直接推送

## 如何开发 `快应用`

> ### 快应用面向所有类型开发者，提供快应用开发平台，开发工具，开发者可自行开发应用发布流程

流程：

![流程](./assets/process.png)

### 1. 环境搭建

- 安装 [Node.js](https://nodejs.org/en/) (6.0以上)
- 安装 `hap-toolkit`
  > hap-toolkit是快应用的开发者工具，帮助开发者通过命令行工具辅助开发工作的完成，主要包括创建模板工程，升级工程，编译，调试等功能。

  ```shell
  npm install -g hap-toolkit
  ```

- 安装 [快应用调试器](./software/quickapp_debugger.apk)
  > 调试器是一个Android应用程序，调试程序。扫码安装，本地安装，在线更新，开始调试

### 2. 项目初始化启动

- 初始化并启动

  ```shell
  # 初始化
  hap init <ProjectName>
  # 安装依赖
  npm i
  # 启动监听，自动编译
  npm run watch
  # 打包构建
  npm run build
  ```

  ps: 其他命令可在项目根目录的 `package.json` 中的 `script` 查看

  目录结构：

  ```
  ├── sign                      rpk包签名模块
  │   └── debug                 调试环境
  │       ├── certificate.pem   证书文件
  │       └── private.pem       私钥文件
  ├── src
  │   ├── Common                公用的资源和组件文件
  │   │   └── logo.png          应用图标
  │   ├── Demo                  页面目录
  │   |   └── index.ux          页面文件，可自定义页面名称
  │   ├── app.ux                APP文件，可引入公共脚本，暴露公共数据和方法等
  │   └── manifest.json         项目配置文件，配置应用图标、页面路由等
  └── package.json              定义项目需要的各种模块及配置信息
  ```

### 3. [生命周期](https://doc.quickapp.cn/tutorial/framework/lifecycle.html)
页面生命周期: 

| 生命周期 | 对应Vue的生命周期 | 描述 |
| ---- | ---- | ---- |
| onInit | created | `ViewModel` 的数据已经准备好
| onReady | mounted |`ViewModel` 模板已经编译完成
| onShow | activated | 页面被切换重新显示
| onHide | deactivated | 页面被切换隐藏
| onDestroy | destroyed | 页面被销毁时调用
| onBackPress | |  当用户点击`返回实体按键`、`左上角返回菜单`、`调用返回API`时触发该事件
| onMenuPress | | 当使用原生的顶部标题栏时

应用生命周期: 

| 生命周期 | 描述 |
| ---- | ---- |
| onCreate | 当应用创建时调用
| onDestroy | 当应用销毁时触发

### 4. [样式](https://doc.quickapp.cn/tutorial/framework/page-style-and-layout.html)

- 长度

> 框架目前仅支持长度单位 `px` 和 `%`,与传统web页面不同，px是相对于项目配置基准宽度的单位

100px * 1080px = x * 750px

设计稿1px / 设计稿基准宽度 = 框架样式1px / 项目配置基准宽度

- 选择器

  `内联样式`、`tag选择器`、`class选择器`、`id选择器`、`并列选择`、`后代选择器`

- 布局-flex

- 支持预编译

  `less`, `sass`


### 5. [指令](https://doc.quickapp.cn/tutorial/framework/framework-instructions.html)

| 指令 | 对应Vue的指令  | 描述 |
| ---- | ---- | ---- |
| for | v-for | 循环输出一个数组类型的数据
| if/elif/else | v-if/v-else-if/v-else | 是否增加或者删除组件
| show | v-show | 是否显示组件

### 6. [事件](https://doc.quickapp.cn/tutorial/framework/event-monitoring-and-triggering.html)

- $on | 监听 `ViewModel` 事件
- $off | 移除 `ViewModel` 事件
- $emit | 触发 `ViewModel` 事件
- \`on${事件名}\` | 监听原生组件事件
- $emitElement | 触发原生组件事件

| 通用事件 | 描述 |
| ---- | ---- |
| click | 组件被点击时触发
| longpress | 组件被长按时触发
| focus | 组件获得焦点时触发
| appear | 组件出现时触发
| disappear | 组件消失时触发
| swipe | 组件上快速滑动后触发 |

ps：[通用事件](https://doc.quickapp.cn/widgets/common-events.html)

### 7. [组件](https://doc.quickapp.cn/tutorial/framework/parent-child-component-communication.html)

| 组件 | 对应Vue | 描述 |
| ---- | ---- | ---- |
| block | template | 逻辑区块的组件，没有对应的 `Native` 组件
| slot | slot | 组件插槽

part1：
```html
<template>
  <div>
    <text>{{ header }}</text>
    <slot></slot>
    <text>{{ footer }}</text>
  </div>
</template>
```
page：
```html
<import name="part1" src="./part1"></import>
<template>
  <part1 class="component" header="{{header}}" footer="{{footer}}">
    <text>slot节点内容</text>
  </part1>
</template>
```

### 8. [组件通信](https://doc.quickapp.cn/tutorial/framework/parent-child-component-communication.html)

  #### 父子组件之间的通信

- props
  ```html
  <comp-part1 
    prop1="{{data1}}" 
    prop2-object="{{data2}}">
  </comp-part1>
  ```

- \`on${事件名}\` / $emit

  ```html
  <comp-part1 onevt-type3="evtTypeHandler">
  </comp-part1>
  ```

  ```js
  $emit('evtType3')
  ```

- $on / $dispatch

  向上传递：子组件触发，父组件响应

  当传递结束后，可以调用evt.stop()来结束传递

- $broadcast / $on

  向下传递：父组件触发，子组件响应

  当传递结束后，可以调用evt.stop()来结束传递

  #### 兄弟组件之间的通信

  > 传统的兄弟等非父子组件之间通信，是通过Publish/Subscribe模型来完成

  子组件Sub端：part1

  ```html
  <script>
    export default {
      processMessage (msg) {
      },
      /**
       * 通过events对象：绑定事件
       */
      events: {
        customEventInVm2 (evt) {
        }
      }
    }
  </script>
  ```

  父组件：

  ```html
  <import name="comp-part2" src="./part2"></import>
  <import name="comp-part3" src="./part3"></import>

  <template>
    <div class="tutorial-page">
      <!-- 兄弟VM通信 -->
      <comp-part2 id="sibling1"></comp-part2>
      <comp-part3 id="sibling2"></comp-part3>
    </div>
  </template>

  <style lang="less">
  </style>

  <script>
    // 父组件
    export default {
      onReady () {
        this.establishRef()
      },
      /**
       * 建立相互VM的引用
       */
      establishRef () {
        const siblingVm1 = this.$vm('sibling1')
        const siblingVm2 = this.$vm('sibling2')

        siblingVm1.parentVm = this
        siblingVm1.nextVm = siblingVm2
        siblingVm2.parentVm = this
        siblingVm2.previousVm = siblingVm1
      }
    }
  </script>
  ```

  子组件Pub端：part2
  ```html
  <script>
    // 子组件: part3
    export default {
      sendMesssage () {
        if (this.previousVm) {
          // Way1. 调用方法
          this.previousVm.processMessage('兄弟之间通信的消息内容')
          // Way2. 触发事件
          this.previousVm.$emit('customEventInVm2', '兄弟之间通信的消息内容')
        }
      }
    }
  </script>
  ```

### 9. 页面路由切换、页面参数传递

#### 切换页面

```html
<template>
  <div class="tutorial-page">
    <!-- 以'/'开头的应用内页面的路径 -->
    <a href="/PageParams/receiveparams">跳转到接收参数页面</a>
    <!-- 以非'/'开头的应用内页面的名称 -->
    <a href="PageParams/receiveparams">跳转到接收参数页面</a>
    <!-- 特殊的,如果uri的值是'/',则跳转到path为'/'的页,没有则跳转到首页-->
    <a href="/">跳转到首页</a>
  </div>
</template>
```

#### 传参

```html
<template>
  <div class="tutorial-page">
    <!-- 添加参数 -->
    <a href="/PageParams/receiveparams?key=Hello, world!">携带参数key1跳转</a>
    <!-- 添加变量参数 -->
    <a href="/PageParams/receiveparams?key={{title}}">携带参数key2跳转</a>
  </div>
</template>

```

#### 接口router切换页面

```js
// 导入模块
import router from '@system.router'

export default {
  routePagePush () {
    // 跳转到应用内的某个页面
    router.push({
      uri: '/PageParams/receiveparams'
    })
  },
  routePageReplace () {
    // 跳转到应用内的某个页面，当前页面无法返回
    router.replace({
      uri: '/PageParams/receiveparams'
    })
  },
  routePageBack () {
    // 返回上一页面
    router.back()
  },
  routePageClear () {
    // 清空所有历史页面记录，仅保留当前页面
    router.clear()
  }
}
```

#### 接口router传递参数

```js
router.push({
  uri: '/PageParams/receiveparams',
  params: { key: this.title }
})
```

#### 页面接收参数

```js
export default {
  protected: {
    key: ''
  },
  onInit () {
    // js中输出页面传递的参数
    console.info('key: ' + this.key)
  }
}
```

### 10. [script脚本](https://doc.quickapp.cn/framework/script.html)


## 底层接口

  - 界面交互
    - 分享
    - 弹窗
    - 打开网页
    - 通知消息
    - 震动

  - 网络访问
    - 上传下载
    - 数据请求

  - 文件存储
    - 数据存储
    - 文件储存

  - 系统能力
    - 二维码
    - 传感器
    - 剪贴板
    - 地理位置
    - 桌面图标
    - 日历事件
    - 网络状态
    - 设备信息
    - 屏幕亮度
    - 系统音量
    - 电量信息
    - 应用管理
    - 录音
    - 联系人
    - 发送短信

  - 安全
    - 密码算法（rsa）

  - 图形图像
    - 多媒体
    - 图片编辑

  - 声音音频
    - 音频

  - 厂商服务
    - 推送
    - 支付
    - 统计
    - 账号

  - 第三方服务
    - 微信支付
    - 支付宝支付
    - 第三方分享 
    - QQ账户
    - 微信账户
    - 微博账户



## 调试

- 日志输出
  > 打开工程根目录下的src文件夹的manifest.json，找到config配置，将logLevel修改为最低级别debug，即：允许所有级别的日志输出

  ```json
  {
  　"config": {
    　　"logLevel": "debug"
    }
  }
  ```

  ```js
  console.debug('debug')
  console.log('log')
  console.info('info')
  console.warn('warn')
  console.error('error')
  ```

- 远程调试

  > 远程调试指的是通过 **快应用调试器**、**hap-toolkit的远程调试命令** 、**chrome devtools调试界面**，来调试手机app端的页面

  ```shell
  # 启动http调试服务器
  npm run server
  ```

## 坑。。。

- 构建
  1. `watch` 只会监听页面变化，`manifest`、`增加图片` 不会刷新

- 样式
  1. 底层转换，复杂样式无法实现

- 语法
  1. 需要手动配置支持相关高级语法

- 组件

  1. 通信：`vue` 的老一套套路（`$dispatch`, `$broadcast`），组件嵌套复杂通信困难麻烦
  2. 系统组件库功能部分功能设计不好

- 页面路由切换
  1. params参数的每个字段值都会被序列化成字符串
  2. 页面返回回传参数简直无法理解

- 调试
  1. 对写惯前端热加载来说，发狂，调试器断连、崩溃问题
  2. 调试模式模拟 `chrome devtool`，界面模拟，功能没有！
  3. 控制台 `console` 不会显示 `object` 详情
  4. 此处应该要有个ide...

- 莫名其妙出现莫名其妙的报错。。。

相关链接：

- [快应用官网](https://www.quickapp.cn/)
- [开发文档](https://doc.quickapp.cn/)
- [awesome-quickapp](https://github.com/quickappdev/awesome-quickapp)
- [v2ex-quickapp](https://github.com/wotermelon/v2ex-quickapp)