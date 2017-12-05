// ChooseScholl/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    province:[
      {
        "id":1,
        "name":"安徽"
      },
      {
        "id":2,
        "name":"澳门"
      },
      {
        "id":3,
        "name":"北京"
      },
      {
        "id":4,
        "name":"福建"
      }
    ],
    teacherID: '',
    teacherName: ''
  
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
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

  
  ChooseSchool4: function (e) {
      console.log(e);
      console.log(e.currentTarget.dataset.provinceObj.name);
      var name = e.currentTarget.dataset.provinceObj.name;
      var teacherID = this.data.teacherID;
      var teacherName = this.data.teacherName;
      wx.redirectTo({
        url: './ChooseSchool4?name=' + name + '&teacherID=' + teacherID + '&teacherName=' + teacherName
    })
  }
})