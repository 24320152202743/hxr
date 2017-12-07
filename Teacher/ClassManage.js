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
          "id": 53,
          "name": "周三12"
        },
        {
          "id": 57,
          "name": "周三34"
        }
      ]
    },
    courseId: 29,
    nextUrl:'',
    first:true,
  },
  onLoad: function (options) {
    console.log(options)
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
    console.log(message);
    if (this.data.Classmanage.groupingMethod == 'fixed')
    {
      that.setData({
        nextUrl : './FixedRollStartCallUI?ClassId='
      })
    }
    else{
      that.setData({
        nextUrl: './RandomRollStartCallUI?ClassId='
      })
    }
  },


  RollStartCallUI: function (event) {
    var that = this;
      wx.navigateTo({
        url: that.data.nextUrl + event.target.id + '&seminarId=' + that.data.Classmanage.id,
        success: function (res) {
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
  if(this.data.first==false)
  this.setData({
    nextUrl: wx.getStorageSync("nextUrl"),
  })

}


})