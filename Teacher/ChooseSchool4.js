// ChooseScholl/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    city: [],
    info: {
      Number: '',
      name: '',
      province: ''
    },
    provinceId: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    var IPPort = getApp().globalData.IPPort
    var Number = "info.Number";
    var name = "info.name";
    var province = "info.province";
    this.setData({
      [Number]: options.Number,
      [name]: options.name,
      [province]: options.province,
      provinceId: options.id,
    })
    wx.request({
      url: 'http://apis.map.qq.com/ws/district/v1/getchildren',
      data: {
        id: options.id,
        key: 'RR7BZ-74AEP-JFKDC-LC4EB-ROFYV-TBBBO'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var list = [];
        for (var i = 0; i < res.data.result[0].length; i++) {
          list[i] = res.data.result[0][i]
        }
        self.setData({
          city: list
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
    var city = e.currentTarget.dataset.cityObj.name;
    var province = this.data.info.province;
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    var provinceId = this.data.provinceId;
    wx.redirectTo({
      url: './ChooseSchoolNoSchoolForTeacher?city=' + city + '&province=' + province + '&Number=' + Number + '&name=' + name + '&provinceId=' + provinceId,
    })
  },

  ChooseSchool2: function () {
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    wx.redirectTo({
      url: './ChooseSchool2?Number=' + Number + '&name=' + name
    })
  }
})