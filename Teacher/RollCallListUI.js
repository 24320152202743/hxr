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
  onLoad: function () {
    // 页面渲染后 执行
    var that = this//不要漏了这句，很重要
    that.setData({
      classInfo: wx.getStorageSync("classInfo"),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
    wx.request({
      url: "RollCallListUI",
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        
      }
    })
  }
})