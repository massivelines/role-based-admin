import * as React from 'react';

import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
// import Control from 'react-select/lib/components/Control';

export class TwoFactorPassword extends React.Component {
  render() {
    return (
      <div className="two-factor-type-container">
        <Alert color="danger">
          'We HIGHLY DO NOT recommend this option.'
        </Alert>
        <div className="two-factor-title">Second Password</div>

        <Form>
          <FormGroup>
            <Label>Secondary Password</Label>
            <Input type="password" />
          </FormGroup>
          <FormGroup>
            <Label>Repeat Secondary Password</Label>
            <Input type="password" />
          </FormGroup>
          <FormGroup>
            <Button color="success">Activate Second Password</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default TwoFactorPassword;
