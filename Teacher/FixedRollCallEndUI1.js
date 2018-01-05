Page({
  data: { // 参与页面渲染的数据
    studentList: {
      "numPresent": 4,
      "present": [
     
      ],
      "late": [
       
      ],
      "absent": [
       
      ]
    }
  },
  onLoad: function (options) {
    // 页面渲染后 执行
    
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
    
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.request({
      url: IPPort + "/class/"+that.data.classInfo.id+"/attendance?showPresent=true&showLate=true&showAbsent=true",
      method: 'GET',
      //data:this.data.info,
      success: function (data) {
        that.setData({
          studentList: data.data,
        })

      }
    });


  }
})