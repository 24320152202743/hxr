// pages/BindingAndIndex/CreateSchoolUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:'创建学校',
    province:'',
    city:'',
    school:'',
    teacherID:'',
    teacherName:''
  },
  SchoolInput: function (e) {
    this.setData({
      school: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      province: options.province,
      city:options.city,
      teacherID: options.teacherID,
      teacherName: options.teacherName
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
  
  },
  TeacherBindingUI2: function (e) {
    var name=this.data.school;
    var province = this.data.province;
    var city = this.data.city;
    var teacherID = this.data.teacherID;
    var teacherName = this.data.teacherName;
    wx.redirectTo({
      url: '../Teacher/TeacherBindingUI2?name= ' + name + '&province=' + province + '&city=' + city + '&teacherID=' + teacherID + '&teacherName=' + teacherName
    })
  }
})