// zjgCSS/StudentRollCallUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seminarDetail: {
      "id": 32,
      "name": "概要设计",
      "startTime": "2017-10-10",
      "endTime": "2017-10-24",
      "site": "海韵201",
      "teacherName": "邱明",
      "teacherEmail": "mingqiu@xmu.edu.cn"
    },
    message: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var IPPort = getApp().globalData.IPPort;
    var seminarid = options.seminarid;
    var that = this;
    wx.request({
     url: IPPort+'/seminar/'+ seminarid+'/detail',
     method:'GET',
     success: function (data) {
       wx.setStorageSync("seminarDetail", that.data.seminarDetail);
       console.log(data.data);
       that.setData({
         seminarDetail:data.data
       })
     }
   })
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
    wx.setStorageSync("iscall", true);
    var latitude;
    var longitude;
    var elevation;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        latitude = res.latitude;
        longitude = res.longitude;
        elevation = res.altitude;
      }
    })

    var IPPort = getApp().globalData.IPPort;
    var classid = getApp().globalData.classid;
    var studentid = getApp().globalData.studentid;
    var that = this;
    wx.request({
      url: IPPort + '/seminar/'+this.data.seminarDetail.id+'/class/'+classid+'/attendance/'+studentid,
      method:'PUT',
      data:{
        longtitde:longitude,
        latitude:latitude,
        elevation:elevation
      },
      success: function (res) { 
        if(res.statusCode==200){
          that.setData({
            message:res.data
          })
          wx.setStorageSync("islate", res.data);
        }
      }
    
    })
    wx.redirectTo({
      url: './RollCallEndUI',
    })
  },



  RollCallEndUI: function () {
    console.log(this.data.seminarDetail);
    wx.setStorageSync("seminarDetail", this.data.seminarDetail);
    wx.redirectTo({
      url: './RollCallEndUI',
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

  RollCallLateUI: function () {
    wx.setStorageSync("seminarDetail", this.data.seminarDetail);
    wx.redirectTo({
      url: './RollCallLateUI',
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


  ConvertDegreesToRadians:function(degrees) {
    return degrees * Math.PI / 180;
  },

  ConvertRadiansToDegrees:function(radian)
  {
    return radian * 180.0 / Math.PI;
  },

  HaverSin(theta) {
    var v = Math.sin(theta / 2);
    return v * v;
  },

  Distance: function (lat1, lon1, ele1, lat2, lon2, ele2) {
    //用haversine公式计算球面两点间的距离。
    //经纬度转换成弧度
    lat1 = this.ConvertDegreesToRadians(lat1);
    lon1 = this.ConvertDegreesToRadians(lon1);
    lat2 = this.ConvertDegreesToRadians(lat2);
    lon2 = this.ConvertDegreesToRadians(lon2);

    //差值
    var vLon = Math.abs(lon1 - lon2);
    var vLat = Math.abs(lat1 - lat2);

    //h is the great circle distance in radians, great circle就是一个球体上的切面，它的圆心即是球心的一个周长最大的圆。
    var h = this.HaverSin(vLat) + Math.cos(lat1) * Math.cos(lat2) * this.HaverSin(vLon);
    var EARTH_RADIUS = 6378.137;
    var distance = 2 * EARTH_RADIUS * Math.asin(Math.sqrt(h));
    distance = Math.sqrt(Math.pow(distance, 2) + Math.pow(ele2 - ele1, 2))
    return distance;
  }





})