Page({

  /**
   * 页面的初始数据
   */
  data: {
    defItemValue:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var defItemValue = new Object();
    defItemValue=wx.getStorageSync('defItemValue');
    if(!defItemValue){
      defItemValue.comPropName="营利性";
      defItemValue.comCategName="企业";
      defItemValue.decObjName="企业法人";
      defItemValue.decItemName="设立";
      this.setData({defItemValue:defItemValue});
      wx.setStorageSync('defItemValue', defItemValue);
    }
  },
  registration:function(e){
    //console.log("注册点击事件"+e.target.id);
    var btn_id = e.target.id;
    var decItems = wx.getStorageSync('decItems');
    var defItemValue = new Object();
    defItemValue=wx.getStorageSync('defItemValue');
    switch(btn_id){
      case "btn_setup":
        console.log("企业机构设立"+e.target.id);
        for(var i in decItems){
          var decItem = decItems[i];
          if((decItem.categ=="企业")&&(decItem.objName =="企业法人")){
            if(decItem.name=="设立"){
              decItem.checked=true;
              defItemValue.decItemName="设立";
            }else{
              decItem.checked=false;
            }
            console.log("申报事项为："+decItem.checked);
          }
          
        }
        wx.setStorageSync('decItems', decItems);
        wx.setStorageSync('defItemValue', defItemValue);
        wx.navigateTo({
          url: '/pages/registration/registration',
        })
      break;
      case "btn_addrchange":
        console.log("企业机构地址变更"+e.target.id);
        for(var i in decItems){
          var decItem = decItems[i];
          if((decItem.categ=="企业")&&(decItem.objName =="企业法人")){
            if(decItem.name=="变更地址"){
              decItem.checked=true;
              defItemValue.decItemName="变更地址";
            }else{
              decItem.checked=false;
            }
            console.log("申报事项为："+decItem.checked);
          }
        }
        wx.setStorageSync('decItems', decItems);
        wx.setStorageSync('defItemValue', defItemValue);
        wx.navigateTo({
          url: '/pages/registration/registration',
        })
      break;
      case "btn_addrmove":
        console.log("企业跨市县迁移"+e.target.id);
        for(var i in decItems){
          var decItem = decItems[i];
          if((decItem.categ=="企业")&&(decItem.objName =="企业法人")){
            if(decItem.name=="跨市县企业迁移"){
              decItem.checked=true;
              defItemValue.decItemName="跨市县企业迁移";
            }else{
              decItem.checked=false;
            }
            console.log("申报事项为："+decItem.checked);
          }
        }
        wx.setStorageSync('decItems', decItems);
        wx.setStorageSync('defItemValue', defItemValue);
        wx.navigateTo({
          url: '/pages/registration/registration',
        })
      break;
      case "btn_checkitem":
        console.log("我的事项"+e.target.id);
        
        wx.navigateTo({
          url: '/pages/approve/approve',
        });
      break;
      default:
      break;
    }
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