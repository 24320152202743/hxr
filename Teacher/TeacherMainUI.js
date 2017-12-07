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
      "avatar": "../images/UserIcon.png" ,
      "phone":"",
      "email":"",
      "title":"",
      "school":{
        "id":"",
        "name":""
      }
      },
    course: [{ "id": 1, "name": "J2EE" },
    { "id": 2, "name": "OOAD" },
    { "id": 3, "name": "操作系统" },
    { "id": 4, "name": "数据仓库" }]
  },


  CheckTeacherInfoUI: function () {
    wx.navigateTo({
      url: './CheckTeacherInfo?name=' + this.data.info.name,
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
    
    console.log(this.data.date);
    var id = e.currentTarget.dataset.courseObj.id;
    console.log(id);
      wx.navigateTo({
        url: './ClassManage?classId='+id,
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
      var IPPort = getApp().globalData.IPPort;
      var message = "";
      var that = this;
      wx.request({
        url: IPPort + '/me',
        method: 'GET',
        //data:this.data.info,
        success: function (data) {
          console.log(data);
          that.setData({
            info: data.data,
          })
        }
      });
      wx.request({
        url: IPPort + '/course',
        method: 'GET',
        //data:this.data.info,
        success: function (data) {
          console.log(data);
          that.setData({
            course: data.data,
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