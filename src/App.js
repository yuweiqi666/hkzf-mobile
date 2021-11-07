import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/home'

import CityList from './pages/cityList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/cityList" component={CityList} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}
