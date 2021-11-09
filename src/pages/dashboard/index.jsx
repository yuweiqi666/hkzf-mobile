import React, { Component } from 'react'

import { Carousel, Flex } from 'antd-mobile'

import './index.scss'

import { getSwiperData } from '../../apis/dashboard'

import nav1Img from '../../assets/images/nav-1.png'
import nav2Img from '../../assets/images/nav-2.png'
import nav3Img from '../../assets/images/nav-3.png'
import nav4Img from '../../assets/images/nav-4.png'

const navData = [
  {
    id: 1,
    imgUrl: nav1Img,
    title: '整租',
    path: '/home/list'
  },
  {
    id: 2,
    imgUrl: nav2Img,
    title: '合租'
  },
  {
    id: 3,
    imgUrl: nav3Img,
    title: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    imgUrl: nav4Img,
    title: '去出租'
  }
]

export default class Dashboard extends Component {
  state = {
    swiperData: [],
    isSwiperLoaded: false
  }

  async componentDidMount() {
    const { data } = await getSwiperData()

    const imgs = data.body

    this.setState({ swiperData: imgs, isSwiperLoaded: true })
  }

  renderSwiper = () => {
    return this.state.swiperData.map(item => (
      <a key={item.id} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: 212 }}>
        <img src={'http://localhost:8080' + item.imgSrc} alt="" style={{ width: '100%', verticalAlign: 'top' }} />
      </a>
    ))
  }

  renderNav = () => {
    return navData.map(item => (
      <Flex.Item key={item.id} onClick={() => this.props.history.push(item.path)}>
        <img src={item.imgUrl} alt="" />
        <h2>{item.title}</h2>
      </Flex.Item>
    ))
  }

  render() {
    return (
      <div>
        {/* 轮播图 */}
        <div className="swiper">
          {this.state.isSwiperLoaded ? (
            <Carousel autoplay={true} infinite>
              {this.renderSwiper()}
            </Carousel>
          ) : (
            ''
          )}
        </div>
        {/* 导航菜单 */}
        <Flex className="nav">{this.renderNav()}</Flex>
      </div>
    )
  }
}
