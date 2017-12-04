// pages/index/RandomGroupChooseTopicUI.js
Page({

  data: {
    topic: [
      {
        "flag":0,
        "order":"null",
        "id": 257,
        "name": "领域模型与模块",
        "description": "lalalala",
        "groupLimit": 5,
        "groupLeft": 2
      },
      {
        "flag":0,
        "order": "null",
        "id": 258,
        "name": "包划分",
        "description": "xixixixi",
        "groupLimit": 5,
        "groupLeft": 1
      },
      {
        "flag":0,
        "order": "null",
        "id": 259,
        "name": "model",
        "description": "eheheheh",
        "groupLimit": 5,
        "groupLeft": 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var char = 1;
    console.log(char);
    for(var i=0;i<this.data.topic.length;i++)
    {
      var up = "topic["+i+"].order";
      this.setData({
        [up]:char
      })
      char++;
    }
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
    wx.showModal({
      title: '提示',
      content: '确定选择此话题吗(一旦选定不能修改)',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../index/groupLeaderUI2'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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