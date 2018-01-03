Page({
  data: { // 参与页面渲染的数据
    presentNum: 37,
  },


  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
    })
    //console.log(this.data.classInfo);
    wx.setStorageSync("nextUrl", './RandomRollCallUI?classId=' + this.data.classInfo.id);
    wx.setStorageSync("id", this.data.classInfo.id);
  },



  RollCallListUI: function () {
    wx.navigateTo({
      url: './RollCallListUI?classId=' + this.data.classInfo.id,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  RandomEndRollCallUI: function () {
    var that = this;
    wx.showModal({
      title: '注意',
      content: '确定要结束签到吗？',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: './RandomEndRollCallUI?classId=' + that.data.classInfo.id,
            success: function () {
              var IPPort = getApp().globalData.IPPort;
              var message = "";
              wx.request({
                url: IPPort + '/class/' + that.data.classInfo.id + '/seminar/' + wx.getStorageSync('seminarId') + '/location?status=0',
                method: 'PUT',
                header: {
                  Authorization: 'Bearer ' + wx.getStorageSync('jwt')
                },
                data: { "calling": -1 },
                success: function (data) {
                }
              });
            },

          })
        }
      }
    })
  },


  onShow: function () {
    this.setData({
      time: 0
    })
    this.requestData(this)
  },

  onUnload: function () {
    //console.log('2222222222222222')
    this.setData({
      time: -2
    })
  },

  requestData: function (that) {
    if (that.data.time <= -1)
      return
    setTimeout(function () {
      that.setData({
        time: that.data.time + 1,
      })
      var IPPort = getApp().globalData.IPPort;
      var message = "";
      wx.request({
        url: IPPort + "/seminar/" + wx.getStorageSync("seminarId") + "/class/" + that.data.classInfo.id + "/attendance",
        header: {
          Authorization: 'Bearer ' + wx.getStorageSync('jwt')
        },
        method: 'GET',
        success: function (data) {
          that.setData({
            presentNum: data.data.numPresent,
          })
        }
      });
      that.requestData(that);
    }, getApp().globalData.time_span_call);
  },

})