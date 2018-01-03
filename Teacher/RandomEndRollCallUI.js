Page({
  data: { // 参与页面渲染的数据
    presentNum:'',
  },
  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
    wx.setStorageSync("nextUrl", './RandomEndRollCallUI?classId=' + this.data.classInfo.id);
    wx.setStorageSync("id", this.data.classInfo.id);
  },

  GroupInfoUI1: function () {
    wx.navigateTo({
      url: './GroupInfoUI1?classId=' + this.data.classInfo.id,
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
        method: 'GET',
        success: function (data) {
          that.setData({
            presentNum: data.data.numPresent,
          })
        }
      });
      that.requestData(that);
    }, getApp().globalData.time_span_end_call);
  },


})