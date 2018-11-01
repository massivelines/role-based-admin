import * as React from 'react';

import CollapseList from '../../components/CollapseList/CollapseList';

import ModalPanel from '../../components/ModalPanel/ModalPanel';

// TEMP: always export component interface props
// TODO: clean up objects later
// https://stackoverflow.com/questions/29382389/defining-array-with-multiple-types-in-typescript

// Interface for Props
export interface AddUserProps {
  isOpen: any;
  projectList: object[];
  roleList: object[];
  successButton: any;
  closeButton: any;
}

// TEMP: if has state add interface
// Interface for State
interface AddUserState {
  emailAddress: string;
}

export class AddUser extends React.Component<AddUserProps, AddUserState> {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      emailAddress: '',
    };
  }

  // input change handler
  handleInputChange(event) {
    this.setState({ emailAddress: event.target.value });
  }

  // Header Section
  header() {
    const headerContent = (
      <div className="header-content-div">
        <div className="add-user-header-container">
          <div className="add-user-header-text h4">Add Email Address</div>
          <div className="add-user-input-container">
            <input
              className="add-user-email"
              type="text"
              value={this.state.emailAddress}
              placeholder="user@address.com"
              onChange={event => this.handleInputChange(event)}
            />
            <sub className="add-user-email-hint">
              Recipient will receive a link to create their password and setup a
              profile.
            </sub>
          </div>
        </div>
      </div>
    );

    return headerContent;
  }

  // Content Section
  content(projectsArray: object[], roles: object[]) {
    // loop to build roles for each project
    const roleList = () => {
      return roles.map((roleData: { id: number; title: string }) => {
        return (
          <div key={roleData.id} className="modal-panel-user-role">
            <label className="modal-panel-user-role-data">
              {roleData.title}
              <input
                name="roleData.title"
                type="checkbox"
                // checked={this.state.isGoing}
                // onChange={this.handleInputChange}
              />
            </label>
          </div>
        );
      });
    };

    // loop for building project list
    const projectList = projectsArray.map(
      (projectData: { id: number; title: string }) => {
        return (
          <CollapseList
            className="edit-user-collapse-list"
            key={projectData.id}
            id={projectData.id}
            title={projectData.title}
            content={roleList()}
          />
        );
      }
    );

    return (
      <React.Fragment>
        {projectList}
      </React.Fragment>
    );
  }

  render() {
    console.log('AddUser props', this.props);
    return (
      <ModalPanel
        className="add-user"
        isOpen={this.props.isOpen}
        navTitle="Add User"
        header={this.header()}
        actionButton={[{ title: 'Unsure if Needed' }]}
        contentHeader="Assign Projects and Roles"
        contentBody={this.content(
          this.props.projectList,
          this.props.roleList
        )}
        leftButton={this.props.successButton}
        rightButton={this.props.closeButton}
      />
    );
  }
}

export default AddUser;
