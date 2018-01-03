//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.login({
      success: function (res) {

        console.log(res.code);
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://120.77.173.98:8111/signin',
            method: "GET",
            data: {
              code: res.code
            },
            success: function (data) {
              // console.log(data)
              wx.setStorageSync('openid', data.data.openid);
              if (data.data.jwt == null) {
                wx.reLaunch({
                  url: '../common/ChooseCharacter',
                })

              }
              else {
                wx.setStorageSync("jwt", data.data.jwt)
                that.globalData.userid = data.data.id;
                that.globalData.usertype = data.data.type;
                that.globalData.username = data.data.name;
                //console.log('usertype', that.globalData.usertype)
                if (that.globalData.usertype == 'teacher') {
                  wx.reLaunch({
                    url: '../Teacher/TeacherMainUI',
                  })
                }
                else {
                  wx.setStorageSync("studentId", that.globalData.userid);
                  wx.reLaunch({
                    url: '../Student/StudentMainUI',
                  })
                }
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})
