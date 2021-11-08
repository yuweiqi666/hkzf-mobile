import request from '../../utils/request'

export const getSwiperData = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}
