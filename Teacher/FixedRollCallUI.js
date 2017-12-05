Page({
  data: { // 参与页面渲染的数据
  presentNum:37,
  },
  onLoad: function () {
    this.setData({
      classInfo: wx.getStorageSync("classInfo"),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
  },
  FixedEndRollCallUI: function () {
    wx.redirectTo({
      url: './FixedEndRollCallUI?presentNum='+this.data.presentNum,
      success: function () {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })},

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

  RollCallListUI: function () {
    wx.navigateTo({
      url: './RollCallListUI',
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
  },


})