import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Alert } from 'reactstrap';

const App = () => (
  <div>
    <div className="container-fluid">
	  <div className="row">
	  	<nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar"  style={{ 'minWidth': '200px' }}>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reports</a>
            </li>
          </ul>
        </nav>
        <div className="" style={{ 'flex': '1 1' }}>
		    <AddTodo />
		    <VisibleTodoList />
		    <Footer />
		    <Alert color="success">
			    <strong>Well done!</strong> You successfully read this important alert message.
		    </Alert>
	  	</div>
	  </div>
	</div>
  </div>
)

export default App
