import React, { Component } from 'react'
import Slider from 'react-slick'

import './Discover.less'

export default class home extends Component {
  render() {
    return (
      <div>
        <SreachBar />
        <div className="discover-wrap">
          <Banner />
          <ButtonBar />
        </div>
      </div>
    )
  }
}

// 搜索栏
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

class Banner extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="http://p1.music.126.net/rGEE-fcgLFbAulp6Ys56Pw==/18943485835427112.jpg" alt=""/></div>
        <div><img src="http://p1.music.126.net/RRe5ho7MTjVb-udlYm56TA==/18926993160990211.jpg" alt="" /></div>
        <div><img src="http://p1.music.126.net/uOOH0lgsTuCj4y3gxqHhrw==/19220562765596498.jpg" alt=""/></div>
      </Slider>
    )
  }
}

class ButtonBar extends Component {
  render() {
    return (
      <div className="button-bar">
        <div className="button-bar-item">
          <div className="button-bar-icon"><i className="iconfont icon-fm"></i></div>
          <p className="button-bar-text">私人FM</p>
        </div>
        <div className="button-bar-item">
          <div className="button-bar-icon"><i className="iconfont icon-calendar"></i></div>
          <p className="button-bar-text">每日推荐</p>
        </div>
        <div className="button-bar-item">
          <div className="button-bar-icon"><i className="iconfont icon-gedanshouluOFF"></i></div>
          <p className="button-bar-text">歌单</p>
        </div>
        <div className="button-bar-item">
          <div className="button-bar-icon"><i className="iconfont icon-weibiaoti-"></i></div>
          <p className="button-bar-text">排行榜</p>
        </div>
      </div>
    )
  }
}