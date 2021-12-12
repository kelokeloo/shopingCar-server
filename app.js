const { json } = require('body-parser');
const express = require('express')
const goodsApi = require('./utility/GoodsList/goodsApi.js')


// 导入数据

const port = 8080

const app = express()

// 静态图片托管
app.use(express.static('public'))

// 获取手机列表
app.get('/api/Goodslist', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  const goodsList = JSON.stringify(goodsApi.phoneList)
  res.send(goodsList)
})

// 获取指定手机的详细数据
app.get('/api/getPhoneDetailById/:id', (req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*')
  const goodsList = JSON.stringify(goodsApi.getPhoneDetailById_Api(req.params.id))
  res.send(goodsList)
})



app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`);
})

// http://localhost:3000/images/phone/XiaomiMix4.webp