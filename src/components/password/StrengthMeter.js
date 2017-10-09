import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Card, CardBlock, CardSubtitle, Progress } from 'reactstrap';

class StrengthMeter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: props.password || '',
      progress_value: 60,
    }
  }

  getClass = (predicate) => {
    const { password } = this.props;
    return predicate(password) ? 'text-success' : 'text-danger' ;
  }

  getProgressValue = () => {
    return 70;
  }

  render() {
  	const { goodPasswordPrinciples } = this.props;
  	return (
  		<Card>
        <CardBlock className="p-4">
        	<Progress value={this.getProgressValue()}  className="mb-4"/>
          <CardSubtitle>A good password is:</CardSubtitle>
          <ul>
          	{goodPasswordPrinciples.map((item, i) => 
          		<li key={i} className={this.getClass(item.predicate)}> {item.label} </li> 
          	)}
          </ul>
        </CardBlock>
      </Card>
  	)
  }
}

StrengthMeter.propTypes = {
  password: PropTypes.string.isRequired,
  goodPasswordPrinciples: PropTypes.array.isRequired,
}

export default StrengthMeter
