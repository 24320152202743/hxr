Page({
  data: { // 参与页面渲染的数据
    classInfo: {
      "id": 23,
      "name": "周三1-2节",
      "numStudent": 120,
      "time": "周三一二节",
      "site": "海韵201",
      "calling": -1,
      "roster": "/roster/周三12班.xlsx",
      "proportions": {
        "report": 50,
        "presentation": 50,
        "c": 20,
        "b": 60,
        "a": 20
      }
    }
  },
  onLoad: function () {
    var that = this;
    // 页面渲染后 执行
    wx.setStorageSync("classInfo", that.data.classInfo);
    // 页面渲染后 执行
  },
  RandomRollCallUI: function () {
    wx.redirectTo({
      url: './RandomRollCallUI',
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