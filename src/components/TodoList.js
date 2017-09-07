import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, removeTodo }) => (
  <div className="p-2">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClickRemove={removeTodo}  onClick={() => onTodoClick(todo.id)} />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoList
