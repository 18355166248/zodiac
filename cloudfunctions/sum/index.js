// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  let list = await db.collection('list').get({
    success: function (res) {
      // res.data 包含该记录的数据
      return res.data
    }
  })
  let { OPENID, APPID } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的
  return {
    sum: event.a + event.b,
    openid: OPENID,
    list
  }
}