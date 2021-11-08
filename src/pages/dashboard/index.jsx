import React, { Component } from 'react'

import { Carousel } from 'antd-mobile'

import './index.scss'

import { getSwiperData } from '../../apis/dashboard'

export default class Dashboard extends Component {
  state = {
    swiperData: []
  }

  async componentDidMount() {
    const { data } = await getSwiperData()

    const imgs = data.body

    this.setState({ swiperData: imgs })
  }

  renderSwiper = () => {
    return this.state.swiperData.map(item => {
      return (
        <a key={item.id} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: 212 }}>
          <img src={'http://localhost:8080' + item.imgSrc} alt="" style={{ width: '100%', verticalAlign: 'top' }} />
        </a>
      )
    })
  }

  render() {
    return (
      <div className="dashboard-swipper">
        <Carousel autoplay={false} infinite>
          {this.renderSwiper()}
        </Carousel>
      </div>
    )
  }
}
