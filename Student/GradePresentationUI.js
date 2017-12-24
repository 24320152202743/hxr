var app = getApp();// pages/Student/Seminar/Scoring/Score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId: 1,
    seminarId: "",
    group: [
      {
        "id": 28,
        "name": "1A1",
        "topics": [
          {
            "id": 257,
            "name": "领域模型与模块"
          }
        ]
      },
      {
        "id": 29,
        "name": "1A2",
        "topics": [
          {
            "id": 257,
            "name": "领域模型与模块"
          }
        ]
      }
    ],
    groupId: 1,
    presentationGrade: [],

    flag: false               //是否提交了button
  },

  score: function (e) {
  if(this.data.flag == false){
    var temp = e.target.dataset
    for (var i = 0; i < this.data.presentationGrade.length; ++i)
      if (this.data.presentationGrade[i].id == temp.group) {
        this.data.presentationGrade[i].grade = temp.score
      }

    var t = this.data.presentationGrade

    this.setData({
      presentationGrade: t
    })}
  },

  onLoad: function (options) {

    this.setData({
      seminarId: options.seminarId,
      studentId: wx.getStorageSync("studentId"),
    })

    var self = this
    wx.request({                    //请求小组
      url: app.globalData.IPPort + '/seminar/' + this.data.seminarId + '/group?gradeable=true',
      method: 'GET',
      success: function (res) {
        self.setData({
          group: res.data
        })
        for (var i = 0; i < self.data.group.length; ++i) {
          self.data.presentationGrade.push({ "id": self.data.group[i].id, 'name': self.data.group[i].name, "grade": 0 })
        }
        var temp = self.data.presentationGrade
        self.setData({
          presentationGrade: temp
        })
        try{
        temp =  wx.getStorageSync("grade" + self.data.seminarId)
        
        if(temp)
        {
          self.setData({
            presentationGrade: temp
          })
        }
        
        var isGrade = wx.getStorageSync("isGrade" + self.data.seminarId);
        console.log(isGrade);
        if(isGrade)
        {
          self.setData({
            flag: isGrade,
          })
        }


        }
        catch(e){}
      },
      fail: function () {
        wx.showToast({
          title: '页面加载失败',
          icon: 'fail',
          duration: 1000,
          mask: true
        })
      }
    })

  },

  //提交
  submit: function () {
    var self = this
    wx.request({
      url: app.globalData.IPPort + '/group/' + self.data.groupId + '/grade/presentation/' + self.data.studentId,
      method: 'put',
      data: { 'presentationGrade': self.data.presentationGrade },
      success: function (res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 1000,
          mask: true
        })
        self.setData({
          flag: true
        })
        wx.setStorageSync("grade" + self.data.seminarId, self.data.presentationGrade);
        wx.setStorageSync("isGrade" + self.data.seminarId, self.data.flag);
        console.log(self.data.flag);
      },

      fail: function () {
        wx.showToast({
          title: '提交失败',
          icon: 'fail',
          duration: 1000,
          mask: true
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