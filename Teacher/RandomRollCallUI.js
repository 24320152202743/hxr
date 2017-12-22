Page({
  data: { // 参与页面渲染的数据
    presentNum: 37,
  },
  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
    })
    console.log(this.data.classInfo);
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
            url: './RandomEndRollCallUI?presentNum=' + that.data.presentNum + "&classId=" + that.data.classInfo.id,
            success: function () {
              var IPPort = getApp().globalData.IPPort;
              var message = "";
              wx.request({
                url: IPPort + '/class/' + that.data.classInfo.id,
                method: 'PUT',
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

})