Page({
  data: { // 参与页面渲染的数据
    presentNum:'',
  },
  onLoad: function (option) {
    // 页面渲染后 执行
    this.setData({
      classInfo: wx.getStorageSync("classInfo"),
      presentNum: option.presentNum,
    })
  },

  GroupInfoUI1: function () {
    wx.navigateTo({
      url: './GroupInfoUI1',
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