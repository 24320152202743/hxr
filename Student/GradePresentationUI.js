// score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupNum:[
  {
    "star":0,
    "id": 28,
    "name": "1A1",
    "topics": [
      {
        "id": 257,
        "name": "领域模型与模块"
      }
    ]
  },
  {
    "star":0,
    "id": 29,
    "name": "1A2",
    "topics": [
      {
        "id": 257,
        "name": "领域模型与模块"
      }
    ]
  }
],
    
    starMap: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好',
    ],
    
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

  },
  GradePresentationEndUI: function () {
    wx.redirectTo({
      url: './GradePresentationEndUI?groupNum=' + JSON.stringify(this.data.groupNum),
      success: function (res) { },
      fail: function () { },
      complete: function () { }
    })
  },

  myStarChoose(e) {
    console.log(e);
    let star = parseInt(e.target.dataset.star) || 0;
    var index =parseInt(e.currentTarget.dataset.groupnumObj.id)-1;
    console.log(index);
    var up = "groupNum[" + index + "].star";
    this.setData({
      [up]: star
    });
  }
})