const db=wx.cloud.database()
var myvalue="";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataObj:""
    },

    // 获取记录个数
    btnNum(){
        db.collection("project1").count()
        .then(res=>{
            console.log(res)
        })

    },


    //获取输入内容
    myinput(res){
        var vlu = res.detail.value;
        myvalue = vlu
    },


    // 删除记录
    delData(){
        db.collection("project1")
        .doc(myvalue)
        .remove()
        .then(res=>{
            console.log(res)
        })
    },





 //更新库 
    //update局部更新一个或多个记录
    updateData(){
        db.collection("project1").where({
            author:"nt"
        }).update({
            data:{
                author:"sb"
            }
        }).then(res=>{
            console.log(res)
        }),
            
        //set替换更新一个记录
        db.collection("project1").doc("fa24ce1a619133c406774cbb273e6c69").set({
            data:{
                title:"芜湖起飞"
            }
            }).then(res=>{
                console.log(res)
        })
    },


    // //查询记录
    // getData(){
    //     db.collection("project1").where({
    //         author:"A"
    //     }).get()
    //     .then(res=>{
    //         console.log(res)
    //     })
    // },

    //添加数据
    addData(){
        wx.showLoading({
          title: '数据加载中',
          mask:"true"
        })
        db.collection("project1").add({
            data:{
                title:"测试标题",
                author:"傻逼",
                content:"测试内容部分"
            }
        }).then(res=>{
            console.log(res)
            wx.hideLoading()
        })
    },

    //写入数据库
    btnSub(res){
        console.log(res)
        var title=res.detail.value.title;
        var author=res.detail.value.author;
        var content=res.detail.value.content;
        var {title,author,content}=res.detail.value;
        db.collection("project1").add({
            data:{
                title:title,
                author:author,
                content:content
            }
        }).then(res=>{
            console.log(res)
            wx.hideLoading()
        })

        // var resVlu=res.detail.value
        // db.collection("project1").add({
        //     data:resVlu
        // }).then(res=>{
        //     console.log(res)
        //     })
    },

    //查询记录---条件查询(limit    orderBy(排序)      skip(limit skip实现分页) )
    getData(){       
        db.collection("project1").limit(3).skip(3).orderBy("title","asc").get()
         .then(res=>{
         this.setData({
            dataArr:res.data
            })
        })
    },
 

    
    /**
     * 生命周期函数--监听页面加载
     */

    //监听库————随时可视删库
    onLoad: function (options) {

        this.getData();
        db.collection("project1").watch({
            onChange:res=>{
                console.log(res.docs)
                this.setData({
                    dataArr:res.docs
                })
            },
            onError:err=>{
                console.log(err)
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