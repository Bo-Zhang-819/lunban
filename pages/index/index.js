// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    memberList: ["卢穗杰","张萌","张博","徐宁蔚","卢冰","熊佳慧","贾孟达","杜天苗"],
    resultList: [],
    randomList:[],
    inputName: '',
    status: false,
    value: '开始',
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  // roll:function(){
  //   let status = this.data.status;
  //   if(status === false){
  //     // debugger;
  //     this.start();
  //     this.setData({
  //       status: true,
  //       value: '结束',
  //     })
  //   }else{
  //     // this.stop();
  //     this.setData({
  //       status: false,
  //       value: '开始',
  //     })
  //   }
  // },
  clean:function(){
    this.setData({
      randomList: [],
      resultList:[],
    })
    // this.modalcnt("已清空！");
    this.showok("清空成功！");
  },
  start:function(){
    let mlen = this.data.memberList.length;

        let num = this.randomB(0,  mlen - 1);
        if(this.data.randomList.length === 0 ){
          this.data.randomList.push(num);
        }else if(this.data.randomList.length ===3){
          this.modalcnt("已达到人数上限！");
          return ;
        }else if(this.data.randomList.length === 1 || this.data.randomList.length === 2){
          for(let i = 0; i < this.data.randomList.length;i++){
            if(num===this.data.randomList[i]){
              return this.start();
            }
          }
          this.data.randomList.push(num);
        }
        
        this.data.resultList.push(this.data.memberList[num]);
        console.log(this.data.resultList,this.data.randomList);
  },
  // stop:function(){
  //   clearInterval(timer);
  // },
  randomB:function(a,b){
    let randomNum = Math.floor(Math.random() * (b - a) + a);
    return randomNum;
  },
  inputContent:function(e){
     this.setData({
        inputName: e.detail.value
     });
  },
  addConfirme:function(e){
    if(this.data.inputName){
      this.data.memberList.push(this.data.inputName);
      this.showok('添加成功！');
    }else{
      this.modalcnt("请输入正确的名字");
    }

  },
  modalcnt:function(content){
    wx.showModal({
      title: '提示',
      content: content,
      success: function(res) {
        if (res.confirm) { 
        } else if (res.cancel) {
        }
    }
  })
},
showok:function(e){
  wx.showToast({
    title: e,
    icon:'success',
    duration:2000
  })
  
},
  onLoad() {
    
  },
  
})
