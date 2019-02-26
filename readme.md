### 微信小程序

#### 1.分辨率

- 设计图 `Iphone6` 的尺寸 `750X1334`
- `rpx（responsive pixel）`: 可以根据屏幕宽度进行自适应。规定屏幕宽为 `750rpx`。如在 `iPhone6` 上，屏幕宽度为 `375px`，共有 `750` 个物理像素，则 `750rpx = 375px = 750` 物理像素(设计图)，`1rpx = 0.5px = 1 物理像素(设计图)`。

#### 2.页面配置（`app.json`)

- 启动小程序默认显示页面，配置 `page` 数组的第一个选项

#### 3.数据绑定

- 绑定 `false` 值时,要使用`{{false}}`,因为会把双引号里的非空值解析成 `true`
- `this` 指向 `page` 页面

#### 4.事件

- 绑定事件
  - `bindtouchstart`
  - `bind:touchstart`
- 阻止冒泡
  - `catch:tap`

#### 5.路由跳转

- `navigateTo`
  > 跳转到子级页面,可以返回,当前页面触发 `onHide` 钩子,使用绝对路径
  ```javascript
  wx.navigateTo({
    url: "/pages/post/post-detail/post-detail",
    success: result => {},
    fail: () => {},
    complete: () => {
      console.log("complete")
    }
  })
  ```
  - 接收参数
    > 可以在目标页面的 `onLoad` 钩子的参数中获取打开当前页面路径中的参数。
    ```javascript
     onLoad: function(options) {
        console.log(options.postId)
      }
    ```
- `redirectTo`
  > 跳转到新页面,不能返回,当前页面触发 `onUnload` 钩子

#### 6.引用文件

- `import`
  > 导入模版
  ```html
  <import src="post-item/post-item.wxml" />
  ```
- 使用`@import` 语句可以导入外联样式表

#### 7.生命周期

- `onload`
  > 在 `onload` 钩子中,异步绑定数据使用 `this.setData({postData})`;不需要异步绑定使用 `this.data.postData=postData`
