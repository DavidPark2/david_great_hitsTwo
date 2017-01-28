import { combineReducers } from 'redux'
//todos reducers
import todos from './Todo/todos'
import visibilityFilter from './Todo/visibilityFilter'

//davello reducers
import cards from './Davello/cards'

const greatHits = combineReducers({
  todos,
  visibilityFilter,
  cards
})

export default greatHits
