// pages/grouplist/FixedGroupNoLeaderUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seminarId:1,
  groupMethod:'固定分组',
  info:{
    "id": 28,
    "name": 28,
    "leader": {
      "id": 8888,
      "name": "张三"
    },
    "members": [
      {
        "id": 5324,
        "name": "李四"
      },
      {
        "id": 5678,
        "name": "王五"
      }
    ],
    "topics": [
      {
        "id": 257,
        "name": "领域模型与模块"
      }
    ]
  }
  
  },
  beLeader: function () {
    var seminarId = this.data.seminarId;
    var groupId = this.data.info.id;
    var IPPort = getApp().globalData.IPPort;
    var that = this;
    wx.request({
      url: IPPort + '/group/' + groupId + '/assign',
      method: 'PUT',
      success: function (data) {
        }
    })
    console.log(this.data.topic);
    if(this.data.topic!="")
    {
      var topic = this.data.topic;
      wx.redirectTo({
        url: './FixedGroupLeaderUI?topic=' + topic +'&seminarId=' +seminarId,
      })
    }
    else{
      
    wx.redirectTo({
      url: './FixedGroupLeaderUI2?seminarId='+seminarId,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      seminarId: options.seminarId
    });
    var seminarId = this.data.seminarId;
    var IPPort = getApp().globalData.IPPort;
    var that = this;
    wx.request({
      url: IPPort + '/seminar/' + seminarId + '/group/my',
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