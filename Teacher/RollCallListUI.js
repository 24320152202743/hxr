Page({
  data: { // 参与页面渲染的数据
    studentList: {
     
    }
    
  },
  onLoad: function (options) {
    // 页面渲染后 执行
     var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    
    var k = options.classId;
    this.setData({
      classInfo: wx.getStorageSync("classInfo" + k),
      seminarId:wx.getStorageSync("seminarId"),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
    })
    wx.request({
      url: IPPort +'/seminar/'+that.data.seminarId+ '/class/'+that.data.classInfo.id+'/attendance/present',
      header: {
        Authorization: 'Bearer ' + wx.getStorageSync('jwt')
      },
      method: 'GET',
      
      //data:this.data.info,
      success: function (data) {
        console.log('studentList',data)
        that.setData({
          studentList: data.data,
        })
       console.log('studentList', that.data.studentList)
      }
    });
  }
})