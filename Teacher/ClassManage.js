Page({
  data: { // 参与页面渲染的数据
    Classmanage: {
      "id": 29,
      "name": "界面原型设计",
      "seminar":'讨论课1',
      "courseName": "OOAD",
      "groupingMethod": "fixed",
      "startTime": "2017-09-25",
      "endTime": "2017-10-09",
      "classes": [
        {
          "id": 53,
          "name": "周三12"
        },
        {
          "id": 57,
          "name": "周三34"
        }
      ]
    }


  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
   /* wx.request({
      url: '',
      header: {
        'content-type': 'application/json'
      },
      //请求后台数据成功  
      success: function (res) {
        console.log('返回的code' + res.data.code)
        console.log('返回的id' + res.data.message)
        that.setData({
          name:res.data.name
        })
      }
    })
*/
  },

 
  RollStartCallUI:function(){
    if (this.data.Classmanage.groupingMethod=='fixed'){
    wx.navigateTo({
    url: './FixedRollStartCallUI',
   success: function(res){
     // success
   },
   fail: function() {
     // fail
   },
   complete: function() {
     // complete
   }
 })}
 else{
      wx.navigateTo({
        url: './RandomRollStartCallUI',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
 }
  }
  
  
})