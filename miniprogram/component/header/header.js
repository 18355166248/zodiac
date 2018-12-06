// component/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    txt: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  created: function() {
    const that = this
  
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log(res)
        that.setData({
          userUrl: res.data.avatarUrl,
          userName: res.data.nickName
        })
      },
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
