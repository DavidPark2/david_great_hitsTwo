import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/Todo/App'
import Davello from './components/Davello/App'
import reducer from './reducers'
import {Router, Route, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/todo" component={TodoApp} />
      <Route path="/davello" component={Davello} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
