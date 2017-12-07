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
    var that = this;
    wx.showModal({
      title: '注意',
      content: '确定要结束签到吗？',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: './RandomEndRollCallUI?presentNum=' + that.data.presentNum,
            success: function () {
              // success
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        }
        else {
          console.log("asd");
        }
      }
    })
  },

})