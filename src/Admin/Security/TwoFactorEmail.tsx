import * as React from 'react';

import {
  Alert,
  Button,
  Form,
  FormGroup,
} from 'reactstrap';

export class TwoFactorEmail extends React.Component {
  render() {
    return (
      <div className="two-factor-type-container">
        <Alert color="warning">{'We do not recommend this option.'}</Alert>
        <div className="two-factor-title">Email</div>

        <p>This will send an email to your main address with an access code every time you login.</p>
        <Form>
          <FormGroup>
            <Button color="success">Activate Email Two-Factor</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default TwoFactorEmail;
