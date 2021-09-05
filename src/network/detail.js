import {request} from './request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class goodsInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title,
    this.price = itemInfo.price,
    this.oldPrice = itemInfo.oldPrice,
    this.discount = itemInfo.discountDesc,
    this.bgColor = itemInfo.discountBgColor
    this.columns = columns,
    this.services = services
  }
}

export class shopInfo {
  constructor(goods,sell,shopName,score,shopLogo) {
    this.goods = goods,
    this.sell = sell,
    this.shopName = shopName,
    this.score = score,
    this.shopLogo = shopLogo
  }
}

export class detailInfo {
  constructor(desc,key,image) {
    this.desc = desc
    this.key = key
    this.image = image
  }
}

export class paramsInfo {
  constructor(goodsParams,sizeMessage) {
    this.goodsParams = goodsParams
    this.sizeMessage = sizeMessage
  }
}

