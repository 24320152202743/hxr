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
        "id": 23,
        "name": "周三1-2节",
        "numStudent": 60,
        "time": "周三1-2、周五1-2",
        "site": "公寓405",
        "courseName": "OOAD",
        "courseTeacher": "邱明"
      },
      {
        "id": 23,
        "name": "周三1-2节",
        "numStudent": 60,
        "time": "周三1-2、周五1-2",
        "site": "公寓405",
        "courseName": "OOAD",
        "courseTeacher": "邱明"
      }
    ]
  },


  CheckStudnetInfoUI: function () {
    wx.navigateTo({
      url: '../Student/CheckStudentInfo?name=' + this.data.info.id
    })
  },


  CourseUI: function (e) {
    console.log(e.currentTarget.dataset.courseObj.id);
    var id = e.currentTarget.dataset.courseObj.id;
    var name = e.currentTarget.dataset.courseObj.courseName;
      wx.navigateTo({
        url: '../Student/CourseUI?courseId=' + id + '&studentId=' + this.data.info.id +'&courseName='+name
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var IPPort = getApp().globalData.IPPort;
    var that = this;
    wx.request({
      url: IPPort + '/class',
      method: 'GET',
      success: function (data) {
        console.log(data);
        that.setData({
          course: data.data
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