import request from '@/utils/request'

export const houses = () => {
  return request({
    method: 'GET',
    url: '/houses',
    params: {
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}

export const area = () => {
  return request({
    method: 'GET',
    url: '/houses/condition',
    params: {
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}
