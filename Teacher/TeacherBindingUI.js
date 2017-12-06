// pages/BindingAndIndex/TeacherBindingUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherID: '',
    teacherName:'',
    school:''
  },
  /*获取输入 */
  IDInput: function (e) {
    this.setData({
      teacherID: e.detail.value
    })
  },

  NameInput: function (e) {
    this.setData({
      teacherName: e.detail.value
    })
  },
  /*注册 */
  register: function () {
    var requestheader = getApp().globalData.requestHeader;
    console.log(requestheader);
    console.log("hello");
    wx.request({
      url: '',
    })

  },
  ChooseSchool: function () {
    var teacherID = this.data.teacherID;
    var teacherName = this.data.teacherName;
    wx.navigateTo({
      url: './ChooseSchool2?teacherID=' + teacherID + '&teacherName=' + teacherName
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