import request from '@/utils/request'

export const img = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

export const groups = (city) => {
  return request({
    method: 'GET',
    url: '/home/groups',
    params: city
  })
}
