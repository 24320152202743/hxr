// pages/index/StudentMainUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
     
    },
    course: [
     
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
    console.log(id)
    var courseId
    for(var i = 0 ;i <this.data.course.length;++i){
      if(this.data.course[i].id==id)
      {
        courseId = this.data.course[i].courseId
        break
      }
    }
    // console.log("courseid and coursename"+id+"   "+name);
      wx.navigateTo({
        url: '../Student/CourseUI?courseId=' + courseId +'&courseName='+name+'&classId='+id
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = "info.number";
    var name = "info.name";
    this.setData({
      [id]: options.Number,
      [name]: options.name
    })
    
    var IPPort = getApp().globalData.IPPort;
    var token = wx.getStorageSync('jwt');
    var that = this;
    var name = "info.name";
    var Number = "info.number";
     wx.request({
      url: IPPort + '/me',
      header: {
        Authorization: 'Bearer ' + token
      },
      method: 'GET',
      data: this.data.info,
      success: function (data) {
        that.setData({
          [name]:data.data.name,
          [Number]:data.data.number
        })
      }
    }),
    wx.request({
      url: IPPort + '/class?courseName=null&courseTeacher=null',
      method: 'GET',
      header: {
        Authorization: 'Bearer ' + token
      },
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