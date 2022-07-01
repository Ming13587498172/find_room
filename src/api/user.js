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
