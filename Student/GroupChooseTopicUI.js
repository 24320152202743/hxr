// pages/index/RandomGroupChooseTopicUI.js
Page({

  data: {
    groupId:1 ,
    topic: [
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      groupMethod : options.groupMethod,
      groupId: options.groupId,
      seminarId: options.seminarId
    });
    var seminarId = this.data.seminarId;
    var IPPort = getApp().globalData.IPPort;
    var that = this;
    wx.request({
      url: IPPort + '/seminar/' + seminarId + '/topic',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('jwt')
      },
      method: 'GET',
      success: function (data) {
        console.log(data);
        that.setData({
          topic: data.data
        })
        console.log(that.data.topic)
        var char = 1;
        console.log(char);
        for (var i = 0; i < that.data.topic.length; i++) {
          var up = "topic[" + i + "].order";
          that.setData({
            [up]: char
          })
          char++;
        }

      }
    })
    
  },

  detail: function (e) {
    console.log(e);
    var flag = e.currentTarget.dataset.topicObj.flag;
    var order = e.currentTarget.dataset.topicObj.order-1;
    console.log(flag);
    if(flag == 0) flag = 1;
    else flag = 0;
    var up = "topic[" + order + "].flag";
    this.setData({
      [up]:flag
    })
  },

  chooseTopic: function (e) {
    var groupId = this.data.groupId;
    var IPPort = getApp().globalData.IPPort;
    var message = '{"id":'+e.currentTarget.dataset.topicObj.id+'}';
    var that = this;
    wx.request({
      url: IPPort + '/group/' + groupId + '/topic',
      method: 'POST',
      data:message,
      success: function (data) {
        var topic = e.currentTarget.dataset.topicObj.name;
        wx.showModal({
          title: '提示',
          content: '确定选择此话题吗(一旦选定不能修改)',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.redirectTo({
                url: './FixedGroupNoLeaderUI?seminarId=' + that.data.seminarId+"&groupMethod=" + that.data.groupMethod,
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })



        }
    })
    console.log(e) 
    
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
    this.setData({
      time: 0
    })
    this.requestData(this);
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
    //console.log('2222222222222222')
    this.setData({
      time: -2
    })
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



  requestData: function (that) {
    if (that.data.time <= -1)
      return
    setTimeout(function () {
      that.setData({
        time: that.data.time + 1,
      })
      var seminarId = that.data.seminarId;
      var IPPort = getApp().globalData.IPPort;
      wx.request({
        url: IPPort + '/seminar/' + seminarId + '/topic',
        header: {
          Authorization: 'Bearer ' + wx.getStorageSync('jwt')
        },
        method: 'GET',
        success: function (data) {
          that.setData({
            topic: data.data
          })
          var char = 1;
          for (var i = 0; i < that.data.topic.length; i++) {
            var up = "topic[" + i + "].order";
            that.setData({
              [up]: char
            })
            char++;
          }
        }
      })
      that.requestData(that);
    }, getApp().globalData.time_span_group);
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})