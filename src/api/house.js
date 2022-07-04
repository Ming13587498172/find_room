import request from '@/utils/request'

export const houseList = (code) => {
  return request({
    method: 'GET',
    url: '/houses',
    params: {
      id: code
    }
  })
}

export const houseDetail = (id) => {
  return request({
    method: 'GET',
    url: `/houses/${id}`
  })
}

export const qHouse = () => {
  return request({
    method: 'GET',
    url: '/houses/params'
  })
}

export const houseImg = (file) => {
  return request({
    method: 'POST',
    url: '/houses/image',
    data: file
  })
}
