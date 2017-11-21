import React, {Component} from 'react';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom'
import './TabBar.less'
class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      tabList: [
        {
          title: '发现音乐',
          link: '/',
          icon: 'icon-wangyiyunyinle'
        }, {
          title: '我的音乐',
          link: '/mine',
          icon: 'icon-yinle'
        }, {
          title: '朋友',
          link: '/firends',
          icon: 'icon-ren1'
        }, {
          title: '账号',
          link: '/account',
          icon: 'icon-ren'
        }
      ]
    };
  }

  getTabItemClass(idx) {
    return idx === this.state.selectedTab ? 'tab-bar-tab active' : 'tab-bar-tab'
  }
  

  render() {
    return (
      <div className="tabs-bar-warp">
        <div className="tab-bar-bar">
          {this.state.tabList.map((el, idx) => {
            return (
              <div className={this.getTabItemClass(idx)}
                onClick={() => { this.setState({ selectedTab: idx }) }}
                key={idx}>
                <Link to={el.link}>
                  <i className={`tab-bar-tab-icon iconfont ${el.icon}`}></i>
                  <p className="tab-bar-tab-title">{el.title}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default TabBarExample