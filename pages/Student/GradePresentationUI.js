// score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupNum:[
      {
        "id":1,
        "GroupName":"1-A-1",
        "star":0
      },
      {
        "id": 2,
        "GroupName": "1-A-2",
        "star": 0
      },
      {
        "id": 3,
        "GroupName": "1-B-1",
        "star": 0
      },
      {
        "id": 4,
        "GroupName": "2-B-1",
        "star": 0
      },
      {
        "id": 5,
        "GroupName": "1-C-1",
        "star": 0
      },
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