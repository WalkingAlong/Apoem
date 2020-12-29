//index.js
const jinrishici = require('../../utils/jinrishici.js')
const app = getApp()

Page({
  data: {
    content: '',
    trans: '',
  },

  onLoad: function() {
    jinrishici.load(result => {
      // 下面是处理逻辑示例
      console.log(result)
      if(result.status == 'success') {
        const { content, origin} = result.data;
        console.log('origin===',origin);
        const index = origin.content.findIndex(item => {
          return content == item;
        })
        const trans = origin.translate && origin.translate[index];
        console.log('index===',index);
        this.setData({
          "content": content,
          "trans": trans,
        })
      }
    })
  },
  update: function() {
    jinrishici.load(result => {
      // 下面是处理逻辑示例
      console.log(result)
      if(result.status == 'success') {
        const { content, origin} = result.data;
        console.log('origin===',origin);
        const index = origin.content.findIndex(item => {
          return content == item;
        })
        const trans = origin.translate && origin.translate[index];
        console.log('index===',index);
        this.setData({
          "content": content,
          "trans": trans,
        })
      }
    })
  },

})


