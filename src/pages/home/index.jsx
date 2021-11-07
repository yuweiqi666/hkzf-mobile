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
  }

  // componentDidMount() {
  //   let currentRouter = this.props.location.pathname
  //   this.setState({ selectedTab: currentRouter })
  // }

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
          <TabBar.Item title="首页" key="Life" icon={<i className="iconfont icon-ind" />} selectedIcon={<i className="iconfont icon-ind" />} selected={this.state.selectedTab === '/home/dashboard'} onPress={this.onPress('/home/dashboard')} />
          <TabBar.Item title="找房" key="Koubei" icon={<i className="iconfont icon-findHouse" />} selectedIcon={<i className="iconfont icon-findHouse" />} selected={this.state.selectedTab === '/home/list'} onPress={this.onPress('/home/list')} />
          <TabBar.Item title="资讯" key="Friend" icon={<i className="iconfont icon-infom" />} selectedIcon={<i className="iconfont icon-infom" />} selected={this.state.selectedTab === '/home/news'} onPress={this.onPress('/home/news')} />
          <TabBar.Item title="我的" key="my" icon={<i className="iconfont icon-my" />} selectedIcon={<i className="iconfont icon-my" />} selected={this.state.selectedTab === '/home/profit'} onPress={this.onPress('/home/profit')} />
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
