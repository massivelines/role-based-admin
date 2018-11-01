// TODO: add autocomplete to all search fields
// TODO: what if contract and pending, how to show???

import * as React from 'react';
import ReactTable, { Column, RowInfo } from 'react-table';

import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledTooltip,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';

import gql from 'graphql-tag';

import EditUser from './EditUser';
import AddUser from './AddUser';

export interface UsersProps {
  data: any;
  refetch: any;
}

interface UserState {
  editUserOpen: boolean;
  addUserOpen: boolean;
  editUserProfileData: object;
}

const ADD_USER = gql`
  mutation AddUser($email: String) {
    addUser(email: $email) {
      email
    }
  }
`;

// const AddUser = (props) => {
//   console.log(props);
//   return (
//     <Mutation mutation={ADD_USER} variables={{ email: "none@none.com" }}>
//       {postMutation => <button onClick={postMutation}>
//         Submit
//         </button>}
//     </Mutation>
//   );
// };

export class Users extends React.Component<UsersProps, UserState> {
  constructor(props) {
    super(props);

    this.editToggle = this.editToggle.bind(this);
    this.addToggle = this.addToggle.bind(this);

    this.state = {
      editUserOpen: false,
      addUserOpen: false,
      editUserProfileData: null,
    };
  }

  editToggle() {
    this.setState({
      editUserOpen: !this.state.editUserOpen,
    });
  }

  addToggle() {
    this.setState({
      addUserOpen: !this.state.addUserOpen,
    });
  }

  render() {
    // Columns for React-Table
    const columns: any = [
      {
        // User Status
        id: 'userStatus',
        Header: '',
        accessor: data => {
          // sets the user-status in the row data to be accessed in other cells
          // console.log('accessor', data);
          // TODO: change revoke to revoked
          if (data.active == false) {
            return 'pending';
          } else if (data.revoke == true) {
            return 'revoke';
          } else if (data.contract == true) {
            return 'contract';
          } else {
            return 'active';
          }
        },
        Cell: props => {
          return (
            <React.Fragment>
              <div id={`status-${props.index}`} className={`user-status-hover-div user-status-${props.row.userStatus}`}/>
              <UncontrolledTooltip
                placement="right"
                target={`status-${props.index}`}
                delay={{ show: 100, hide: 150 }}
              >
                {props.row.userStatus}
              </UncontrolledTooltip>
            </React.Fragment>
          );
        },
        getProps: (state, rowInfo: RowInfo, column) => {
          return {
            className: `user-status-${rowInfo.row.userStatus}`,
          };
        },
        // sortMethod: (a, b, desc) => {
        //   if (a === b) {
        //     return 0;
        //   } else if ( a.length > b.length) {
        //     return 1
        //   }
          
        // },
        resizable: false,
        filterable: false,
        // sortable: false,
        width: 10,
      },
      {
        // Checkboxes
        id: 'userCheckbox',
        Header: <input type="checkbox" />,
        accessor: d => <input className="users-checkbox" type="checkbox" />,
        resizable: false,
        filterable: false,
        sortable: false,
        width: 25,
      },
      {
        // Photos
        id: 'userPhoto',
        Header: '',
        accessor: 'picture',
        Cell: props => {
          return (
            <div className="profile-picture-container">
              {props.row.userStatus == 'pending' ? (
                <div className="profile-picture-text">P</div>
              ) : props.row.userPhoto ? (
                <img
                  className="profile-picture"
                  src={props.row.userPhoto}
                  alt={props.row.fullName}
                />
              ) : (
                <div className="profile-picture-text">
                  {props.original.firstName[0]}
                  {props.original.lastName[0]}
                </div>
              )}
            </div>
          );
        },
        
        resizable: false,
        filterable: false,
        sortable: false,
        width: 75,
      },
      {
        // Full Name / Pending
        id: 'fullName',
        Header: 'Name',
        accessor: props => {
          return `${props.firstName} ${props.lastName}`;
        },
        Cell: props => {
          // TODO: clean up this to a better function only return name or pending
          if (props.original.active == true) {
            return <div className="name">{props.value}</div>;
          } else {
            return (
              <div className="pending name">
                <span>Pending</span>
              </div>
            );
          }
        },
        minWidth: 20,
      },
      {
        // User Email
        id: 'userEmail',
        Header: 'Email',
        accessor: 'email',
        Cell: props => {
          return <div className="user-email">{props.value}</div>;
        },
        minWidth: 30,
      },
      {
        // Temp for demo, dont display if there isnt anything
        // Assigned projects
        id: 'projectInstance',
        Header: 'Assigned Projects',
        accessor: data => {
          if (data.projectInstance == null) {
            return 'none';
          } else {
            return data.projectInstance.map(mData => {
              return `${mData.id} `;
            });
          }
        },
        Cell: data => {
          if (data.original.projectInstance == null) {
            return <span className="user-projects">None</span>;
          } else {
            return data.original.projectInstance.map(mData => {
              return (
                <span key={`${mData.id}`} className="user-projects">
                  {mData.title}
                </span>
              );
            });
          }
        },
        // TODO: setup filter to projects and bring searched project to beginning of list highlighted
        // Filter: ({ filter, onChange }) => (
        //   <Select
        //     className="react-select"
        //     isMulti
        //     name="iceCream"
        //     options={options}
        //     menuPortalTarget={document.body}
        //     classNamePrefix="select"
        //   />
        // ),
        minWidth: 50,
      },
      {
        // Edit User Button
        id: 'editUser',
        Cell: rowData => {
          return (
            <button
              className="fa-button-reset edit-arrow-button"
              title="Edit Role"
              onClick={() => {
                this.setState({ editUserProfileData: rowData.original });
                this.editToggle();
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          );
        },
        filterable: false,
        sortable: false,
        width: 45,
      },
    ];

    console.log('Users props', this.props);
    // const util = require('util');
    // console.log(util.inspect(this.props, {showHidden: false, depth: null}));

    // Return
    return (
      <div className="admin-users-page">
        <div className="content-header">
          <div className="content-title">Users</div>
          <div className="content-header-buttons">
            <Button color="primary" onClick={() => this.addToggle()}>
              Add User
            </Button>
            {/* <Button bsStyle="info" onClick={this.props.refetch}>Add User</Button> */}

            {/* Bulk Actions */}
            <UncontrolledDropdown>
              <DropdownToggle caret>Bulk Actions</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Resend Verification</DropdownItem>
                <DropdownItem>Revoke Users</DropdownItem>
                <DropdownItem>Reset Password</DropdownItem>
                <DropdownItem>Delete Users</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <AddUser refetch={this.props.refetch()} /> */}
          </div>
        </div>

        {/* Table */}
        <div className="reactTable-holder">
          <ReactTable
            data={this.props.data.usersList}
            columns={columns}
            minRows={0}
            showPagination={false}
            defaultSorted={[
              {
                id: 'userStatus',
                desc: true,
              },
            ]}
          />
        </div>

        {/* Edit User Modal */}
        {this.state.editUserOpen == true ? (
          <EditUser
            isOpen={this.state.editUserOpen}
            userData={this.state.editUserProfileData}
            successButton={() => {
              this.editToggle();
              this.props.refetch();
            }}
            closeButton={() => {
              this.editToggle();
              this.props.refetch();
            }}
          />
        ) : null}

        {/* Add User */}
        {this.state.addUserOpen == true ? (
          <AddUser
            isOpen={this.state.addUserOpen}
            successButton={() => {
              this.addToggle();
              this.props.refetch();
            }}
            closeButton={() => {
              this.addToggle();
              this.props.refetch();
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default Users;
