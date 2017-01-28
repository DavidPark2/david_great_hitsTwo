import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/Todo/App'
import reducer from './reducers'
import {Router, Route, browserHistory} from 'react-router'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TodoApp} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
