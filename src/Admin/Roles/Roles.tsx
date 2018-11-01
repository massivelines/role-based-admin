// TODO: copy role from one project to another???
// QUESTION: should bulk actions be moved to each project???

import * as React from 'react';
import ReactTable from 'react-table';

import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledTooltip,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCopy } from '@fortawesome/pro-regular-svg-icons';

import EditRole from './EditRole';
import AddRole from './AddRole';

// Interfaces
export interface RolesProps {
  projectList: any;
  roleList: any;
  data: any;
  refetch: any;
}

interface projectInstance {
  id: number;
  title: string;
  // active: boolean;
  // predefinedRoles: Role[];
  // customRoles: Role[];
}

interface Role {
  id: number;
  title: string;
}

interface UserState {
  editRoleOpen: boolean;
  addRoleOpen: boolean;
  editRoleData: object;
}

export class Roles extends React.Component<RolesProps, UserState> {
  constructor(props) {
    super(props);

    this.editToggle = this.editToggle.bind(this);
    this.addToggle = this.addToggle.bind(this);

    this.state = {
      editRoleOpen: false,
      addRoleOpen: false,
      editRoleData: null,
    };
  }

  editToggle() {
    this.setState({
      editRoleOpen: !this.state.editRoleOpen,
    });
  }

  addToggle() {
    this.setState({
      addRoleOpen: !this.state.addRoleOpen,
    });
  }

  render() {
    console.log('Roles props', this.props);

    // Columns
    const columns = [
      // {
      //   id: 'role-checkbox',
      //   // TODO: setup select all checkbox
      //   Header: <input title="Select All" type="checkbox" />,
      //   accessor: d => <input className="role-checkbox" type="checkbox" />,
      //   resizable: false,
      //   filterable: false,
      //   sortable: false,
      //   width: 25,
      // },
      {
        Header: 'Title',
        accessor: 'title',
        minWidth: 30,
      },
      // {
      //   Header: 'Type',
      //   accessor: 'roleType',
      //   minWidth: 15,
      // },
      {
        Header: 'Description',
        accessor: 'description',
        minWidth: 55,
      },
      // {
      //   id: 'copy-role',
      //   Cell: rowData => {
      //     return (
      //       <button
      //         className="fa-button-reset"
      //         title="Copy Role"
      //         onClick={event => {
      //           console.log(event.target);
      //         }}
      //       >
      //         <FontAwesomeIcon icon={faCopy} />
      //       </button>
      //     );
      //   },
      //   filterable: false,
      //   sortable: false,
      //   width: 25,
      // },
      {
        id: 'edit-role',
        Cell: rowData => {
          return (
            <button
              className="fa-button-reset edit-arrow-button"
              title="Edit Role"
              onClick={() => {
                this.setState({ editRoleData: rowData.original });
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

    return (
      <div className="admin-roles-page">
        <div className="content-header">
          <div className="content-title">Roles</div>
          {/* <UncontrolledDropdown>
            <DropdownToggle caret>Bulk Actions</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={event => {
                  console.log(event.target);
                }}
              >
                Delete Roles
              </DropdownItem>
              <DropdownItem
                onClick={event => {
                  console.log(event.target);
                }}
              >
                Duplicate Roles
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </div>

        {this.props.projectList.map(projectData => {
          return (
            <div key={projectData.id} className="project-container">
              <div className="project-header">
                <div className="project-title h5">{projectData.title}</div>
                <Button onClick={() => this.addToggle()}>Add Role</Button>
              </div>
              <ReactTable
                data={this.props.roleList}
                columns={columns}
                minRows={0}
                showPagination={false}
              />
            </div>
          );
        })}

        {/* <RolesListBuilder projectsList={this.props.projectList} roleList={this.props.roleList} /> */}
        {this.state.editRoleOpen == true ? (
          <EditRole
            isOpen={this.state.editRoleOpen}
            roleData={this.state.editRoleData}
            successButton={() => {
              this.editToggle();
              // this.props.refetch();
            }}
            closeButton={() => {
              this.editToggle();
              // this.props.refetch();
            }}
          />
        ) : null}

        {this.state.addRoleOpen == true ? (
          <AddRole
            isOpen={this.state.addRoleOpen}
            successButton={() => {
              this.addToggle();
              // this.props.refetch();
            }}
            closeButton={() => {
              this.addToggle();
              // this.props.refetch();
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default Roles;
