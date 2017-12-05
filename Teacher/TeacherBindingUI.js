// pages/BindingAndIndex/TeacherBindingUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teacherID: '',
    name:'',
    school:''
  },
  /*获取输入 */
  getinput: function (e) {
    this.setData({
      teacherID: e.detail.value.teacherID,
      name: e.detail.value.name,
      school: e.detail.value.school
    })

  },
  /*注册 */
  register: function () {
    wx.request({
      url: '',
    })

  },
  ChooseSchool1: function () {
    wx.navigateTo({
      url: 'ChooseSchool1',
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