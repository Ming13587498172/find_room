import request from '@/utils/request'

export const area = () => {
  return request({
    method: 'GET',
    url: '/houses/condition',
    params: {
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}
