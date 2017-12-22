Page({
  data: { // 参与页面渲染的数据
    presentNum:0,
  },
  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      presentNum: options.presentNum,
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

})