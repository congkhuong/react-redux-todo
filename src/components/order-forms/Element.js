import React from 'react'
import PropTypes from 'prop-types';

class Element extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	active: false
    }
  }

  onClick = () => {
  	const active = !this.state.active;
  	this.setState({active: active});
  	this.props.handleClick(this.props.price, active);
	}

  render() {
  	return (
  		<p 
      	key={this.props.id}  
      	className={this.state.active ? 'element active': 'element'} 
      	onClick={this.onClick}> 
      	<span>{this.props.name} </span>
      	<span>{this.props.price} </span> 
      </p>
  	)
  }
}

Element.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Element