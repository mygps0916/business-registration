// app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });

    //自定义导航栏
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
   //自定义导航栏end
    var passenger = wx.getStorageSync('passenger')|| [];
    if(!passenger){
      passenger = this.initPassenger();
    }
    wx.setStorageSync('passenger', passenger);
    this.initConfig();
  },
  initConfig:function(){
    //机构属性
    var comProps = new Object();
    //机构类别
    var comCategs = new Object();
    //申报对象
    var decObjects = new Object();
    //申报事项
    var decItems = new Object();
    comProps = wx.getStorageSync('comProps');
    if(!comProps){
      comProps= [
        { name: '营利性', },
        { name: '非营利性',checked: 'true' },
      ];
    }
    wx.setStorageSync('comProps', comProps);
    comCategs=wx.getStorageSync('comCategs');
    if(!comCategs){
      comCategs=[
        {name:'社会团体',prop:'非营利性'},
        {name:'民办非企业',prop:'非营利性',checked:'true'},
        {name:'企业',prop:'营利性',checked:'true'},
        {name:'个体工商户',prop:'营利性'},
        {name:'农民专业合作社',prop:'营利性'},
        {name:'农民专业合作社分支机构',prop:'营利性'}

    ];
    }
   wx.setStorageSync('comCategs', comCategs);
   decObjects = wx.getStorageSync('decObjects');
   if(!decObjects){
      decObjects=[
        {name:'自然人',categ:'社会团体',prop:'非营利性',checked:'true'},
        {name:'自然人',categ:'民办非企业',prop:'非营利性',checked:'true'},
        {name:'社会组织法人',categ:'社会团体',prop:'非营利性'},
        {name:'社会组织法人',categ:'民办非企业',prop:'非营利性'},
        {name:'企业法人',categ:'民办非企业',prop:'非营利性'},
        {name:'事业法人',categ:'民办非企业',prop:'非营利性'},
        {name:'其他组织',categ:'农民专业合作社',prop:'营利性',checked:'true'},
        {name:'自然人',categ:'农民专业合作社分支机构',prop:'营利性',checked:'true'},
        {name:'自然人',categ:'个体工商户',prop:'营利性',checked:'true'},
        {name:'企业法人',categ:'企业',prop:'营利性',checked:'true'}

      ];
   }
   wx.setStorageSync('decObjects', decObjects);
   decItems = wx.getStorageSync('decItems');
   if(!decItems){
    decItems=[
      {name:'设立',objName:'自然人',categ:'社会团体',checked:'true'},
      {name:'区范围内变更地址',objName:'自然人',categ:'社会团体'},
      {name:'设立',objName:'自然人',categ:'民办非企业',checked:'true'},
      {name:'区范围内变更地址',objName:'自然人',categ:'民办非企业'},
      {name:'设立',objName:'自然人',categ:'农民专业合作社分支机构',checked:'true'},
      {name:'变更地址',objName:'自然人',categ:'农民专业合作社分支机构'},
      {name:'设立',objName:'其他组织',categ:'农民专业合作社',checked:'true'},
      {name:'变更地址',objName:'其他组织',categ:'农民专业合作社'},
      {name:'开业登记',objName:'自然人',categ:'个体工商户',checked:'true'},
      {name:'变更地址',objName:'自然人',categ:'个体工商户'},
      {name:'设立',objName:'社会组织法人',categ:'社会团体',checked:'true'},
      {name:'区范围内变更地址',objName:'社会组织法人',categ:'社会团体'},
      {name:'设立',objName:'社会组织法人',categ:'民办非企业',checked:'true'},
      {name:'区范围内变更地址',objName:'社会组织法人',categ:'民办非企业'},
      {name:'设立',objName:'企业法人',categ:'民办非企业',checked:'true'},
      {name:'区范围内变更地址',objName:'企业法人',categ:'民办非企业'},
      {name:'设立',objName:'企业法人',categ:'企业',checked:'true'},
      {name:'变更地址',objName:'企业法人',categ:'企业'},
      {name:'跨市县企业迁移',objName:'企业法人',categ:'企业'},
      {name:'设立',objName:'事业法人',categ:'民办非企业',checked:'true'},
      {name:'区范围内变更地址',objName:'事业法人',categ:'民办非企业'},
      {name:'设立',objName:'其他组织',checked:'true'},
      {name:'变更地址',objName:'其他组织'}
    ]
   }
   wx.setStorageSync('decItems', decItems);
  },
  globalData: {
    userInfo: null
  }
})
