import React from 'react'

const services = [
    { id: 1, name: 'Web Development', price: 300 },
    { id: 2, name: 'Design', price: 400 },
    { id: 3, name: 'Integration', price: 250 },
    { id: 4, name: 'Training', price: 220 }
];

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


class OrderForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	total: 0
    }
  }

  handleClick = (price, active) => {
  	this.setState((prevState) => ({
		  total: active ? prevState.total + price : prevState.total - price
		}));
	}

  render() {
  	const total = this.state.total;
  	return   (
  		<div className="container">
				<div className="row">
				  <div className="col-md-4 m-auto">
				  	<h4 className="text-center">Services</h4>

				  	{services.map((item) => (
				  		<Element 
				  			key={item.id}
				  			{...item}
				  			handleClick={this.handleClick} />
			      ))}

				  	<p className="element total"> <span>Total </span> <span>{total} </span> </p>
				  </div>
				</div>
		  </div>
  	)
  }
}

export default OrderForm
