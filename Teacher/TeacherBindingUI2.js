// pages/BindingAndIndex/TeacherBindingUI2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      Number: '',
      name: '',
      school: {
        id:"",
        name:""
      }
    }
  },
  ChooseSchool: function () {
    var teacherID = this.data.teacherID;
    var teacherName = this.data.teacherName;
    wx.navigateTo({
      url: './ChooseSchool2?teacherID=' + teacherID + '&teacherName=' + teacherName
    })
  },
  Teacher_MainUI: function () {
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    wx.request({
      url: IPPort + '/me',
      method: 'PUT',
      data:this.data.info,
      success: function (data) {
        console.log(data);
      }
    })
    console.log(message);
    wx.reLaunch({
      url: './TeacherMainUI',
    })
  },
  IDInput: function (e) {
    var Number = "info.Number";
    this.setData({
      [Number]: e.detail.value
    }) 
  },

  NameInput: function (e) {
    this.setData({
      teacherName: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    var schoolname = "info.school.name";
    var schoolid = "info.school.id";
    var Number = "info.Number";
    var name = "info.name";
    //console.log(this.data.info.name);
    this.setData({
      [schoolname]: options.name,
      [Number]: options.teacherID,
      [name]: options.teacherName,
      [schoolid]:options.id
    })
    //console.log(this.data.info.name);
  
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