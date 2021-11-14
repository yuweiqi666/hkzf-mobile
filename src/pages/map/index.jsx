import React, { Component } from 'react'

import './index.scss'

export default class index extends Component {
  componentDidMount() {
    var map = new window.BMapGL.Map('container')
    var point = new window.BMapGL.Point(116.404, 39.915)
    map.centerAndZoom(point, 10)
  }

  render() {
    return (
      <div className="map">
        <div id="container">123</div>
      </div>
    )
  }
}
