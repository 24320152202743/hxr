// pages/index/Seminar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName: 'OOAD',
    seminarName: '讨论课4',
    seminarId: 1,
    info: {
      "id": 32,
      "name": "概要设计",
      "groupingMethod": "random",
      "courseName": "OOAD",
      "startTime": "2017-10-11",
      "endTime": "2017-10-24",
      "classCalling": 23,
      "isLeader": true,
      "areTopicsSelected": true
    },
  other:{
    iscall:false,
    issendgrade:false,
    isendchoosetopic:false,
    iscaptain:false,
    isStart:false
  }
  },


  FixedGroupNoLeaderUI: function () {
    var k = this.data.info.groupingMethod;
    if(k == "random")
      k = "随机分组"
    else
      k = "固定分组"

    wx.navigateTo({
      url: './FixedGroupNoLeaderUI?seminarId=' + this.data.seminarId + "&groupMethod=" + k,
    })
  },
  GradePresentationUI: function () {
    if (this.data.info.areTopicsSelected == true) {
      wx.navigateTo({
        url: './GradePresentationUI?seminarId=' + this.data.seminarId,
      })}
    
  },
  RollCallUI: function () {
    console.log(this.data);
    if (this.data.info.areTopicsSelected == "false") {
        wx.navigateTo({
          url: './RollCallUI?seminarId=' + this.data.seminarId,
        })
      
      }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      courseName: options.courseName,
      seminarName: options.seminarName,
      seminarId: options.seminarId,
    });
    var seminarId = this.data.seminarId;
    var IPPort = getApp().globalData.IPPort;
    var that = this;

    wx.request({
      url: IPPort + '/seminar/' + seminarId + '/my',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('jwt')
      },
      method: 'GET',
      success: function (data) {
        //console.log('seminar',data)
        var DATE = new Date(data.data.startTime);
        var date = DATE.toLocaleString();
        data.data.startTime = date;

        var DATE = new Date(data.data.endTime);
        var date = DATE.toLocaleString();
        data.data.endTime = date;

        // console.log(data);
        that.setData({
          info: data.data
        })
        // console.log(that.data)
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
  
  }
})