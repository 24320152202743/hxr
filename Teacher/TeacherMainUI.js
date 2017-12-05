// pages/index/StudentMainUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"null",
    info: { 
      "id": 3486, 
      "type": "teacher", 
      "name": "邱明", 
      "number": "24321432534",
      "avatar": "../images/人物头像.png" 
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
        "endTime": "2017-11-1"
      }
    ]
  },


  CheckTeacherInfoUI: function () {
    wx.navigateTo({
      url: '../index/CheckTeacherInfoUI?name=' + this.data.info.name,
      success: function (res) {
        // wx.showToast({
        //   title: '成功',
        //   icon: 'success',
        //   duration: 2000
        // })    
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },


  ClassManage: function (e) {
    console.log(e);
    console.log(e.currentTarget.dataset.courseObj.id);
    console.log(this.data.date);
    var id = e.currentTarget.dataset.courseObj.id;
      wx.navigateTo({
        url: '../index/ClassManage?classId='+id,
        success: function (res) {
          // wx.showToast({
          //   title: '成功',
          //   icon: 'success',
          //   duration: 2000
          // })    
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        date: new Date().toLocaleDateString()
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