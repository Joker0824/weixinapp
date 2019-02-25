// pages/posts/post.js
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
    let newsList = [
      {
        userAvatar: "/images/avator.png",
        imgSrc: "/images/newbg.jpg",
        newsText:
          "中新网客户端2月25日电(姚露) 10406亿元！25日A股放出天量成交额，重回2015年牛市水平。盘面上，资金做多热情继续高涨，两市仅13只个股下跌，42只券商股罕见集体涨停。截至收盘，沪指报2961.28点，涨5.6%；深成指报9134.58点，涨5.59%；创指报1536.37点，涨5.5%。三大股指不只继续收复关键的整数关口，还均重新站上年线。",
        newsDate: "2019-02-25"
      },
      {
        userAvatar: "/images/avator.png",
        imgSrc: "/images/newbg.jpg",
        newsText:
          "中新网客户端2月25日电(姚露) 10406亿元！25日A股放出天量成交额，重回2015年牛市水平。盘面上，资金做多热情继续高涨，两市仅13只个股下跌，42只券商股罕见集体涨停。截至收盘，沪指报2961.28点，涨5.6%；深成指报9134.58点，涨5.59%；创指报1536.37点，涨5.5%。三大股指不只继续收复关键的整数关口，还均重新站上年线。",
        newsDate: "2019-02-25"
      },
      {
        userAvatar: "/images/avator.png",
        imgSrc: "/images/newbg.jpg",
        newsText:
          "中新网客户端2月25日电(姚露) 10406亿元！25日A股放出天量成交额，重回2015年牛市水平。盘面上，资金做多热情继续高涨，两市仅13只个股下跌，42只券商股罕见集体涨停。截至收盘，沪指报2961.28点，涨5.6%；深成指报9134.58点，涨5.59%；创指报1536.37点，涨5.5%。三大股指不只继续收复关键的整数关口，还均重新站上年线。",
        newsDate: "2019-02-25"
      },
      {
        userAvatar: "/images/avator.png",
        imgSrc: "/images/newbg.jpg",
        newsText:
          "中新网客户端2月25日电(姚露) 10406亿元！25日A股放出天量成交额，重回2015年牛市水平。盘面上，资金做多热情继续高涨，两市仅13只个股下跌，42只券商股罕见集体涨停。截至收盘，沪指报2961.28点，涨5.6%；深成指报9134.58点，涨5.59%；创指报1536.37点，涨5.5%。三大股指不只继续收复关键的整数关口，还均重新站上年线。",
        newsDate: "2019-02-25"
      }
    ]
    this.setData({ newsList })
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
  }
})
