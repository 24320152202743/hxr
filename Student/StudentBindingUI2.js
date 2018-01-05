// pages/BindingAndIndex/StudentBindingUI2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      Number: "",
      name: "",
      school: {
      }
    }
  },
  Student_MainUI: function () {
    if (this.data.info.name == '' || this.data.info.Number == '') {
      wx.showToast({
        title: '填写不能为空',
        icon: 'loading',
        duration: 1500,
      });
    }
    else {
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var openid = wx.getStorageSync('openid');
    var name = this.data.info.name;
    var number = this.data.info.Number;
    var Type = getApp().globalData.usertype;
    var schoolId = this.data.info.school.id;
    // console.log("12312312313"+openid);
    //绑定
    wx.request({
      url: IPPort + '/register',
      method: 'POST',
      data: {
        openid:openid,
        name:name,
        Type:Type,
        number:number,
        schoolId:schoolId
      },
      success: function (data) {
        console.log(data);
        wx.setStorageSync("jwt", data.data.jwt);
        getApp().globalData.usertype=data.data.type;
          wx.reLaunch({
            url: './StudentMainUI',
          })    
      }
    })
   
    }},

  ChooseSchool: function (e) {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    wx.navigateTo({
      url: './ChooseSchool?Number=' + Number + '&name=' + name
    })
  },

  IDInput: function (e) {
    var Number = "info.Number"
    this.setData({
      [Number]: e.detail.value
    })
  },

  NameInput: function (e) {
    var name = "info.name"
    this.setData({
      [name]: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var school = "info.school.name";
    var id = "info.school.id";
    var Number = "info.Number";
    var name = "info.name";
    this.setData({
      [id]:options.id,
      [school]: options.Sname,
      [Number]: options.Number,
      [name]: options.name
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