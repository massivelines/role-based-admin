// TODO: list out roles and users of this project
// maybe allow to assign users?

import * as React from 'react';

import ModalPanel from '../../components/ModalPanel/ModalPanel';

export interface EditprojectProps {
  isOpen: boolean;
  projectInstance: any;
  successButton: any;
  closeButton: any;
}

export class Editproject extends React.Component<EditprojectProps> {
  header(projectData) {
    // console.log(projectData);
    return (
      <div>
        <div className="title h4">{projectData.title}</div>
        <div className="alias">{projectData.alias}</div>
        <div className="description">{projectData.description}</div>
      </div>
    );
  }

  content(usersList) {
    return (
      <React.Fragment>
        {usersList.map(userData => {
          return (
            <div key={userData.id} className="project-user">
              <div className="profile-picture-container">
                {userData.active == false ? (
                  <div className="profile-picture-text">P</div>
                ) : userData.picture !== null ? (
                  <img
                    className="profile-picture"
                    src={userData.picture}
                    alt={userData.fullName}
                  />
                ) : (
                  <div className="profile-picture-text">
                    {userData.firstName[0]}
                    {userData.lastName[0]}
                  </div>
                )}
              </div>

              <div className="project-user-text">
                {userData.firstName == null ? (
                  <div className="project-user-name">{userData.email}</div>
                ) : (
                  <React.Fragment>
                    <div className="project-user-name">
                      {userData.firstName} {userData.lastName}
                    </div >
                    <div className="project-user-email">{userData.email}</div>
                  </React.Fragment>
                )}
              </div>
            </div>
          );
        })}

        {/* {usersList.map(userData => {
          if (userData.firstName == null) {
            return (
              <li key={userData.id}>
                {userData.email}
              </li>
            );
          } else {
            return (
              <li key={userData.id}>
                {userData.firstName} {userData.lastName}
              </li>
            );
          }
        })} */}
      </React.Fragment>
    );
  }

  render() {
    console.log('Editproject props', this.props);

    return (
      <ModalPanel
        className="edit-project"
        isOpen={this.props.isOpen}
        navTitle="View Project"
        header={this.header(this.props.projectInstance)}
        actionButton={[
          { title: 'Archive Project' },
        ]}
        contentHeader="Assigned Users"
        contentBody={this.content(this.props.projectInstance.user)}
        leftButton={this.props.successButton}
        rightButton={this.props.closeButton}
      />
    );
  }
}

export default Editproject;
