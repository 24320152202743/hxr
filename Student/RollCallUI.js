// zjgCSS/StudentRollCallUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seminarDetail: {
    },
    message: "",
    classid:"",
    hasCalled:false,
    isLate : false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var IPPort = getApp().globalData.IPPort;
    var seminarid = options.seminarId;
    this.setData({
      hasCalled:false,
      classid: options.classId,
      isLate:false,
    })
    


    var that = this;
    wx.request({
     url: IPPort+'/seminar/'+ seminarid+'/detail',
     method:'GET',
     header: {
       Authorization: 'Bearer ' + wx.getStorageSync('jwt')
     },
     success: function (data) {
       wx.setStorageSync("seminarDetail", that.data.seminarDetail);
       console.log(data.data);
       var DATE = new Date(data.data.startTime);
       var date = DATE.toLocaleString();
       data.data.startTime = date;

       var DATE = new Date(data.data.endTime);
       var date = DATE.toLocaleString();
       data.data.endTime = date;
       that.setData({
         seminarDetail:data.data
       })
     }
   })
    try {
      var isLate = wx.getStorageSync("isLate" + that.data.seminarDetail.id);
      var hasCalled = wx.getStorageSync("hasCalled" + that.data.seminarDetail.id);
      if (isLate != "" && hasCalled!="")
      {
        that.setData({
          hasCalled: hasCalled,
          isLate: isLate,
        })
      }
      
    }
    catch (e) { }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.setStorageSync("isLate" + this.data.seminarDetail.id, this.data.isLate);
    wx.setStorageSync("hasCalled" + this.data.seminarDetail.id, this.data.hasCalled);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  CallInRoll: function () {
   // wx.setStorageSync("iscall", true);
    var latitude;
    var longitude;
    var elevation;
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        latitude = res.latitude;
        longitude = res.longitude;
        elevation = res.altitude;
        var IPPort = getApp().globalData.IPPort;

        var studentid = wx.getStorageSync("studentId");
        
        console.log();
        wx.request({
          url: IPPort + '/seminar/' + that.data.seminarDetail.id + '/class/' + wx.getStorageSync("classId") + '/attendance/' + studentid,
          method: 'PUT',
          data: {
            longitude: longitude,
            latitude: latitude,
            elevation: elevation
          },
          success: function (res) {
            console.log(res);
            if (res.statusCode == 200) {
              if (res.data.status == "late") {
                that.setData({
                  isLate: true,
                  hasCalled: true,
                })
                //      wx.setStorageSync("islate", res.data);
              }
              else if (res.data.status == "ontime") {
                that.setData({
                  isLate: false,
                  hasCalled: true,
                })
              }
            }
            else {
              wx.showToast({
                title: '签到失败',
                icon: 'loading',
                duration: 1500
              })
            }
          }
        })




      }
    })

    
  },
})