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
    console.log(this.data);
    var IPPort = getApp().globalData.IPPort;
    if (this.data.info.name == '' || this.data.info.Number == '') {
      wx.showToast({
        title: '填写不能为空',
        icon: 'loading',
        duration: 1500,
      });
    }
    else{
    getApp().globalData.userid = this.data.info.Number;
    getApp().globalData.usertype = 1;
    getApp().globalData.username = this.data.info.name;
    var message = "";
    var schoolId = this.data.info.school.id;
    var openid = wx.getStorageSync('openid');
    var number = this.data.info.Number;
    var Type = getApp().globalData.usertype;
    var name = this.data.info.name;
    wx.request({
      url: IPPort + '/register',
      method: 'POST',
      data: {
        openid: openid,
        name: name,
        Type: Type,
        number: number,
        schoolId: schoolId
      },
      success: function (data) {
        console.log(data);
        wx.setStorageSync("jwt", data.data.jwt);
        getApp().globalData.usertype = data.data.type;
      }
    })
    console.log(message);
    wx.reLaunch({
      url: './TeacherMainUI',
    })
  }
  },
  IDInput: function (e) {
    var Number = "info.Number";
    this.setData({
      [Number]: e.detail.value
    }) 
  },

  NameInput: function (e) {
    this.setData({
      teacherName: e.detail.value,
      ["info.name"]:e.detail.value,
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
    });
    console.log(this.data)
    if (this.data.info.name == "undefined")
      this.setData({
        ["info.name"]:"",
      });
    if (this.data.info.Number == "undefined")
      this.setData({
        ["info.Number"]: "",
      });
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