import {request} from './request'

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeProducts(type,page) {
  return request({
    method: 'get',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}