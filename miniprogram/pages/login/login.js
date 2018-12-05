// pages/login/login.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { num: 1 },
      { num: 2 },
      { num: 3 },
      { num: 4 },
      { num: 5 },
      { num: 6 },
      { num: 1 },
      { num: 2 },
      { num: 3 },
      { num: 4 },
      { num: 5 },
      { num: 6 }
    ],
    btnStyle: '0',
    animation1: true,
    bgcPo: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      btnStyle: app.globalData.isIpx ? '120rpx' : '33rpx'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setTimer()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.clearTimer()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.clearTimer()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clearTimer: function () {
    clearInterval(this.timer)
    this.timer = null
  },
  setTimer: function () {
    this.changeBg()
    // 定时器
    this.timer = setInterval(this.changeBg, 4000)
  },
  changeBg: function () {
    const that = this
    this.data.list.forEach((v, i) => {
      let index = i
      setTimeout(() => {
        that.setData({
          bgcPo: - 150 * index + 'rpx'
        })
      }, 4000 * (8.3 * index / 100))
    })
  },
  // 获取用户信息
  getUser: function(e) {
    if (e.detail.errMsg.indexOf('ok') > -1) {
      app.globalData.userInfo = e.detail.userInfo
      wx.navigateTo({
        url: '/pages/problem/problem',
      })
    }
  }
})