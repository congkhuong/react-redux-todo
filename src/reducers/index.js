import { combineReducers } from 'redux'
import todos from './todo/todos'
import visibilityFilter from './todo/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp;