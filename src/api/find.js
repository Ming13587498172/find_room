import request from '@/utils/request'

export const houses = (id) => {
  return request({
    method: 'GET',
    url: '/houses',
    params: id
  })
}

export const searchHouses = ({ cityId, area, subway, rentType, price, more, start, end }) => {
  return request({
    method: 'GET',
    url: '/houses',
    params: { cityId, area, subway, rentType, price, more, start, end }
  })
}

export const area = (id) => {
  return request({
    method: 'GET',
    url: '/houses/condition',
    params: id
  })
}
