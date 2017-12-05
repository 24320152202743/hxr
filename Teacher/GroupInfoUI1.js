// pages/TeacherClass/CallInRoll/GroupInfoUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // /seminar / { seminarId } / class/{ classId } / attendance / absent
    //按ID获取讨论课班级缺勤名单
    absent: [
      {
        "id": 34,
        "name": "张六"
      }
    ],
    /*/seminar/{seminarId}/class/{classId}/attendance/late
    按ID获取讨论课班级迟到签到名单*/

    late: [
      {
        "id": 3412,
        "name": "王五"
      },
      {
        "id": 5234,
        "name": "王七九"
      }
    ],



    classGroup: [
      {
        "id": 28,
        "name": "1A1",
        "topics": [
          {
            "id": 257,
            "name": "领域模型与模块"
          }
        ]
      },

      {
        "id": 29,
        "name": "1A2",
        "topics": [
          {
            "id": 257,
            "name": "领域模型与模块"
          }
        ]
      }
    ],

    groupInfo: {
      "id": 28,
      "leader": {
        "id": 8888,
        "name": "张三"
      },
      "members": [
        {
          "id": 5324,
          "name": "李四"
        },
        {
          "id": 5678,
          "name": "王五"
        }
      ],
      "topics": [
        {
          "id": 257,
          "name": "领域模型与模块"
        }
      ],
      "report": ""
    },
    display: true,
    display_group: 28,
    showModal: false,
    lateOn: [],
    lateSelectMem: 3412,
  },

  showmodalimg: function () {
    if (this.data.late.length == 0) {
      wx.showToast({
        title: '请等待学生签到',
        icon: 'loading',
        duration: 2000
      })
    }
    else
      this.setData({
        showModal: true
      })
  },


  select: function (event) {
    this.setData({
      lateSelectMem: event.target.id,
    })
    console.log(this.data.lateSelectMem);
  },

  cancelLateStudent: function (event) {
    console.log(event);
    var studentID = event.currentTarget.id;
    var k;
    var len = this.data.late.length;
    var that = 'late[' + len + ']';
    for (k = 0; k < this.data.lateOn.length; ++k) {
      if (studentID == this.data.lateOn[k].id) {
        var student = this.data.lateOn[k];
        this.data.lateOn.splice(k, 1);
        console.log(student)
        break;
      }
    }
    this.setData({
      [that]: student,
      lateOn: this.data.lateOn,

    });

    this.setData({
      lateSelectMem: this.data.late[this.data.late.length - 1].id,
    });
    console.log(this.data.lateSelectMem);
    console.log(this.data.late[this.data.late.length - 1].id)
    console.log(this.data.late)
  },
  /**
     * 弹出框蒙层截断touchmove事件
     */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function (event) {
    this.hideModal();
    var len = this.data.lateOn.length;
    var that = 'lateOn[' + len + ']';
    var a = "";
    var k;
    for (k = 0; k < this.data.late.length; ++k) {
      if (this.data.late[k].id == this.data.lateSelectMem) {
        a = this.data.late[k];
        a.group = this.data.display_group;
        this.data.late.splice(k, 1);
        break;
      }
    }
    var l;
    if (this.data.late.length == 0)
      l = "";
    else { l = this.data.late[0].id; }
    this.setData({
      [that]: a,
      late: this.data.late,
      lateSelectMem: l,
    });

    console.log(this.data.lateOn);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      display_group: this.data.classGroup[0].id,
      lateSelectMem: this.data.late[0].id,

    });
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


  changeGroup: function (event) {
    if (this.data.display == true && this.data.display_group == event.currentTarget.id)
      this.setData({
        display: false,
      });
    else if (this.data.display == false && this.data.display_group == event.currentTarget.id)
      this.setData({
        display: true,
      });
    else if (this.data.display_group != event.currentTarget.id)
      this.setData({
        display_group: event.currentTarget.id,
        display: true,
        groupInfo: {
          "id": event.currentTarget.id,
          "leader": {
            "id": 8888,
            "name": "张三"
          },
          "members": [
            {
              "id": 5324,
              "name": "李四"
            },
            {
              "id": 5678,
              "name": "王五"
            }
          ],
          "topics": [
            {
              "id": 257,
              "name": "领域模型与模块"
            }
          ],
          "report": ""
        },
      });

  }



})