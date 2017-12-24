// pages/Student/SeminarFixedGroupNoSelection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName: 'OOAD',
    seminarName: '讨论课4',
    seminarId:1 ,
    info: {
      "id": 32,
      "name": "概要设计",
      "groupingMethod": "random",
      "courseName": "OOAD",
      "startTime": "2017-10-11",
      "endTime": "2017-10-24",
      "classCalling": 23,
      "isLeader": true,
      "areTopicsSelected": true}
    
  },
  FixedGroupNoLeaderUI: function () {
    var seminarId = this.data.seminarId;
     wx.navigateTo({
      url: 'FixedGroupNoLeaderUI?seminarId='+seminarId ,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      courseName: options.courseName,
      seminarName: options.seminarName,
      seminarId:options.seminarId,
    });
    var seminarId = this.data.seminarId;
    var IPPort = getApp().globalData.IPPort;
    var that = this;

    wx.request({
      url: IPPort + '/seminar/' + seminarId + '/my',
      method: 'GET',
      success: function (data) {
        console.log(data);
        that.setData({
          info: data.data
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
  
  }
})