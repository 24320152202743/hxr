// pages/TeacherClass/CallInRoll/GroupInfoUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ///seminar/{seminarId}/class/{classId}/attendance/late
   // 按ID获取讨论课班级迟到签到名单
    lateList: [
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
  },

  showmodalimg: function () {
    this.setData({
      showModal: true
    })
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
  onConfirm: function () {
    this.hideModal();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      display_group: this.data.classGroup[0].id,

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