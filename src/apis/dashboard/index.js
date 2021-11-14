import request from '../../utils/request'

// 获取轮播图数据
export const getSwiperData = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}

// 获取租房小组数据
export const getHouseGroup = params => {
  return request({
    method: 'GET',
    url: '/home/groups',
    params
  })
}

// 获取最新资讯数据
export const getNewsData = params => {
  return request({
    method: 'GET',
    url: '/home/news',
    params
  })
}

// 获取定位城市的数据
export const getCityInfo = params => {
  return request({
    method: 'GET',
    url: '/area/info',
    params
  })
}
