import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import TabBarExample from './components/tabbar/TabBar'
import Discover from './components/Discover/Discover'
import Mine from './components/Mine/Mine'
import Firends from './components/Firends/Firends'
import Account from './components/Account/Account'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Discover} />
        <Route path="/mine" component={Mine} />
        <Route path="/firends" component={Firends} />
        <Route path="/account" component={Account} />
        <TabBarExample />
      </div>
    );
  }
}

export default App;
