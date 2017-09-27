import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { Container, Row, Col, Card, CardBlock, 
	CardSubtitle, Progress,
	Form, FormGroup, Label, Input  } from 'reactstrap';

import StrengthMeter from './StrengthMeter'
import PasswordField from './PasswordField'

const SPECIAL_CHARS_REGEX = /[^A-Za-z0-9]/;
const DIGIT_REGEX = /[0-9]/;

class PasswordContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	password: '',
    }
  }

  onChangePassword = (e) => {
  	this.setState({
  		password: e.target.value
  	})
	}
  
  render() {
  	const { password } = this.state;
  	const { goodPasswordPrinciples } = this.props;

  	return (
  	  <Container className="col-md-10 m-auto">
				<Row>
				<Col md={8}>
		      <PasswordField onChangePassword={this.onChangePassword} />
				</Col>
				<Col md={4}>
           <StrengthMeter password={password} goodPasswordPrinciples={goodPasswordPrinciples} />
				</Col>
				</Row>
			</Container>
  	)
  }
}

PasswordContainer.defaultProps = {
	goodPasswordPrinciples: [
  {
  	label: "6+ characters",
  	predicate: password => password.length >= 6
  }, 
  { 
  	label: "with at least one digit", 
  	predicate: password => password.match(DIGIT_REGEX) !== null 
  }, 
  { 
  	label: "with at least one special character",
  	predicate: password => password.match(SPECIAL_CHARS_REGEX) !== null
  }
 ]
};

export default PasswordContainer
