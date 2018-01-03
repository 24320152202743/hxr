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
    },
    seminarId: 1,
    callingStatus: "",
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      ["classInfo.id"]: options.classId,
      seminarId: options.seminarId,
    });
    wx.setStorageSync("classInfo" + that.data.classInfo.id, that.data.classInfo);
    wx.setStorageSync("seminarId", that.data.seminarId);
    console.log(that.data);

    var latitude;
    var longitude;
    var elevation;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        latitude = res.latitude;
        longitude = res.longitude;
        elevation = res.altitude;

    // 页面渲染后 执行
    
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    wx.request({
      url: IPPort + '/class/' + options.classId,
      method: 'GET',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('jwt')
      },
      //data:this.data.info,
      success: function (data) {
        that.setData({
          classInfo: data.data,
        });
        var k = '/seminar/' + that.data.seminarId + '/class/' + that.data.classInfo.id + '/attendance?longitude=' + longitude + '&latitude=' + latitude + '&elevation=' + elevation;
        wx.request({
          url: IPPort + k,
          header: {
            Authorization: 'Bearer ' + wx.getStorageSync('jwt')
          },
          method: 'GET',
          //data:this.data.info,
          success: function (data) {
            console.log(data.data)
            that.setData({
              ["classInfo.group"]: data.data.group,
              ["classInfo.numPresent"]: data.data.numPresent,
              ["classInfo.numStudent"]: data.data.numStudent,
              ["classInfo.status"]: data.data.status,
            })

          }
        });
      }
    });
   

      console.log(message);
    wx.setStorageSync("nextUrl", './RandomRollStartCallUI?classId=' + that.data.classInfo.id);
    wx.setStorageSync("id", that.data.classInfo.id);
      }
   });
   },



  RandomRollCallUI: function () {
    wx.setStorageSync("classInfo" + this.data.classInfo.id, this.data.classInfo);
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.redirectTo({
      url: './RandomRollCallUI?classId=' + this.data.classInfo.id,
      success: function (res) {
        wx.request({
          url: IPPort + '/class/' + that.data.classInfo.id + '/seminar/' + that.data.seminarId + '/location?status=1',
          method: 'PUT',
          header: {
            Authorization: 'Bearer ' + wx.getStorageSync('jwt')
          },
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

})