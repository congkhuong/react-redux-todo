import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Alert } from 'reactstrap';

const Home = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Alert color="success">
      <strong>Well done!</strong> You successfully read this important alert message.
    </Alert>
  </div>
)

export default Home
