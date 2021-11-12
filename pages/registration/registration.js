Page({
  /**
   * 页面的初始数据
   */
  data: {
    companyInfo:{},
    comProps: [],
    comCategs:[],
    decObjects:[],
    decItems:[],
    comPropName:"营利性",
    comCategName:"企业",
    decObjName:"企业法人",
    decItemName:"设立",
    busFlag:false,
    comFlag:false,
    agentFlag:false,
    addrchange:false,
     // 判断显示文字还是图片(预览图片标识)
		frontShow: true,
		// 身份证正面路径
		frontSrc: '',
		//判断显示文字还是图片(预览图片标识)
    backShow: true,
		//身份证反面路径
    backSrc: ''
  },
  compropChange:function(e){
    var comProp = e.detail.value;
    //this.setData({comProp:comProp});
    console.log("单选框value:",e.detail.value);
    if(comProp=="营利性"){
      var defCateg ='企业'
      var defObject ='企业法人'
      this.setData({comCategName:defCateg});
      this.setData({decObjName:defObject});
    }else{
      var defCateg ='民办非企业'
      var defObject ='自然人'
      this.setData({comCategName:defCateg});
      this.setData({decObjName:defObject});
      
    }
    this.setData({addrchange:false});
    this.setData({comPropName:comProp});
  },
  comcategChange:function(e){
    var comCateg = e.detail.value;
    if(comCateg == '社会团体'){
      var defObject ='自然人';
      this.setData({decObjName:defObject});
  
    }else if(comCateg == '民办非企业'){
      var defObject ='自然人';
      this.setData({decObjName:defObject});
     
    }else if(comCateg == '农民专业合作社'){
      var defObject ='其他组织';
      this.setData({decObjName:defObject});
  
    }else if(comCateg == '农民专业合作社分支机构'){
      var defObject ='自然人';
      this.setData({decObjName:defObject});

    }else if(comCateg == '个体工商户'){
      var defObject ='自然人';
      this.setData({decObjName:defObject});
    }else if(comCateg == '企业'){
      var defObject ='企业法人';
      this.setData({decObjName:defObject});
    }
    this.setData({addrchange:false});
    this.setData({comCategName:comCateg});
    console.log("单选框value:",e.detail.value);
  },
  decobjectChange:function(e){
    var decObject = e.detail.value;
    this.setData({decObjName:decObject});
    console.log("单选框value:",e.detail.value);
    if(e.detail.value == '事业法人'){
      this.setData({busFlag:true});
      this.setData({comFlag:false});
     
    }else if(e.detail.value == '社会组织法人'){
      this.setData({busFlag:false});
      this.setData({comFlag:true});
      
    }else {
      this.setData({busFlag:false});
      this.setData({comFlag:false});
    }
    this.setData({addrchange:false});
  },
  decitemChange:function(e){
    var decItem = e.detail.value;
   
    if(decItem == '区范围内变更地址'){
      this.setData({addrchange:true});
    }else if(decItem == '变更地址'){
      this.setData({addrchange:true});
    }else{
      this.setData({addrchange:false});
    }
    this.setData({decItemName:decItem});
    console.log("单选框value:",e.detail.value);
  },
  checkboxChange:function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var agentFlag = false;
    var agentCb = new Object();
    agentCb = e.detail.value;
    console.log('checkbox发生change事件，携带value值为：', agentCb)
    if(agentCb[0]=='cb'){
      agentFlag=true;
      this.setData({agentFlag:agentFlag});
    }else{
      agentFlag=false;
      this.setData({agentFlag:agentFlag});
    }
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var companyInfo = new Object();
    companyInfo = e.detail.value
    //this.setData({companyInfo:companyInfo});
    var legalImageSrc= [];
    legalImageSrc.push(this.frontSrc);
    legalImageSrc.push(this.backSrc);
    companyInfo.legalImageSrc = legalImageSrc;
    companyInfo.agentFlag = this.data.agentFlag;
    this.setData({companyInfo:companyInfo});
    //网络请求
    // wx.request({
    //   url: 'example.php', //仅为示例，并非真实的接口地址
    //   data: this.passenger,
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success (res) {
    //     console.log(res.data)
    //   }
    // });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  imageRotate: function () {
    // this.animation.rotate(45).step()
    // this.setData({animation: this.animation.export()})
  },
   // 拍摄身份证正面-跳转到拍摄页
   goFront: function() {
    wx.navigateTo({
			url: '/pages/frontOfIDCard/frontOfIDCard',
    });
    console.log("goFront 正面拍照的路径：",this.frontSrc);
  },
  // 拍摄身份证反面-跳转到拍摄页
  goBack: function() {
    wx.navigateTo({
			url: '/pages/backOfIDCard/backOfIDCard',
    });
    console.log("goBack 反面拍照的路径：",this.backSrc)
  },
  
  radioSignature:function(e){
    wx.navigateTo({
      url: '/pages/commitment/commitment',
    })
  },

  initConfig: function(){
    var that = this;
      var comProps = wx.getStorageSync('comProps');
      that.setData({comProps:comProps});
      var comCategs=wx.getStorageSync('comCategs');
      that.setData({comCategs:comCategs});
      var decObjects = wx.getStorageSync('decObjects');
      that.setData({decObjects:decObjects});
      var decItems = wx.getStorageSync('decItems');
      that.setData({decItems:decItems});
      var defItemValue = wx.getStorageSync('defItemValue');
      that.setData({
        comPropName:defItemValue.comPropName,
        comCategName:defItemValue.comCategName,
        decObjName:defItemValue.decObjName,
        decItemName:defItemValue.decItemName
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 页面初始化 options为页面跳转所带来的参数
     this.initConfig();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.animation = wx.createAnimation()
    // this.imageRotate();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.frontSrc = wx.getStorageSync('frontSrc');
    this.backSrc = wx.getStorageSync('backSrc');
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