import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="container p-3">
      <form
        className="row justify-content-center align-self-center"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className="form-group mb-0 mr-2">
          <input className="form-control"
            ref={node => {
              input = node
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
