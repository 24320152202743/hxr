Page({
  data: { // 参与页面渲染的数据
    presentNum:'',
  },
  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      presentNum: options.presentNum,
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
})