Page({
  data: { // 参与页面渲染的数据
    Classmanage: {
      "id": 29,
      "name": "界面原型设计",
      "seminar": '讨论课1',
      "courseName": "OOAD",
      "groupingMethod": "fixed",
      "startTime": "2017-09-25",
      "endTime": "2017-10-09",
      "classes": [
        {
          "id": 23,
          "name": "周三12"
        },
        {
          "id": 57,
          "name": "周三34"
        }
      ]
    },
    courseId: 29,
    first:true,
  },
  onLoad: function (options) {
    //console.log(options)
    this.setData({
      courseId:options.classId
    })
    
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.request({
      url: IPPort + '/course/' + this.data.courseId + '/seminar/current',
      method: 'GET',
      //data:this.data.info,
      success: function (data) {
        console.log(data);
        that.setData({
          first:true,
          Classmanage: data.data,
        })
      }
    })
    
    //console.log(message);
    if (this.data.Classmanage.groupingMethod == 'fixed')
    {
      for (k = 0; k < this.data.Classmanage.classes.length; ++k) {
        var urls = "Classmanage.classes[" + k + "].nexturl";
        var id = this.data.Classmanage.classes[k].id
        this.setData({
          [urls]: './FixedRollStartCallUI?classId='+id
        })
      }
    }
    else{
      for (var k = 0; k < this.data.Classmanage.classes.length; ++k) {
        var urls = "Classmanage.classes[" + k + "].nexturl";
        var id = this.data.Classmanage.classes[k].id
        that.setData({
          [urls]: './RandomRollStartCallUI?classId='+id
        })
      }
      
    }
    console.log(this.data.Classmanage.classes);
  },


  RollStartCallUI: function (event) {
    var that = this;
    console.log(event);
    var next;
    for (var k = 0; k < that.data.Classmanage.classes.length;++k){
      if (that.data.Classmanage.classes[k].id == event.target.id)
        next = that.data.Classmanage.classes[k].nexturl + '&seminarId=' + that.data.Classmanage.id;
    }
    console.log(next);
      wx.navigateTo({
        url: next,
        success: function (res) {
          console.log("ok")
          that.setData({
            first: false,
          })

        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
   
  },

onShow:function(options){
  console.log("onShow")
  
  if(this.data.first==false){
    var url = wx.getStorageSync("nextUrl");
    var id = wx.getStorageSync("id");
    console.log(id)
    var i = 0;
    for (i = 0; i < this.data.Classmanage.classes.length; ++i) {
      if (this.data.Classmanage.classes[i].id == id)
        break;
    }
    console.log(this.data.Classmanage.classes[i].id)
    var nexturl = "Classmanage.classes[" + i + "].nexturl"
  this.setData({
    [nexturl]: wx.getStorageSync("nextUrl"),
  })
  console.log(this.data.Classmanage.classes[i])
  }

}


})