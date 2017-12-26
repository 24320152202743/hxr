// ChooseScholl/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    province:[],
    info: {
      Number: '',
      name: ''
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Number = "info.Number";
    var name = "info.name";
    this.setData({
      [Number]: options.Number,
      [name]: options.name
    })
    var province = wx.getStorageSync("province");
    if (province != "") {
      this.setData({
        province: province,
      })
    }
    else {
      
    var self = this
    var IPPort = getApp().globalData.IPPort
    wx.request({
      url: 'http://apis.map.qq.com/ws/district/v1/list',
      method: 'GET',
      data: {
        "key": "RR7BZ-74AEP-JFKDC-LC4EB-ROFYV-TBBBO"
      },
      success: function (res) {
        console.log(res)
        var list = [];
        for (var i = 0; i < res.data.result[0].length; i++) {
          list[i] = {
            "id":res.data.result[0][i].id,
            "name": res.data.result[0][i].name,
        }
        wx.setStorageSync("province", list);
        console.log(list)
        self.setData({
          province: list
        })
      }}
    })}
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


  ChooseSchool3: function (e) {
    var province = e.currentTarget.dataset.provinceObj.name;
    var id = e.currentTarget.dataset.provinceObj.id;
    var Number = this.data.info.Number;
    var name = this.data.info.name;
    wx.redirectTo({
      url: './ChooseSchool3?province=' + province + '&Number=' + Number + '&name=' + name +'&id=' +id
    })
  }
})