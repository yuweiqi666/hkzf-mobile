import request from '../../utils/request'

// 获取轮播图数据
export const getSwiperData = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

// 获取租房小组数据
export const getHouseGroup = () => {
  return request({
    method: 'GET',
    url: '/home/groups'
  })
}
