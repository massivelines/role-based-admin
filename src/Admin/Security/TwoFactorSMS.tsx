import * as React from 'react';

import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

export class TwoFactorSMS extends React.Component {
  render() {
    return (
      <div className="two-factor-type-container">
        <Alert color="warning">
          We only recommend this option if Time-based One-time Password with an authenticator app is not
          available.
        </Alert>
        <div className="two-factor-title">Text Message</div>
        <p>
          Enter the phone number where you'd like to receive the Two-Step
          Verification codes. You should have this phone available every time
          you sign into your account.
        </p>

        <Form>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input type="tel" />
          </FormGroup>
          <FormGroup>
            <Button color="success">Send Code</Button>
            <div>Message and data rates may apply.</div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default TwoFactorSMS;
