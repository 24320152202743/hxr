Page({
  data: { // 参与页面渲染的数据
    studentList: {
      "numPresent": 4,
      "present": [
        {
          "id": 2357,
          "name": "张三"
        },
        {
          "id": 8232,
          "name": "李四"
        }
      ]
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
      url: IPPort + '/class/'+that.data.classInfo.id+'/attendance?showPresent=true',
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