Page({
  data: { // 参与页面渲染的数据
    presentNum: 37,
  },
  onLoad: function () {
    wx.setStorageSync("nextUrl", './RandomRollCallUI?ClassId=')
    this.setData({
      classInfo: wx.getStorageSync("classInfo"),
    })
  },
  RollCallListUI: function () {
    wx.navigateTo({
      url: './RollCallListUI',
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
    wx.redirectTo({
      url: 'RandomEndRollCallUI?presentNum=' + this.data.presentNum,
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