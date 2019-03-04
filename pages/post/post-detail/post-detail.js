// pages/post/post-detail/post-detail.js
import postsData from "../../../data/post-data"
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 文章是否被收藏
    collected: false,
    postId: Number,
    postData: {},
    // 是否正在播放音乐
    isPlayingMusic: false,
    // 音乐播放对象
    backAudioManager: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    var _this = this
    // 获取背景音乐管理对象
    var backAudioManager = wx.getBackgroundAudioManager()
    // 获取路由传递的参数
    this.data.postId = option.postId
    // 从本地数据库post-data查找postId对应的数据
    let postData = postsData[this.data.postId]
    // 设置post-detail数据
    this.setData({ postData })
    var postsCollected = wx.getStorageSync("postsCollected")
    // 获取收藏的postid对象
    if (postsCollected && postsCollected[this.data.postId]) {
      this.setData({ collected: true })
    }
    this.setData({ backAudioManager })
    if (
      app.globalData.app_isPlayingMusic &&
      app.globalData.app_currentMusicPostId === this.data.postId
    ) {
      this.setData({ isPlayingMusic: true })
    }
    this.setBackAudioLister(backAudioManager, this)
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
  /**
   * 用户点击收藏
   */
  onColletionTap: function() {
    this.setData({ collected: !this.data.collected })
    var postsCollected =
      wx.getStorageSync("postsCollected") !== ""
        ? wx.getStorageSync("postsCollected")
        : {}
    postsCollected[this.data.postId] = this.data.collected
    wx.setStorageSync("postsCollected", postsCollected)
    this.showToast()
  },
  showToast: function() {
    var _this = this
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
  },
  /**
   * 用户点击分享
   */
  onShareTap: function() {
    console.log("share")
    wx.showActionSheet({
      itemList: ["A", "B", "C"],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {}
    })
  },
  /**
   * 音乐播放
   */
  onMusicTap: function() {
    var music = postsData[this.data.postId].music
    // 全局变量保存音乐信息
    var backAudioManager = this.data.backAudioManager
    if (!this.data.isPlayingMusic) {
      backAudioManager.src = music.url
      backAudioManager.title = music.title
      backAudioManager.coverImgUrl = music.coverImg
      this.setData({ isPlayingMusic: !this.data.isPlayingMusic })
      backAudioManager.play()
    } else {
      this.setData({ isPlayingMusic: !this.data.isPlayingMusic })
      backAudioManager.pause()
    }
  },
  /**
   * 监听后台音乐播放
   */
  setBackAudioLister: function(backAudioManager, _this) {
    // 监听后台背景音乐暂停
    backAudioManager.onPause(function() {
      _this.setData({ isPlayingMusic: false })
      app.globalData.app_isPlayingMusic = false
      app.globalData.app_currentMusicPostId = null
    })
    // 监听后台背景音乐播放
    backAudioManager.onPlay(function() {
      _this.setData({ isPlayingMusic: true })
      app.globalData.app_isPlayingMusic = true
      app.globalData.app_currentMusicPostId = _this.data.postId
    })
  }
})
