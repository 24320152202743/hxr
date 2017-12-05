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
      ],
      "late": [
        {
          "id": 3412,
          "name": "王五"
        },
        {
          "id": 5234,
          "name": "王七九"
        }
      ],
      "absent": [
        {
          "id": 34,
          "name": "张六"
        }
      ]
    }
  },
  onLoad: function () {
    // 页面渲染后 执行
    this.setData({
      classInfo: wx.getStorageSync("classInfo"),
      //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories

    })
  }
})