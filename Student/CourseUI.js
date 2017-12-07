// pages/index/CourseUI.js
Page({
  
  data: {
    date: "null",
    courseId: "null",
    courseName: "null",
    studentId: "null",
    seminar: [
      {
        "id": 29,
        "name": "界面原型设计",
        "description": "界面原型设计",
        "groupingMethod": "random",
        "startTime": "2017-9-1",
        "endTime": "2018-1-1",
        "grade":5
      },
      {
        "id": 29,
        "name": "界面原型设计",
        "description": "界面原型设计",
        "groupingMethod": "random",
        "startTime": "2017-9-1",
        "endTime": "2018-1-1",
        "grade": 5
      }
    ]
  },

  CourseInfoUI: function (e) {
    wx.navigateTo({
      url: './CourseInfoUI?courseId=' + this.data.courseId
    })
  },

  Seminar: function (e) {
    var id = e.currentTarget.dataset.seminarObj.id;
    var seminarName = e.currentTarget.dataset.seminarObj.name;
    var courseName = this.data.courseName;
    wx.navigateTo({
      url: './Seminar?seminarId=' + id +'&courseName=' + courseName +'&seminarName=' +seminarName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      date: new Date().toLocaleDateString(),
      courseId:options.courseId,
      courseName:options.courseName,
      studentId:options.studentId
    });
    var IPPort = getApp().globalData.IPPort;
    var that = this;
    wx.request({
      url: IPPort + '/course/' + options.courseId+'/seminar?embedGrade=true',
      method: 'GET',
      success: function (data) {
        console.log(data);
        that.setData({
          seminar: data.data
        })

      }
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
  
  }
})