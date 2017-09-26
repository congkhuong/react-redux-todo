import React from 'react'
import Element from './Element'

const services = [
    { id: 1, name: 'Web Development', price: 300 },
    { id: 2, name: 'Design', price: 400 },
    { id: 3, name: 'Integration', price: 250 },
    { id: 4, name: 'Training', price: 220 }
];

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
