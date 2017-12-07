Page({
  data: { // 参与页面渲染的数据
    presentNum: 37,
  },
  onLoad: function () {
    wx.setStorageSync("nextUrl", './FixedRollCallUI?ClassId=')
    this.setData({
      classInfo: wx.getStorageSync("classInfo"),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
  },
  FixedEndRollCallUI: function () {
    var that = this;
    wx.showModal({
      title: '注意',
      content: '确定要结束签到吗？',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: './FixedEndRollCallUI?presentNum=' + that.data.presentNum,
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
        else{
          console.log("asd");
        }
      }})
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