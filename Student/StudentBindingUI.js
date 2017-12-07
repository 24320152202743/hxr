// pages/BindingAndIndex/StudentBindingUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      Number: "23320152202333",
      name: "张三",
      school: {
        id: 32,
        name: "厦门大学"
      }
    }

  },
  ChooseSchool: function (e) {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    wx.navigateTo({
      url: './ChooseSchool?Number=' + Number + '&name=' + name
    })
  },

  IDInput: function (e) {
    var Number = "info.Number"
    this.setData({
      [Number]: e.detail.value
    })
  },

  NameInput: function (e) {
    var name = "info.name"
    this.setData({
      [name]: e.detail.value
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