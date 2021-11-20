const db=wx.cloud.database()
let shoucang = false
let dianzan = false
var dianzan_count = 0
var shoucang_count = 0
Page({

    /**
     * 页面的初始数据
     */
    
    data: {
        img_shoucang:"../../image/favor.png",
        img_dianzan:"../../image/appreciate.png",

        datalist1:""
    },

    
    // 收藏
    clickMe1(){
        if(shoucang){
            this.setData({
                img_shoucang:"../../image/favor.png"
            })

            wx.showToast({
              title: '取消收藏',
              icon: 'success',
              duration: 1000,
              mask: true,
              success: function() {
                setTimeout(function() {
                }, 1000) //延迟时间
              },
            });
            shoucang_count--
            shoucang = false
        }
        else{
            this.setData({
                img_shoucang:"../../image/favor_fill.png"
            })
            wx.showToast({
                title: '收藏成功',
                icon: 'success',
                duration: 1000,
                mask: true,
                success: function() {
                  setTimeout(function() {
                  }, 1000) //延迟时间
                },
              });
            shoucang_count++
            shoucang = true
        }  
        console.log(shoucang_count)
    },


    // 点赞判断
    clickMe2(){
        if(dianzan){
            this.setData({
                img_dianzan:"../../image/appreciate.png"
            })

            wx.showToast({
              title: '取消点赞',
              icon: 'success',
              duration: 1000,
              mask: true,
              success: function() {
                setTimeout(function() {
                }, 1000) //延迟时间
              },
            });
            dianzan = false
        }
        else{
            this.setData({
                img_dianzan:"../../image/appreciate_fill.png"
            })
            wx.showToast({
                title: '点赞成功',
                icon: 'success',
                duration: 1000,
                mask: true,
                success: function() {
                  setTimeout(function() {
                  }, 1000) //延迟时间
                },
              });
            dianzan = true
        }  
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
            datalist1:res.data
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