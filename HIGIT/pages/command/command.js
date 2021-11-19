const db=wx.cloud.database();
const _=db.command;
Page({

    /**
     * 页面的初始数据
     */
    data: {
datalist:""
    },

    //比较： eq等于 neq不等于 lt小于等于 lte 小于等于 gt大于 gte大于等于 in数组内 nin不在数组内 

    //     db.collection("project1")
    //     .where({
    //         dianzan:_.in([15,80])
    //     })
    //     .get()
    //     .then(res=>{
    //         this.setData({
    //             dataList1:res.data
    //         })
    //     })
    // },

       //逻辑判断 and or not nor
    //    getData(){
    //     db.collection("project1")
    //     .where({
    //         dianzan:_.and(_.gt(16),_.lt(80))//大于16小于80
    //     })
    //     .get()
    //     .then(res=>{
    //         this.setData({
    //             dataList2:res.data
    //         })
    //     })
    getData:function(){
    db.collection("project1").get({
      success:res=>{
        console.log(res)
        this.setData({
          datalist:res.data
        })
        } 
      })
    },










    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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