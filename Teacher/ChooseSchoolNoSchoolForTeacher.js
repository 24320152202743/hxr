// ChooseScholl/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: [
      {
        "id": 1,
        "name": "厦门大学",
        "province": "福建",
        "city": "厦门"
      },
      {
        "id": 2,
        "name": "厦门理工大学",
        "province": "福建",
        "city": "厦门"
      },
      {
        "id": 3,
        "name": "华侨大学",
        "province": "福建",
        "city": "厦门"
      },
      {
        "id": 4,
        "name": "集美大学",
        "province": "福建",
        "city": "厦门"
      }
    ],
    info: {
      Number: '',
      name: '',
      province: '',
      city: ''
    },
    provinceId:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Number = "info.Number";
    var name = "info.name";
    var province = "info.province";
    var city = "info.city"
    this.setData({
      [Number]: options.Number,
      [name]: options.name,
      [province]: options.province,
      [city]: options.city,
      provinceId: options.provinceId,
    })
    var IPPort = getApp().globalData.IPPort;
    var that = this;
    wx.request({
      url: IPPort + '/school?city=' + this.data.info.city,
      method: 'GET',
      success: function (data) {
        console.log(data);
        that.setData({
          school: data.data
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

  },
  ChooseSchoolNoSchoolForTeacher: function (e) {
    var id = e.currentTarget.dataset.schoolObj.id;
    var name = e.currentTarget.dataset.schoolObj.name;
    var province = this.data.info.province;
    var city = this.data.info.city;
    var teacherID = this.data.info.Number;
    var teacherName = this.data.info.name;
    wx.redirectTo({
      url: './TeacherBindingUI2?name=' + name + '&province=' + province + '&city=' + city + '&teacherID=' + teacherID + '&teacherName=' + teacherName + '&id=' + id
    })
  },

  CreateSchool: function (e) {
    var province = this.data.info.province;
    var city = this.data.info.city;
    var teacherID = this.data.info.Number;
    var teacherName = this.data.info.name;
    wx.navigateTo({
      url: '../common/CreateSchoolUI?province=' + province + '&city=' + city + '&teacherID=' + teacherID + '&teacherName=' + teacherName
    })
  },

  ChooseSchool2: function () {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    wx.redirectTo({
      url: './ChooseSchool2?Number=' + Number + '&name=' + name
    })
  },

  ChooseSchool4: function () {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    var provinceId = this.data.provinceId;
    var province = this.data.info.province;
    wx.redirectTo({
      url: './ChooseSchool4?province=' + province + '&Number=' + Number + '&name=' + name + '&id=' + provinceId,
    })
  }

})