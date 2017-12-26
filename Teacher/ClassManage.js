Page({
  data: { // 参与页面渲染的数据
    Classmanage: {
    },
    courseId: 29,
  },
  onLoad: function (options) {
    //console.log(options)
    this.setData({
      courseId: options.classId
    })
    var IPPort = getApp().globalData.IPPort;
    var message = "";
    var that = this;
    wx.request({
      url: IPPort + '/course/' + this.data.courseId + '/seminar/current',
      method: 'GET',
      //data:this.data.info,
      success: function (data) {
        that.setData({
          Classmanage: data.data,
        })
        console.log(that.data.Classmanage);
        try {
          var key = "classNextUrl" + that.data.Classmanage.id;
          var classes = wx.getStorageSync(key);
          if (classes) {
            that.setData({
              ["Classmanage.classes"]: classes,
            })
          }
          else {
            if (that.data.Classmanage.goupingMethond == 'fixed') {
              console.log("fixed");
              for (k = 0; k < that.data.Classmanage.classes.length; ++k) {
                var urls = "Classmanage.classes[" + k + "].nexturl";
                var id = that.data.Classmanage.classes[k].id
                that.setData({
                  [urls]: './FixedRollStartCallUI?classId=' + id
                })
              }
            }
            else {
              for (var k = 0; k < that.data.Classmanage.classes.length; ++k) {
                var urls = "Classmanage.classes[" + k + "].nexturl";
                var id = that.data.Classmanage.classes[k].id
                that.setData({
                  [urls]: './RandomRollStartCallUI?classId=' + id
                })
              }
            }
          }
        }
        catch (e) {

        }
      }
    })
    

  },


  RollStartCallUI: function (event) {
    var that = this;
    var next;
    for (var k = 0; k < that.data.Classmanage.classes.length; ++k) {
      if (that.data.Classmanage.classes[k].id == event.target.id)
        next = that.data.Classmanage.classes[k].nexturl + '&seminarId=' + that.data.Classmanage.id;
    }
    wx.navigateTo({
      url: next,
      success: function (res) {
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },

  onShow: function (options) {
    console.log("onShow")
    try {
      var url = wx.getStorageSync("nextUrl");
      var id = wx.getStorageSync("id");
      if (url && id) {
        var i = 0;
        for (i = 0; i < this.data.Classmanage.classes.length; ++i) {
          if (this.data.Classmanage.classes[i].id == id)
            break;
        }
        var nexturl = "Classmanage.classes[" + i + "].nexturl"
        this.setData({
          [nexturl]: wx.getStorageSync("nextUrl"),
        })
      }
    }
    catch (e) {
      console.log("第一次打开");
    }
    console.log(this.data.Classmanage);
  },


  onUnload: function () {
    wx.setStorageSync("classNextUrl" + this.data.Classmanage.id, this.data.Classmanage.classes);
  },

})