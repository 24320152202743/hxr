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
    provinceId:''
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
      provinceId: options.id,
    })

    var IPPort = getApp().globalData.IPPort;
    var that = this;
    console.log(that.data.info.city);
    var url = IPPort + '/school?city=' + that.data.info.city;
    console.log(url);
    wx.request({
      url:url,
      method: 'GET',
      success: function (data) {
        console.log("asd");
        console.log(data);
        that.setData({
        school : data.data
        })
      },

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
  StudentBindingUI: function (e) {
    var IPPort = getApp().globalData.IPPort;
    var message = '"school":'+e.currentTarget.dataset.schoolObj;
    // wx.request({
    //   url: IPPort + '/me',
    //   method: 'PUT',
    //   data: message,
    //   success: function (data) {
        
    //   }
    // })
    // console.log(message);
    var Sname = e.currentTarget.dataset.schoolObj.name;
    var id = e.currentTarget.dataset.schoolObj.id;
    var province = this.data.info.province;
    var city = this.data.info.city;
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    wx.redirectTo({
      url: './StudentBindingUI2?Sname= ' + Sname + '&province=' + province + '&city=' + city + '&Number=' + Number + '&name=' + name + '&id=' +id
    })
  },

  ChooseSchool: function () {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    
    wx.redirectTo({
      url: './ChooseSchool?Number=' + Number + '&name=' + name
    })
  },

  ChooseSchool3: function () {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    var province = this.data.info.province;
    var provinceId = this.data.provinceId;
    wx.redirectTo({
      url: './ChooseSchool3?Number=' + Number + '&name=' + name + '&province=' + province + '&id=' + provinceId,
    })
  }

})