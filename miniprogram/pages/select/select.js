// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseurl: 'https://6a69-jiang-fe6b92-1257723898.tcb.qcloud.la/',
    index: '1',
    list: [
      {url: 'p1', active: true, url2: 'activep1' },
      {url: 'p2', active: false, url2: 'activep2' },
      {url: 'p3', active: false, url2: 'activep3' },
      {url: 'p4', active: false, url2: 'activep4' },
      {url: 'p5', active: false, url2: 'activep5' },
      {url: 'p6', active: false, url2: 'activep6' },
      {url: 'p7', active: false, url2: 'activep7' },
      {url: 'p8', active: false, url2: 'activep8' },
      {url: 'p9', active: false, url2: 'activep9' },
      {url: 'p10', active: false, url2: 'activep10' },
      {url: 'p11', active: false, url2: 'activep11' },
      {url: 'p12', active: false, url2: 'activep12'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadFont()
  },

  // 加载字体
  loadFont() {
    wx.loadFontFace({
      family: 'Song',
      source: 'url("https://upload.cdn.be-xx.com/12fresh/hkwt.TTF")',
      fail(res) {
        console.log('加载失败')
      },
    })
  },
  toggle(e) {
    const list = this.data.list, index = e.currentTarget.dataset.type, active = e.currentTarget.dataset.active
    if (active) return
    list.forEach((v, i) => {
      v.active = false
    })
    list[index].active = true
    this.setData({
      list,
      index: index+1
    })
  },
  nextStep() {
    const r1 = this.data.index > 9 ? this.data.index : '0' + this.data.index
    wx.setStorage({
      key: 'r1',
      data: r1
    })
    wx.navigateTo({
      url: '/pages/full/full'
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})