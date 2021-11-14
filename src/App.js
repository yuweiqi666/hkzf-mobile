import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/home'

import CityList from './pages/cityList'

import Map from './pages/map'

export default class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '100%' }}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/cityList" component={CityList} />
          <Route path="/map" component={Map} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}
