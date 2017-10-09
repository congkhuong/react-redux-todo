import React from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Label, Input } from 'reactstrap';

function PasswordField(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          onChange={props.onChangePassword}
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password placeholder"
        />
      </FormGroup>
    </Form>
  );
}
PasswordField.propTypes = {
  onChangePassword: PropTypes.func.isRequired,
};

export default PasswordField;
