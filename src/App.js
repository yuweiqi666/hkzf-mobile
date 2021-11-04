import React, { Component } from 'react'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/home'

import CityList from './pages/cityList'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
            
            
            
            <Link to='/home'>首页</Link>
            <Link to='/cityList'>城市列表</Link>

            <Switch>
              <Route path='/home' component={ Home } />
              <Route path='/cityList' component={ CityList } />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}