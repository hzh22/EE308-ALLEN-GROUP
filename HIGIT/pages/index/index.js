const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  
  data: {   
    // datalistArticle:"",
    // datalistVideo:""
    articleList:[],
    videoList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // db.collection("project1").get({
    //   success:res=>{
    //     console.log(res)
    //      this.setData({
    //        datalistArticle:res.data
    //       })
    //      }
    //    })

    // db.collection("project2").get({  
    //    success:res=>{
    //        console.log(res)
    //        this.setData({
    //         datalistVideo:res.data
    //       })
    //     }
    // })

    let that = this
    wx.cloud.database().collection("project1").get({
      success(res){
        that.setData({
          articleList:res.data
        })
        console.log(res.data)
      }
    })

    wx.cloud.database().collection("project2").get({
      success(res){
        that.setData({
          videoList:res.data
        })
        // console.log(res)
      }
    })
  },



  //跳转到article_content页面
  ToArticleContent(event){
    let article = event.currentTarget.dataset.article;
    wx.navigateTo({
      url:"/pages/article_content/article_content?articleid="+article._id
    })
  },
  //跳转到video_content页面
  ToVideoContent(event){
    let video = event.currentTarget.dataset.video;
    wx.navigateTo({
      url:"/pages/video_content/video_content?videoid="+video._id
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