// pages/grouplist/FixedGroupNoLeaderUI2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seminarname: "讨论课4",
    groupMembers: [
      {
        sname: "绝尘世",
        sid: "24320152202745"
      },
      {
        sname: "绝尘界",
        sid: "24320152202743"
      }
      ,
      {
        sname: "绝尘巅",
        sid: "24320152202744"
      },
      {
        sname: "绝尘峰",
        sid: "24320152202741"
      },
      {
        sname: "世界巅峰",
        sid: "24320152202745"
      }
    ]

  },
  beLeader: function(){
    wx.redirectTo({
      url: "../FixedGroupLeaderUI2/FixedGroupLeaderUI2",
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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