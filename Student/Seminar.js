// pages/index/Seminar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName: 'OOAD',
    seminarName: '讨论课4',
    seminarId: 1,
    info: {
     
    },
  other:{
    iscall:false,
    isendcall:true,
    issendgrade:false,
    isendchoosetopic:false,
    iscaptain:false,
    isStart:false
  }
  },


  FixedGroupNoLeaderUI: function () {
    var k = this.data.info.groupingMethod;
    if(k == "random")
      k = "随机分组"
    else
      k = "固定分组"

    wx.navigateTo({
      url: './FixedGroupNoLeaderUI?seminarId=' + this.data.seminarId + "&groupMethod=" + k,
    })
  },
  GradePresentationUI: function () {
    if (this.data.info.areTopicsSelected == "true") {
      wx.navigateTo({
        url: './GradePresentationUI?seminarId=' + this.data.seminarId,
      })}
    
  },
  RollCallUI: function () {
    console.log(this.data);
    if (this.data.info.areTopicsSelected == "false") {
        wx.navigateTo({
          url: './RollCallUI?seminarId=' + this.data.seminarId,
        })
      
      }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      courseName: options.courseName,
      seminarName: options.seminarName,
      seminarId: options.seminarId,
    });
    var seminarId = this.data.seminarId;
    var IPPort = getApp().globalData.IPPort;
    var that = this;

    wx.request({
      url: IPPort + '/seminar/' + seminarId + '/class/'+wx.getStorageSync('classId')+'/my',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('jwt')
      },
      method: 'GET',
      success: function (data) {
        //console.log('seminar',data)
        var DATE = new Date(data.data.startTime);
        var date = DATE.toLocaleString();
        data.data.startTime = date;

        var DATE = new Date(data.data.endTime);
        var date = DATE.toLocaleString();
        data.data.endTime = date;

        // console.log(data);
        that.setData({
          info: data.data
        })
        if(that.data.info.status == 0){
          that.setData({
            isendcall:true
          })
        }
        // console.log(that.data)
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
    var seminarId = this.data.seminarId;
    var IPPort = getApp().globalData.IPPort;
    var that = this;

    wx.request({
      url: IPPort + '/seminar/' + seminarId + '/class/' + wx.getStorageSync("classId")+'/my',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('jwt')
      },
      
      method: 'GET',
      success: function (data) {
        console.log('seminar',data)
        var DATE = new Date(data.data.startTime);
        var date = DATE.toLocaleString();
        data.data.startTime = date;

        var DATE = new Date(data.data.endTime);
        var date = DATE.toLocaleString();
        data.data.endTime = date;

        // console.log(data);
        that.setData({
          info: data.data
        })
        if (that.data.info.status == 0) {
          that.setData({
            isendcall: true
          })
        }
        // console.log(that.data)
      }
    })
    this.setData({
      time: 0
    })
    this.requestData(this);
    
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
    //console.log('2222222222222222')
    this.setData({
      time: -2
    })
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

  requestData: function (that) {
    if (that.data.time <= -1)
      return
    setTimeout(function () {
      that.setData({
        time: that.data.time + 1,
      })
      var seminarId = that.data.seminarId;
      var IPPort = getApp().globalData.IPPort;
      wx.request({
         url: IPPort + '/seminar/' + seminarId + '/class/' + wx.getStorageSync("classId") + '/my',
        header: {
          Authorization: 'Bearer ' + wx.getStorageSync('jwt')
        },
        method: 'GET',
        success: function (data) {
          //console.log('seminar',data)
          var DATE = new Date(data.data.startTime);
          var date = DATE.toLocaleString();
          data.data.startTime = date;

          var DATE = new Date(data.data.endTime);
          var date = DATE.toLocaleString();
          data.data.endTime = date;

          // console.log(data);
          that.setData({
            info: data.data,
            date: new Date().toLocaleDateString(),
          })
          if (that.data.info.status == 0) {
            that.setData({
              isendcall: true
            })
          }
          if (that.data.date >= data.data.startTime && that.data.date <= data.data.endTime )
          {
            that.setData({
              isStart:true
            })
          }
          // console.log(that.data)
        }
      })
      that.requestData(that);
    }, getApp().globalData.time_span_seminar);
  },
})