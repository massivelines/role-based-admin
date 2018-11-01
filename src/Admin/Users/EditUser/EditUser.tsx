import * as React from 'react';

import DisplayHeaderData from './DisplayHeaderData';
import EditHeaderData from './EditHeaderData';

import CollapseList from '../../components/CollapseList/CollapseList';
import ModalPanel from '../../components/ModalPanel/ModalPanel';

// TODO: set success and close button interface

export interface EditUserProps {
  isOpen: boolean;
  userData: any;
  successButton: any;
  closeButton: any;
  projectList: any;
  roleList: any
}

interface EditUserState {
  editUserDetails: boolean;
      firstName: string;
      lastName: string;
      email: string;
      picture: string;
      phone: string;
}

export class EditUser extends React.Component<EditUserProps, EditUserState> {
  constructor(props) {
    super(props);

    this.editUserDetailsToggle = this.editUserDetailsToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      editUserDetails: false,
      firstName: this.props.userData.firstName,
      lastName: this.props.userData.lastName,
      email: this.props.userData.email,
      picture: this.props.userData.picture,
      phone: this.props.userData.phone,
    };
  }

  // TODO setup on click toggle for editing user
  editUserDetailsToggle() {
    this.setState({ editUserDetails: !this.state.editUserDetails });
  }

  handleInputChange(title, event) {
    this.setState({ [title]: event.target.value } as EditUserState);
  }

  // Edit User Header
  modalHeader(props) {
    // console.log(props);

    // TEMP: set to true to show edit always
    if (this.state.editUserDetails == false) {
      return (
        <DisplayHeaderData
          active={props.active}
          picture={this.state.picture}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
        />
      );
    } else {
      return (
        <EditHeaderData
          active={props.active}
          picture={this.state.picture}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
        />
      );
    }
  }

  // TODO: style roles list
  // TODO: fix var names

  // Edit User Content
  modalContent(projects, roles, projectInstance) {
    // var to set if CollapseList has preview
    let hasPreview = false;

    // Roles List
    const roleList = projectData => {
      // while looping, if user has current project, check assigned roles and set to tempAssignedproject
      const tempAssignedproject = projectInstance.find(
        assignedprojectFind => assignedprojectFind.id == projectData.id,
      );

      return roles.map(roleData => {
        // set hasPreview to false on each map
        hasPreview = false;
        let checked = false;

        // if tempAssignedproject has data check for assigned roles
        if (tempAssignedproject) {
          tempAssignedproject.role.map(preRole => {
            if (preRole.id == roleData.id) {
              // if role is defaultChecked also set hasPreview to true
              hasPreview = true;
              checked = true;
            }
          });
        }

        return (
          <div
            key={roleData.id}
            className={
              'modal-panel-user-role ' +
              // False error
              // https://github.com/Microsoft/TypeScript/issues/25642
              // @ts-ignore
              (checked == true && 'collapse-list-preview')
            }
          >
            <label className="modal-panel-user-role-data">
              {roleData.title}
              <input
                name="roleData.title"
                type="checkbox"
                defaultChecked={checked}
                // checked={this.state.isGoing}
                // onChange={this.handleInputChange}
              />
            </label>
          </div>
        );
      });
    };

    // loop for building project list
    const projectList = projects.map(projectData => {
      return (
        <CollapseList
          className="edit-user-collapse-list"
          key={projectData.id}
          id={projectData.id}
          title={projectData.title}
          content={roleList(projectData)}
          hasPreview={hasPreview}
        />
      );
    });

    return (
      <React.Fragment>
        {projectList}
      </React.Fragment>
    );
  }

  render() {
    console.log('Edit User', this.props);
    return (
      <ModalPanel
        className="edit-user"
        isOpen={this.props.isOpen}
        navTitle="Edit User"
        header={this.modalHeader(this.props.userData)}
        actionButton={[
          {
            title: 'Resend Verification',
            callback: () => {
              console.log(this);
            },
          },
          // TODO: if user is contract and not self, gray out
          {
            title: 'Edit User',
            callback: () => {
              this.editUserDetailsToggle()
              console.log(this);
            },
          },
          {
            title: 'Revoke User',
            callback: () => {
              console.log(this);
            },
          },
          {
            title: 'Reset Password',
            callback: () => {
              console.log(this);
            },
          },
          {
            title: 'Reset Two Factor',
            callback: () => {
              console.log(this);
            },
          },
          // TODO: figure out how to add a divider
          {
            title: 'Delete User',
            callback: () => {
              console.log(this);
            },
          },
        ]}
        contentHeader="Assign Projects and Roles"
        contentBody={this.modalContent(
          this.props.projectList,
          this.props.roleList,
          this.props.userData.projectInstance,
        )}
        leftButton={this.props.successButton}
        rightButton={this.props.closeButton}
      />
    );
  }
}

export default EditUser;
