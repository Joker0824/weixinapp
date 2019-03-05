Page({
  onTap: function(event) {
    // wx.navigateTo({
    //     url:"../posts/post"
    // });

    wx.switchTab({
      url: "../post/post"
    })
  },
  onReachBottom: function(event) {
    console.log("asfasdfa")
  }
})
