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

export const getArea = ({ name, id }) => {
  return request({
    method: 'GET',
    url: '/area/community',
    params: {
      name,
      id
    }
  })
}

export const getMapList = (code) => {
  return request({
    method: 'GET',
    url: '/area/map',
    params: {
      id: code
    }
  })
}
