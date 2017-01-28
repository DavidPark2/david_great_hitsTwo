import { combineReducers } from 'redux'
import todos from './Todo/todos'
import visibilityFilter from './Todo/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
