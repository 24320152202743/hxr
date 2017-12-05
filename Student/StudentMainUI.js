// pages/index/StudentMainUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      "id": 3486,
      "type": "student",
      "name": "张三",
      "number": "23320152202333",
      "phone": "18911114514",
      "email": "23320152202333@stu.xmu.edu.cn",
      "gender": "male",
      "school": {
        "id": 32,
        "name": "厦门大学"
      },
      "title": "",
      "avatar": "../images/user.png"
    },
    course: [
      {
        "id": 1,
        "name": "OOAD",
        "teacherName": "邱明",
        "numClass": 3,
        "numStudent": 60,
        "startTime": "2017-9-1",
        "endTime": "2018-1-1"
      },
      {
        id: 2,
        "name": "J2EE",
        "teacherName": "吴清强",
        "numClass": 1,
        "numStudent": 60,
        "startTime": "2017-9-1",
        "endTime": "2018-1-1"
      }
    ]
  },


  CheckStudnetInfoUI: function () {
    wx.reLaunch({
      url: '../Student/CheckStudentInfo?name=' + this.data.info.id
    })
  },


  CourseUI: function (e) {
    console.log(e.currentTarget.dataset.courseObj.id);
    var id = e.currentTarget.dataset.courseObj.id;
      wx.navigateTo({
        url: '../index/CourseUI?courseId=' + id + '&studentId=' + this.data.info.id
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