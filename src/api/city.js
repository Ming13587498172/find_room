import request from '@/utils/request'

export const list = () => {
  return request({
    method: 'GET',
    url: '/area/city/?level=1'
  })
}

export const hot = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}
