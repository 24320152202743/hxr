// ChooseScholl/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province:'null',
    city: [
      {
        "id": 1,
        "name": "城市1"
      },
      {
        "id": 2,
        "name": "城市2"
      },
      {
        "id": 3,
        "name": "城市3"
      },
      {
        "id": 4,
        "name": "城市4"
      }
    ],
    StudentID: '',
    StudentName: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      province:options.name,
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
  ChooseSchool5: function (e) {
    console.log(e.currentTarget.dataset.cityObj.name);
    var name = e.currentTarget.dataset.cityObj.name;
    var province = this.data.province;
    var StudentID = this.data.StudentID;
    var StudentName = this.data.StudentName;
    wx.redirectTo({
      url: './ChooseSchool5?name= ' + name + '&province=' + province + '&StudentID=' + StudentID + '&StudentName=' + StudentName
    })
  }
})