Page({
  data: { // 参与页面渲染的数据
    presentNum:0,
  },
  onLoad: function (option) {
    wx.setStorageSync("nextUrl", './FixedEndRollCallUI?ClassId=')
    this.setData({
      classInfo: wx.getStorageSync("classInfo"),
      presentNum: option.presentNum,
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
  },
  FixedRollCallEndUI1: function () {
    wx.navigateTo({
      url: './FixedRollCallEndUI1',
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
    wx.navigateTo({
      url: './FixedGroupInfoUI',
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