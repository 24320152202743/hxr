// Teacher/FixedGroup/FixedGroupInfoUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classGroup: [
     
    ],

    groupInfo: {
      "id": 28,
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
      ],
      "report": ""
    },


    display: true,
    display_group: 28,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      seminarId: wx.getStorageSync("seminarId"),
    })
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.request({
      url: IPPort + '/seminar/' + that.data.seminarId + '/group?classId=' + that.data.classInfo.id,
      method: 'GET',
      //data:this.data.info,
      success: function (data) {
        that.setData({
          classGroup: data.data,
        })
      }
    })
    
    ;




    this.setData({
      display_group: this.data.classGroup[0].id,

    });
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

  changeGroup: function (event) {
    if (this.data.display == true && this.data.display_group == event.currentTarget.id)
      this.setData({
        display: false,
      });
    else if (this.data.display == false && this.data.display_group == event.currentTarget.id)
      this.setData({
        display: true,
      });
    else if (this.data.display_group != event.currentTarget.id){
      var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.request({
      url: IPPort + '/group/' + event.currentTarget.id,
      method: 'GET',
      //data:this.data.info,
      success: function (data) {
        console.log(data)
        that.setData({
          groupInfo: data.data,
          display_group: event.currentTarget.id,
          display: true,
        });
      }
    })
    }
  }

})