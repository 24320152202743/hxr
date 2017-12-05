// ChooseScholl/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province:'null',
    city:'null',
    school: [
      {
        "id": 1,
        "name": "学校1"
      },
      {
        "id": 2,
        "name": "学校2"
      },
      {
        "id": 3,
        "name": "学校3"
      },
      {
        "id": 4,
        "name": "学校4"
      }
    ],
    StudentID: '',
    StudentName: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      city:options.name,
      province: options.province,
      StudentID: options.StudentID,
      StudentName: options.StudentName
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
  StudentBindingUI: function (e) {
    console.log(e);
    console.log(e.currentTarget.dataset.schoolObj.name);
    var name = e.currentTarget.dataset.schoolObj.name;
    var province = this.data.province;
    var city = this.data.city;
    var StudentID = this.data.StudentID;
    var StudentName = this.data.StudentName;
    wx.redirectTo({
      url: './StudentBindingUI2?name= ' + name + '&province=' + province + '&city=' + city + '&StudentID=' + StudentID + '&StudentName=' + StudentName
    })
  }
  
})