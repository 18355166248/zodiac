// pages/full/full.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: 'https://6a69-jiang-fe6b92-1257723898.tcb.qcloud.la/',
    txt2: '',
    data: {},
    ques: '',
    imgNum: null,
    list: [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    showTwo: false,
    showThree: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadFont()
    this.getXY()
    var r1 = String(wx.getStorageSync('r1'))
    var ques = wx.getStorageSync('ques')
    const db = wx.cloud.database()
    db.collection('question').where({
      r1,
      ques
    }).get().then(res => {
      console.log(res)
      this.setData({
        data: res.data[0],
        imgNum: Number(r1),
        txt2: res.data[0].name + '座的',
        ques
      })
    })
  },
  // 求坐标
  getXY() {
    let list = this.data.list
    const xCenter = 300, yCenter = 250, R = 250

    const deg = 360 / this.data.list.length
    const r1 = wx.getStorageSync('r1') - 1
    this.data.list.forEach((v,i) => {
      let angle = (i * deg - 90 - 30 * r1 ) * Math.PI / 180
      let x = Math.cos(angle) * R + xCenter
      let y = Math.sin(angle) * R + yCenter
      list[i].x = x
      list[i].y = y
    })
    this.setData({list})
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