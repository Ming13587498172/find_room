import request from '@/utils/request'

/**
 *  登录
 * @param {mobile,code} data
 * @returns promise
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * 用户信息
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}

/**
 * 收藏列表
 * @returns
 */
export const collect = () => {
  return request({
    url: '/user/favorites'
  })
}

export const faHouse = (data) => {
  return request({
    method: 'POST',
    url: '/user/houses',
    data
  })
}

export const faList = (data) => {
  return request({
    method: 'GET',
    url: '/user/houses',
    data
  })
}
