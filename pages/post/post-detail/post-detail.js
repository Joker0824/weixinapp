// pages/post/post-detail/post-detail.js
import postsData from "../../../data/post-data"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 文章是否被收藏
    collected: false,
    postId: Number,
    postData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    // 获取路由传递的参数
    this.data.postId = option.postId
    // 从本地数据库post-data查找postId对应的数据
    let postData = postsData[this.data.postId]
    this.setData({ postData })
    var postsCollected = wx.getStorageSync("postsCollected")
    if (postsCollected && postsCollected[this.data.postId]) {
      this.setData({ collected: true })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {},
  // 用户点击收藏
  onColletionTap: function() {
    this.setData({ collected: !this.data.collected })
    var postsCollected =
      wx.getStorageSync("postsCollected") !== ""
        ? wx.getStorageSync("postsCollected")
        : {}
    postsCollected[this.data.postId] = this.data.collected
    wx.setStorageSync("postsCollected", postsCollected)
    wx.showToast({
      title: this.data.collected ? "收藏成功" : "已取消收藏",
      icon: "success",
      image: "",
      duration: 1000,
      mask: false,
      success: result => {},
      fail: () => {},
      complete: () => {}
    })
  }
})
