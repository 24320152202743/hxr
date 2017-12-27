Page({
  data: { // 参与页面渲染的数据
    presentNum:0,
  },
  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
    })
    wx.setStorageSync("nextUrl", './FixedEndRollCallUI?classId=' + this.data.classInfo.id);
    wx.setStorageSync("id", this.data.classInfo.id);
  },
  FixedRollCallEndUI1: function () {
    var that = this;
    wx.navigateTo({
      url: './FixedRollCallEndUI1?classId='+that.data.classInfo.id,
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
  FixedGroupInfoUI: function () {
    var that = this;
    wx.navigateTo({
      url: './FixedGroupInfoUI?classId=' + that.data.classInfo.id,
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

  onHide: function () {
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
      requestData(that);
    }, 1000);
  },

})