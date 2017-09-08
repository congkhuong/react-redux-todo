import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onClickRemove, completed, text, id }) => (
  <div className="alert alert-primary alert-dismissible fade show" role="alert"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => onClickRemove(id)}>
      <span aria-hidden="true">&times;</span>
    </button>
    <span>{text}</span>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
