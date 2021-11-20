const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
  
    dataList1:[
      {title:"1",author:"A",time:"2021/11/11"},
      {title:"2",author:"B",time:"2021/11/12"}
    ],


    dataList2:[
      {title:"1",photo:"/image/1.jpg",Eng:"A"},
      {title:"2",photo:"/image/2.jpg",Eng:"B"},
      {title:"3",photo:"/image/3.jpg",Eng:"C"},
      {title:"4",photo:"/image/4.jpg",Eng:"D"},
      {title:"5",photo:"/image/5.jpg",Eng:"E"},
      {title:"6",photo:"/image/6.jpg",Eng:"F"},
      {title:"7",photo:"/image/7.jpg",Eng:"G"},
      {title:"8",photo:"/image/8.jpg",Eng:"H"}
    ],
      
    datalist:""
  },



        // 获取记录个数
        btnNum(){
          db.collection("project1").count()
          .then(res=>{
              console.log(res)
          })
  
      },



 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      db.collection("project1").get({
        data:{},
        success:res=>{
          console.log(res)
          this.setData({
            datalist:res.data
          })
          }
        })
    
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
    wx.request({
      //发送网络请求
      url: 'url',
      success:res=>{
        console.log(res)
      }
    })
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
    
  }
})