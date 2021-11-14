import React, { Component } from 'react'

import { Carousel, Flex } from 'antd-mobile'

import './index.scss'

import { getSwiperData, getHouseGroup, getNewsData, getCityInfo } from '../../apis/dashboard'

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

// 获取地理位置信息
// navigator.geolocation.getCurrentPosition(
//   position => {
//     console.log(111111111111)
//     console.log(position)
//   },
//   err => {
//     console.log(err)
//   },
//   {
//     // 指示浏览器获取高精度的位置，默认为false
//     enableHighAccuracy: false,
//     // // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
//     timeout: 5000,
//     // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
//     maximumAge: 3000
//   }
// )

export default class Dashboard extends Component {
  state = {
    swiperData: [],
    isSwiperLoaded: false,
    houseGroupData: [],
    newsData: [],
    currentCityName: ''
  }

  async componentDidMount() {
    // 获取轮播图数据
    const { data: swiperData } = await getSwiperData()

    const imgs = swiperData.body

    this.setState({ swiperData: imgs, isSwiperLoaded: true })

    // 获取租房小组数据
    const { data: houseGroupData } = await getHouseGroup({ area: 'AREA|88cff55c-aaa4-e2e0' })

    const houses = houseGroupData.body

    this.setState({ houseGroupData: houses })

    // 获取最新资讯数据
    const { data: newsData } = await getNewsData({ area: 'AREA|88cff55c-aaa4-e2e0' })

    const news = newsData.body

    this.setState({ newsData: news })

    // 获取定位信息
    // let location = ''
    var myCity = new window.BMapGL.LocalCity()
    myCity.get(async res => {
      // 调接口获取定位城市的数据
      const { data: cityData } = await getCityInfo({ name: res.name })
      console.log('调接口data城市信息', cityData.body)
      this.setState({ currentCityName: cityData.body.label })
    })
  }

  renderSwiper = () => {
    return this.state.swiperData.map(item => (
      <a key={item.id} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: 212 }}>
        <img src={'http://localhost:8080' + item.imgSrc} alt="" style={{ width: '100%', height: '100%', verticalAlign: 'top' }} />
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

  renderGroup = () => {
    return this.state.houseGroupData.map(item => (
      <div key={item.id} className="group-item">
        <div className="group-item-wrapper">
          <span className="group-text">
            <span className="group-title">{item.title}</span>
            <span className="group-desc">{item.desc}</span>
          </span>
          <img className="group-img" src={'http://localhost:8080' + item.imgSrc} alt="" />
        </div>
      </div>
    ))
  }

  renderNewsContent = () => {
    return this.state.newsData.map(item => (
      <div key={item.id} className="news-item">
        <img className="news-img" src={'http://localhost:8080' + item.imgSrc} alt="" />
        <div className="news-desc">
          <h3 className="news-text">{item.title}</h3>
          <div className="news-bottom">
            <div className="news-bottom-left">{item.from}</div>
            <div className="news-bottom-right">{item.date}</div>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {/* 顶部搜索 */}
        <div className="search-header">
          <div className="search-input">
            <span className="location">
              <span className="search-location">{this.state.currentCityName}</span>
              <i className="iconfont icon-arrow"></i>
            </span>
            <span className="search-text">
              <i className="iconfont icon-seach"></i>
              <span className="icon-seach-placeholder">请输入小区或地址</span>
            </span>
          </div>
          <i className="iconfont icon-map" onClick={this.jumpMap}></i>
        </div>
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
        {/* 租房小组 */}
        <div className="group">
          <div className="group-top">
            <h3 className="group-top-text">租房小组</h3>
            <div className="group-top-more">更多</div>
          </div>
          <div className="group-content">{this.renderGroup()}</div>
        </div>
        {/* 最新资讯 */}
        <div className="news">
          <h3 className="news-title">最新资讯</h3>
          <div className="news-wrapper">{this.renderNewsContent()}</div>
        </div>
      </div>
    )
  }

  jumpMap = () => {
    this.props.history.push('/map')
  }
}
