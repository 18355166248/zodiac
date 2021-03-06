// pages/problem/problem.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: '',
    list: [],
    bool: true,
    data: ['锦鲤附体', '钱多事少离家近', '欧气爆棚', '一次拍到牌照', '逢奖必中',
      '猴有钱', '一夜暴富', '告别母胎solo', '远离渣男', '和爱豆官宣恋情',
      '和喜欢的人在一起', '升职加薪', '成为offer收割机', '不做加班狗', '逢考必过',
      '发际线回春', '躺瘦'
    ],
    bomListOne: [{
      width: 258,
      top: 0,
      left: '133rpx',
      font: '30rpx',
      txtW: '150rpx',
      active: false
    }, {
      width: 228,
      top: '60rpx',
      left: '406rpx',
      font: '28rpx',
      txtW: '140rpx',
      active: false
    }, {
      width: 210,
      top: '300rpx',
      left: '402rpx',
      font: '25rpx',
      txtW: '125rpx',
      active: false
    }, {
      width: 176,
      top: '281rpx',
      left: '209rpx',
      font: '20rpx',
      txtW: '100rpx',
      active: false
    }],
    bomListTwo: [{
      width: 258,
      top: 0,
      left: '133rpx',
      font: '30rpx',
      txtW: '150rpx',
      active: false
    }, {
      width: 228,
      top: '60rpx',
      left: '406rpx',
      font: '28rpx',
      txtW: '140rpx',
      active: false
    }, {
      width: 210,
      top: '289rpx',
      left: '311rpx',
      font: '25rpx',
      txtW: '125rpx',
      active: false
    }],
    disabled: true,
    focus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.onQuery()
    this.loadFont()
  },

  onQuery: function () {
    var count = this.data.data.length
    let list = [],
      arr = []
    let num = this.data.bool ? 4 : 3
    this.setData({
      list: []
    })
    arr = this.data.data.map((v, i) => i)
    for (var i = 0; i < num; i++) {
      var sub = Math.random() * arr.length
      sub = Math.floor(sub)
      list.push(arr[sub])
      arr.splice(sub, 1)
    }

    for (var i = 0; i < list.length; i++) {
      list[i] = {ques: this.data.data[list[i]]}
    }

    if (list.length === 4) {
      list = list.map((v, i) => {
        return Object.assign(v, this.data.bomListOne[i])
      })
    } else {
      list = list.map((v, i) => {
        return Object.assign(v, this.data.bomListTwo[i])
      })
    }
    num =Math.floor(Math.random() * num)
    list[num].active = true
    this.setData({
      list,
      txt: list[num].ques,
      bool: !this.data.bool
    })
  },

  toggle(e) {
    if (!e.currentTarget.dataset.active) {
      let list = this.data.list
      const index = e.currentTarget.dataset.type
      list.forEach((v, i) => {
        v.active = false
      })
      list[index].active = true
      this.setData({
        list,
        txt:list[index].ques,
        disabled: true})
    }
  },
  // 自定义问题
  showBlur() {
    this.setData({
      txt: '',
      focus: true,
      disabled: false
    })
  },
  // 下一步
  nextStep() {
    wx.setStorage({
      key: 'ques',
      data: this.data.txt,
    })
    wx.navigateTo({
      url: '/pages/select/select'
    })
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

    /**
     * 生命周期函数--监听页面显示
     */
  },
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