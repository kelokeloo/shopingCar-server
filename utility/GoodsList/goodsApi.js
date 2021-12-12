const fs = require('fs')
let Mock = require('mockjs')
let random = Mock.Random


// 获取商品列表
const goodPhoneList = ()=>{
  const list = []
  const files = fs.readdirSync('public/images/phone')
  files.forEach((img,index)=>{
    // http://localhost:3000/images/phone/XiaomiMix4.webp
    list.push({
      id : index,      
      imgUrl : `http://localhost:8080/images/phone/${img}`,
      goodsName : img.slice(0, -5),
      goodsDisc : random.cparagraph(2),
      goodsPrice : Mock.mock({
        "number|1000-5000": 100
      }).number
    })
  })
  return list
}

// 获取所有商品细节列表
const getAllPhoneDetial_Api = ()=>{
  const list = goodPhoneList()
  
  // 添加细节信息 版本 颜色
  list.forEach((item)=>{
    const type = ['8GB+128GB','6GB+128GB','8GB+256GB','8GB+512GB']
    const color = ['红','白','黑']
    item.type = type,
    item.color = color
  })
  return list
}

// 获取某个商品的细节
const getPhoneDetailById_Api = (id)=>{
  const list = getAllPhoneDetial_Api()
  let index = list.findIndex((item)=>{
    return item.id == id
  })
  if(index === -1){
    return false;
  }
  return list[index] // 返回商品细节信息
}

getAllPhoneDetial_Api()


exports.phoneList = goodPhoneList()
exports.getPhoneDetailById_Api = getPhoneDetailById_Api