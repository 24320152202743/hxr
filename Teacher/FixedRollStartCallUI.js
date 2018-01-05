Page({
  data: { // 参与页面渲染的数据
   classInfo: {
    
    
  },
   seminarId: 1,
   callingStatus:"",
  },
  onLoad: function (options) {
    
    var that = this;
    // 页面渲染后 执行
    that.setData({
      ["classInfo.id"]: options.classId,
      seminarId: options.seminarId,
    })
    wx.setStorageSync("seminarId", this.data.seminarId);
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.request({
      url: IPPort + '/class/' + options.classId,
      method: 'GET',
      //data:this.data.info,
      success: function (data) {
        that.setData({
          classInfo: data.data,
        })
       
      }
    });
    var k = '/seminar/' + that.data.seminarId + '/class/' + that.data.classInfo.id + '/attendance';
      wx.request({
      url: IPPort + k,
        method: 'GET',
        //data:this.data.info,
        success: function (data) {
          that.setData({
            callingStatus: data.data,
          })

        }
      }),
        wx.setStorageSync("nextUrl", './FixedRollStartCallUI?classId=' + this.data.classInfo.id);
      wx.setStorageSync("id", this.data.classInfo.id);
  },

  
  FixedRollCallUI: function () {
    wx.setStorageSync("classInfo"+this.data.classInfo.id, this.data.classInfo);
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.redirectTo({
      url: './FixedRollCallUI?classId='+that.data.classInfo.id,
      success: function () {
        
        wx.request({
          url: IPPort + '/class/' + that.data.classInfo.id,
          method: 'PUT',
          data: { "calling": that.data.seminarId },
          success: function (data) {
          }
        });
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
    wx.setStorageSync("classInfo" + this.data.classInfo.id, this.data.classInfo);
    wx.navigateTo({
      url: './FixedGroupInfoUI?seminarId=' + this.data.seminarId + '&classId=' + this.data.classInfo.id,
      success: function () {
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