import React, { Component } from 'react'
import './Discover.less'
export default class home extends Component {
  render() {
    return (
      <div>
        <SreachBar />
      </div>
    )
  }
}

class SreachBar extends Component {
  render() {
    return (
      <div className="sreach-bar">
        <i className="iconfont icon-tinggeshiqu40x40"></i>
        <div className="sreach-bar-input">
          <i className="iconfont icon-sousuo"></i>
          <input type="text" placeholder="搜索音乐、视频、歌词、电台" />
        </div>
        <i className="iconfont icon-p7zhengzaibofangzhong"></i>
      </div>
    )
  }
}