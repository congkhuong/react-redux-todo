import React from 'react'
import { Container, Row, Col, Card, CardBlock, 
	CardSubtitle, Progress,
	Form, FormGroup, Label, Input  } from 'reactstrap';
const DIGIT_REGEX = /[^A-Za-z0-9]/;
const SPECIAL_CHARS_REGEX = /[0-9]/;

class PasswordContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	password: null,
    }
  }

  onChangePassword = (e) => {
  	console.log(e.target.name, e.target.value);
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


class StrengthMeter extends React.Component {
  render() { 
  	const { goodPasswordPrinciples } = this.props;
  	return (
  		<Card>
        <CardBlock className="p-4">
        	<Progress value="50"  className="mb-4"/>
          <CardSubtitle>A good password is:</CardSubtitle>
          <ul>
          	{goodPasswordPrinciples.map((item, i) => 
          		<li key={i}> {item.label} </li> 
          	)}
          </ul>
        </CardBlock>
      </Card>
  	)
  }
}

class PasswordField extends React.Component {
  render() { 
  	return (
  		<Form>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input onChange={this.props.onChangePassword} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
      </Form>
  	) 
	}
}
PasswordField.propTypes = {
  onChangePassword: React.PropTypes.func.isRequired,
};

export default PasswordContainer
