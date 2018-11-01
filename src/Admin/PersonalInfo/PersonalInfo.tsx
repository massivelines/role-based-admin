// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization

import * as React from 'react';
import NavigationPrompt from 'react-router-navigation-prompt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faFileImage } from '@fortawesome/pro-light-svg-icons';

import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  CardDeck,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Row,
  Col,
} from 'reactstrap';

// import EnterPasswordModal from '../components/EnterPasswordModal';
import SaveChangesPrompt from '../components/SaveChangesPrompt';

// adobe has save box for each section + put in password
// nextcloud has it where you click on another box you put in password to save

export interface PersonalInfoProps {
  active: boolean;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  user: any;
  roleList: any;
}

interface PersonalInfoState {
  openPassword: boolean;
  disableSaveButton: boolean;
  changesSaved: boolean;
  initQueryData: object;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  picture: string;
}

interface InputBoxes {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  picture: string;
}

export class PersonalInfo extends React.Component<
  PersonalInfoProps,
  PersonalInfoState
> {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.passwordToggle = this.passwordToggle.bind(this);
    this.saveData = this.saveData.bind(this);

    this.state = {
      openPassword: false,
      disableSaveButton: true,
      changesSaved: true,
      initQueryData: this.props.user,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      picture: this.props.user.picture,
      phone: this.props.user.phone,
    };
  }

  // handle input changes and then call checkSaveDisable for the save button
  handleInputChange(title, event) {
    this.setState(
      { [title]: event.target.value } as InputBoxes,
      this.checkSaveDisable,
    );
  }

  // toggles the password modal
  passwordToggle() {
    this.setState({
      openPassword: !this.state.openPassword,
    });
  }

  // callback for when changes have been saved
  saveData() {
    this.setState({
      changesSaved: true,
    });
  }

  // when input box is changed, check if matches original data, !== activate save button, disable save button
  // also set changesSaved: false when input box changed;
  checkSaveDisable() {
    const inputTitles = ['firstName', 'lastName', 'email', 'picture', 'phone'];
    let buttonDisabled = true;
    let savedChanges = true;

    // loop through to see if any has changed, if so set buttonDisabled to false
    inputTitles.map(iTitle => {
      if (this.state[iTitle] !== this.state.initQueryData[iTitle]) {
        buttonDisabled = false;
        savedChanges = false;
      }
    });
    this.setState({ changesSaved: savedChanges });
    this.setState({ disableSaveButton: buttonDisabled });
  }

  // if changes have been made check when leaving page if want to go back
  leavingWithChanges() {}

  render() {
    console.log('Personal Info', this.props);
    // console.log('Personal Info', this.state);

    return (
      <div className="admin-personal-info-page">
        <div className="content-header">
          <div className="content-title">Personal Info</div>
        </div>
        {/* Avatar First Last Name, Email Phone ect... container */}
        <div className="personal-details-container">
          <div className="section-title">Details</div>
          <div className="picture-section">
            {/* if user has no picture use first and last initials, else use picture */}
            <div className="picture-container">
              {this.props.picture == null ? (
                <div className="picture-text">
                  {this.state.firstName[0]}
                  {this.state.lastName[0]}
                </div>
              ) : (
                <img className="picture" src={this.props.user.picture} />
              )}
            </div>

            {/* Upload and delete profile picture */}
            <Form inline className="upload-file-container">
              <FormGroup>
                <Input
                  className="input-file"
                  type="file"
                  id="formAvatarUpload"
                  name="profile-picture"
                  accept="image/png, image/jpeg"
                  onChange={e => {
                    console.log(e);
                  }}
                />
                <Label
                  title="Upload Profile Picture"
                  htmlFor="formAvatarUpload"
                >
                  {/* // TODO: change to file upload later */}
                  <FontAwesomeIcon icon={faFileImage} />
                </Label>
              </FormGroup>
              <FormGroup>
                <Button
                  color="link"
                  title="Delete Profile Picture"
                  className="fa-button-reset trash-button"
                  onClick={() => {
                    this.setState({ picture: null });
                  }}
                  // TODO: disable this button if no profile picture
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </FormGroup>
              {this.state.picture != null ? (
                <div className="profile-picture-filename">
                  {this.state.picture}
                </div>
              ) : null}
            </Form>
          </div>

          {/* Input boxes */}
          <div className="personal-input-container">
            {/* First Last Name */}
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      value={this.state.firstName}
                      onChange={event =>
                        this.handleInputChange('firstName', event)
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      value={this.state.lastName}
                      onChange={event =>
                        this.handleInputChange('lastName', event)
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>

            {/* Email Phone */}
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={this.state.email}
                      onChange={event => this.handleInputChange('email', event)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      value={this.state.phone}
                      onChange={event => this.handleInputChange('phone', event)}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>

            {/* Enter Password to save */}
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label>Enter Password To Save Changes</Label>
                    <Input
                      // TODO: how to handle password ???
                      type="password"
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
                    disabled={this.state.disableSaveButton}
                    onClick={() => {
                      this.saveData();
                      // this.passwordToggle();
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
        <hr />
        {/* Build projects and Roles Lists */}
        <div className="assigned-projects-container">
          <div className="section-title">Assigned projects and Roles</div>
          {this.props.user.projectInstance.map(projectData => (
            <Card className="assigned-project" key={projectData.id}>
              {/* project Title */}
              <CardBody>
                <CardTitle>{projectData.title}</CardTitle>
                <ul>
                  {/* Loop through roles for title */}
                  {projectData.role.map(projectRoleData => (
                    <li key={projectRoleData.id}>{projectRoleData.title}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
        {/* Navigation Prompt when form changes have not been saved */}
        <NavigationPrompt when={!this.state.changesSaved}>
          {({ onConfirm, onCancel }) => (
            <SaveChangesPrompt
              when={true}
              onCancel={onCancel}
              onConfirm={onConfirm}
            />
          )}
        </NavigationPrompt>
        {/* Enter Password Modal */}
        {/* <EnterPasswordModal
          success={() => this.saveData()}
          showModal={this.state.openPassword}
          submit={() => this.passwordToggle()}
          cancel={() => this.passwordToggle()}
        /> */}
      </div>
    );
  }
}

export default PersonalInfo;
