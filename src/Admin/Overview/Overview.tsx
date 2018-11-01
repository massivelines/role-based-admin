import * as React from 'react';

import { Card } from 'reactstrap';

export interface OverviewProps {
  projectList: any;
  roleList: any;
  usersList: any;
  // getAllprojects: projectInstance[];
}

interface projectInstance {
  id: number;
  title: string;
  active: boolean;
  role: any;
}

interface Role {
  id: number;
  title: string;
  user: any;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  picture: string;
}
// TODO: setup if role has no users dont show

// projects
const BuildOverview: React.SFC<{
  projectsList: projectInstance[];
}> = props => {
  return (
    <React.Fragment>
      {props.projectsList.map(projectData => {
        return (
          <Card key={projectData.id} className="project-container">
            <div className="project-title">
              {projectData.title} <div className="alias">alias#</div>
            </div>
            <div className="roles-test">
              {projectData.role ? (
                <RoleContainer roleList={projectData.role} />
              ) : null}
            </div>
          </Card>
        );
      })}
    </React.Fragment>
  );
};

// Roles
const RoleContainer: React.SFC<{
  roleList: Role[];
}> = props => {
  return (
    <React.Fragment>
      {props.roleList.map(roleData => {
        return (
          <div key={roleData.id} className="role-container">
            <div className="role-title h6">{roleData.title}</div>
            {roleData.user ? <UsersContainer userList={roleData.user} /> : null}
          </div>
        );
      })}
    </React.Fragment>
  );
};

// Users
const UsersContainer: React.SFC<{
  userList: any;
}> = props => {
  // TODO: finish up overview loop through users if project id is in user get its role.
  // TODO: Or build out fake data

  return (
    <div className="user-container">
      {props.userList.map(userData => {
        // console.log(userData);
        if (userData.active == true) {
          return (
            <div key={userData.id} className="user">
              <div className="picture-container">
                {/* if user doesn't have a picture use initials */}
                {userData.picture == null ? (
                  <div className="picture-text">
                    {userData.firstName[0]}
                    {userData.lastName[0]}
                  </div>
                ) : (
                  <img src={userData.picture} className="picture" />
                )}
              </div>
              {userData.firstName} {userData.lastName}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export class Overview extends React.Component<OverviewProps> {
  render() {
    console.log('Overview props', this.props);
    // console.log(JSON.stringify(this.props));

    return (
      <React.Fragment>
        <div className="admin-overview">
          <div className="content-header">
            <div className="content-title">Overview</div>
          </div>
          <div className="overview-content">
            <BuildOverview projectsList={this.props.projectList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Overview;
