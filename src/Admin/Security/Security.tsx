// TODO: setup save changes when leaving dialog modal

import * as React from 'react';

import {
  Alert,
  Card,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Col,
  Row,
  CardTitle,
  CardText,
} from 'reactstrap';
import classnames from 'classnames';

import TwoFactorTOTP from './TwoFactorTOTP';
import TwoFactorSMS from './TwoFactorSMS';
import TwoFactorEmail from './TwoFactorEmail';
import TwoFactorPassword from './TwoFactorPassword';

// ??? NextCloud logs devices and sessions you have logged into

export interface SecurityProps {}

interface SecurityState {
  activeTab: any;
}

export class Security extends React.Component<SecurityProps, SecurityState> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div className="admin-security-page">
        <div className="content-header">
          <div className="content-title">Security</div>
        </div>

        {/* Change Password */}
        <div className="change-password-container">
          <div className="section-title">Password</div>
          <div className="password-container">
            <Form>
              <FormGroup>
                <Label>Old Password</Label>
                <Input
                  type="password"
                  onChange={e => {
                    // console.log(e);
                  }}
                />
              </FormGroup>
            </Form>

            <Form>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>New Password</Label>
                    <Input
                      type="password"
                      onChange={e => {
                        console.log(e);
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Retype New Password</Label>
                    <Input
                      type="password"
                      onChange={e => {
                        console.log(e);
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>

            {/* Save Button and Alert */}
            <Form>
              <FormGroup>
                <div className="save-alert-container">
                  <Button
                    color="success"
                    onClick={e => {
                      console.log(e);
                    }}
                  >
                    Save Changes
                  </Button>
                  <div className="alert-success">Changes Have Been Saved</div>
                  <div className="alert-danger">An Error Has Occurred</div>
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>

        {/* TODO maybe add a line to break up */}
        <hr />

        {/* Two Factor */}
        <div className="change-two-factor-setup">
          <div className="section-title">Two-Factor Authentication</div>
          <div
            id="account-two-factor-menu"
            // defaultActiveKey="totp"
          >
            <div className="two-factor-container">
              <div className="two-factor-navigation">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === '1',
                      })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      Authenticator App
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === '2',
                      })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      Text Message
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === '3',
                      })}
                      onClick={() => {
                        this.toggle('3');
                      }}
                    >
                      E-Mail
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === '4',
                      })}
                      onClick={() => {
                        this.toggle('4');
                      }}
                    >
                      Second Password
                    </NavLink>
                  </NavItem>
                </Nav>

                {/* Tab Panes */}
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <TwoFactorTOTP />
                  </TabPane>
                  <TabPane tabId="2">
                    <TwoFactorSMS />
                  </TabPane>
                  <TabPane tabId="3">
                    <TwoFactorEmail />
                  </TabPane>
                  <TabPane tabId="4">
                    <TwoFactorPassword />
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Security;
