export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: Math.floor(Math.random() * (10000 - 10 + 1)) + 10,
    text
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
export const resetTodo = () => {
  return {
    type: 'RESET_TODO'
  }
}

