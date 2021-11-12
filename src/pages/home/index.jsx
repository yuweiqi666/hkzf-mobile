import React, { Component } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import { TabBar } from 'antd-mobile'

// 导入组件的样式文件
import './index.scss'

import Dashboard from '../dashboard'

import HouseList from '../houseList'

import News from '../news'

import Profit from '../profile'

export default class Home extends Component {
  state = {
    selectedTab: this.props.location.pathname === '/home' ? '/home/dashboard' : this.props.location.pathname,
    navData: [
      {
        key: 'dashboard',
        title: '首页',
        icon: 'icon-ind',
        path: '/home/dashboard'
      },
      {
        key: 'dashboard',
        title: '找房',
        icon: 'icon-findHouse',
        path: '/home/list'
      },
      {
        key: 'dashboard',
        title: '资讯',
        icon: 'icon-infom',
        path: '/home/news'
      },
      {
        key: 'my',
        title: '我的',
        icon: 'icon-my',
        path: '/home/profit'
      }
    ]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ selectedTab: this.props.location.pathname })
    }
  }

  render() {
    return (
      <div className="home">
        {/* 配置子路由 */}
        <Switch>
          <Route path="/home/dashboard" component={Dashboard} />
          <Route path="/home/list" component={HouseList} />
          <Route path="/home/news" component={News} />
          <Route path="/home/profit" component={Profit} />
          <Redirect to="/home/dashboard" />
        </Switch>
        <TabBar unselectedTintColor="#888" tintColor="#21b97a" barTintColor="white" noRenderContent={true}>
          {this.state.navData.map(item => (
            <TabBar.Item
              title={item.title}
              key={item.key}
              icon={<i className={'iconfont ' + item.icon} />}
              selectedIcon={<i className={'iconfont ' + item.icon} />}
              selected={this.state.selectedTab === item.path}
              onPress={this.onPress(item.path)}
            />
          ))}
        </TabBar>
      </div>
    )
  }

  onPress = currentRoute => {
    return () => {
      this.setState({ selectedTab: currentRoute })

      this.props.history.push(currentRoute)
    }
  }
}
