import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onClickRemove, completed, text, id }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span onClick={onClick}>{text}</span>
    <a href="javascript:void(0)" onClick={() => onClickRemove(id)}> X {id} </a>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
