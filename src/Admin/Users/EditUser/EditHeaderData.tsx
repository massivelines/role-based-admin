import * as React from 'react';

// import * as FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/pro-light-svg-icons';

export interface EditHeaderDataProps {
  active: boolean;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface EditHeaderDataState {
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export class EditHeaderData extends React.Component<
  EditHeaderDataProps,
  EditHeaderDataState
> {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      picture: this.props.picture,
      phone: this.props.phone,
    };
  }

  handleInputChange(title, event) {
    this.setState({ [title]: event.target.value } as EditHeaderDataState);
  }

  render() {
    // console.log(this.props);

    return (
      <React.Fragment>
        {/* TODO: add button label */}

        {/* Edit Picture */}

        <div className="picture-container">
          {this.props.active == false ? (
            <div className="picture-text">P</div>
          ) : this.props.picture == null ? (
            <button
              title="Edit Profile Picture"
              value="editProfilePicture"
              className="edit-picture"
            >
              <div className="picture-text">
                {this.props.firstName[0]}
                {this.props.lastName[0]}
              </div>
              <div className="edit-picture-overlay">
                {/* <FontAwesome className="edit-picture-icon fa fal" name="camera" /> */}
                <FontAwesomeIcon
                  className="edit-picture-icon"
                  icon={faCamera}
                />
              </div>
            </button>
          ) : (
            <button
              title="Edit Profile Picture"
              value="editProfilePicture"
              className="edit-picture"
            >
              <img className="picture" src={this.props.picture} />
              <div className="edit-picture-overlay">
                {/* <FontAwesome className="edit-picture-icon fa fal" name="camera" /> */}
                <FontAwesomeIcon
                  className="edit-picture-icon"
                  icon={faCamera}
                />
              </div>
            </button>
          )}
        </div>

        {/* If user is not active only show email address, else show all boxes */}
        {this.props.active == false ? (
          <div className="details">
            <input
              type="text"
              name="email"
              className="input-email"
              value={this.state.email}
              onChange={event => this.handleInputChange('email', event)}
            />
          </div>
        ) : (
          <div className="details">
            <div className="name h4">
              <input
                type="text"
                name="first name"
                className="input-first-name"
                value={this.state.firstName}
                onChange={event => this.handleInputChange('firstName', event)}
              />
              <input
                type="text"
                name="last name"
                className="input-last-name"
                value={this.state.lastName}
                onChange={event => this.handleInputChange('lastName', event)}
              />
            </div>
            <input
              type="text"
              name="email"
              className="input-email"
              value={this.state.email}
              onChange={event => this.handleInputChange('email', event)}
            />
            <input
              type="tel"
              name="phone"
              className="input-phone-number"
              value={this.state.phone}
              onChange={event => this.handleInputChange('phone', event)}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default EditHeaderData;
