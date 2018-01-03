//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
  var that=this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function (res) {

        console.log(res.code);
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://120.77.173.98:8111/signin',
            method:"GET",
            data: {
              code: res.code
            },
            success:function(data){
              // console.log(data)
              wx.setStorageSync('openid', data.data.openid);
              if(data.data.jwt==null)
              {
                wx.reLaunch({
                  url: '../common/ChooseCharacter',
                })

              }
              else{
                wx.setStorageSync("jwt", data.data.jwt)
                that.globalData.userid = data.data.id;
                that.globalData.usertype = data.data.type;
                that.globalData.username = data.data.name;
                //console.log('usertype', that.globalData.usertype)
                if (that.globalData.usertype =='teacher')
                {
                  wx.reLaunch({
                    url: '../Teacher/TeacherMainUI',
                  })
                }
                else{
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

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    IPPort: "http://localhost:8080",
    // IPPort: "http://120.77.173.98:8111",
    userid:"",
    usertype:"",
    username:"",
    time_span_seminar:1000,
    time_span_group:1000,
    time_span_topic:1000,
    time_span_call:1000,
    time_span_end_call:1000,
  }
})