//app.js
App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'jiang-fe6b92',
        traceUser: true,
      })
      this.globalData = {
        isIpx: false,
        userInfo: {}
      }
      const that = this

      // 获取设备信息
      wx.getSystemInfo({
        success(res) {
          var name = 'iPhone X'
          if (res.model.indexOf(name) > -1) {
            that.globalData.isIpx = true
          }
        }
      })
    }
  },
  onGetOpenid: function() {
    // 调用云函数
    const that = this
    wx.cloud.callFunction({
      name: 'sum',
      data: {},
      success: res => {
        that.globalData.list = res.result.list
        console.log(that.globalData.list)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
})