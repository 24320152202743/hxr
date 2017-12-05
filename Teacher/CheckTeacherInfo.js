// pages/BindingAndIndex/CheckTeacherInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '邱明',
    id: '666666',
    phone: '5464564',
    school: '厦门大学'
  },
  /*模态弹窗（解绑） */
  modalcnt: function () {
    wx.showModal({
      title: '注意',
      content: '确定要解绑吗？',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '../common/ChooseCharacter',
          })
          console.log('用户点击确定解绑')
        } else if (res.cancel) {
          console.log('用户点击取消解绑')
        }
      }
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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