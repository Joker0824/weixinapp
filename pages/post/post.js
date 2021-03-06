// pages/posts/post.js
import newsList from "../../data/post-data"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hello: "hello world"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(newsList)
    this.setData({ newsList })
    var appInst = getApp()
    console.log(appInst.globalData.isPlayingMusic)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("onShareAppMessage")
  },
  /**
   * postItem被点击
   */
  onPostItemTap: function(event) {
    // 获取点击的是哪一个postitem
    let postId = event.currentTarget.dataset.postId
    wx.navigateTo({
      url: "/pages/post/post-detail/post-detail?postId=" + postId,
      success: result => {},
      fail: () => {},
      complete: () => {
        console.log("complete")
      }
    })
  },
  /**
   * SwiperItem被点击
   */
  onSwiperItemTap: function(event) {
    // 获取点击的是哪一个swiperitem,target指被点击的对象
    let postId = event.target.dataset.postId
    debugger
    wx.navigateTo({
      url: "/pages/post/post-detail/post-detail?postId=" + postId,
      success: result => {},
      fail: () => {},
      complete: () => {
        console.log("complete")
      }
    })
  }
})
