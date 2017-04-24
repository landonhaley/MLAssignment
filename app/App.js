import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'
import Details from './Details'
import Home from './Home'
class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='details' component={Details} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Container = (props) => <div className="full-height">
  {props.children}
</div>

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
