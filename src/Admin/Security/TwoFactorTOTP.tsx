import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/pro-regular-svg-icons';

import {
  Alert,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
// import Control from 'react-select/lib/components/Control';

const CantScan: React.SFC = () => {
  return (
    <div className="cant-scan-container">
      <ol>
        <li>
          Open your Authenticator App and select "Manually add account" from the
          menu.
        </li>
        <li>In "Enter account name" type Harbinger.</li>
        <li>
          <div>
            In "Enter your key" type the following key (space not required):
          </div>
          <div className="manual-code">
            XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX
          </div>
        </li>
        <li>Set key type to "Time based".</li>
        <li>Tap Add.</li>
      </ol>
    </div>
  );
};

export interface TwoFactorTOTPProps {}

interface TwoFactorTOTPState {
  popoverOpen: any;
}

export class TwoFactorTOTP extends React.Component<
  TwoFactorTOTPProps,
  TwoFactorTOTPState
> {
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  togglePopover() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div className="two-factor-type-container">
        <Alert color="success">We highly recommend this option.</Alert>
        <div className="two-factor-title">Authenticator App</div>
        {/* <p>Scan the QR code below with your authenticator app.</p> */}

        {/* App Info */}
        <div className="step-container">
          <div className="step-image-container">
            <img
              src="/assets/images/google-authenticator.svg"
              className="step-image"
            />
          </div>
          <div className="step-content">
            <div className="step-title">Open your Authenticator App</div>
            <div>We recommend Google Authenticator</div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
              >
                <img
                  alt="Get it on Google Play"
                  src="/assets/images/google-play.svg"
                  className="app-store-badge"
                />
              </a>
              <a
                href="https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
                target="_blank"
              >
                <img
                  alt="Download on the App Store"
                  src="/assets/images/app-store.svg"
                  className="app-store-badge"
                />
              </a>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="step-container">
          <div className="step-image-container">
            <img
              src="https://raw.githubusercontent.com/zpao/qrcode.react/master/qrcode.png"
              className="step-image"
            />
          </div>
          <div className="step-content">
            <div className="step-title">Scan The QR Code</div>
            <div>
              Open the authentication app and scan the QR Code to the left,
              using your phone's camera.
            </div>
            <Button id="totpManual" color="info" onClick={this.togglePopover}>
              Can't scan the QR Code?
            </Button>
            <Popover
              placement="top"
              isOpen={this.state.popoverOpen}
              target="totpManual"
              toggle={this.togglePopover}
            >
              <PopoverHeader>Can't Scan the QR Code?</PopoverHeader>
              <PopoverBody>
                <CantScan />
              </PopoverBody>
            </Popover>
          </div>
        </div>

        {/* Input Code */}
        <div className="step-container">
          <div className="step-image-container">
            {/* // TODO: replace with svg */}
            <FontAwesomeIcon icon={faMobileAlt}/>
          </div>
          <div className="step-content">
            <div className="step-title">Enter code</div>
            <div>
              After you've scanned the barcode, enter the 6 digit code generated
              by the app:
            </div>
            <Form>
              <FormGroup>
                <Label>App Code</Label>
                <Input
                  type="number"
                  data-autocomplete="off"
                  // TODO: limit to 6
                />
              </FormGroup>
              <FormGroup>
                <Button color="success">Activate</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default TwoFactorTOTP;
