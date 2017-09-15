import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

let SideBar = ({ dispatch }) => {

  return (
    <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar"  style={{ 'minWidth': '200px' }}>
		  <ul className="nav nav-pills flex-column">
		    <li className="nav-item">
		    	<Link to="/" className="nav-link active">Overview <span className="sr-only">(current)</span></Link>
		    </li>
		    <li className="nav-item">
		    	<Link to="/" className="nav-link">Reports</Link>
		    </li>
		    <li className="nav-item">
		    	<Link to="/" className="nav-link">Reports2</Link>
		    </li>
		  </ul>
		</nav>
  )
}
SideBar = connect()(SideBar)

export default SideBar




