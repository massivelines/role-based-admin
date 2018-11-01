import * as React from 'react';
import ReactTable from 'react-table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';

import Editproject from './Editproject';

// Interfaces
export interface projectsProps {
  projectList: projectInstance[];
}
export interface projectsState {
  editprojectOpen: boolean;
  // editprojectData: any;
  editprojectId: any;
}

interface projectInstance {
  id: number;
  title: string;
  active: boolean;
}

export class Projects extends React.Component<projectsProps, projectsState> {
  constructor(props) {
    super(props);

    this.editToggle = this.editToggle.bind(this);

    this.state = {
      editprojectOpen: false,
      // editprojectData: null,
      editprojectId: null,
    };
  }

  editToggle() {
    this.setState({
      editprojectOpen: !this.state.editprojectOpen,
    });
  }

  render() {
    // console.log('Projects props', this.props);
    const columns = [
      // {
      //   id: 'project-checkbox',
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
        minWidth: 20,
      },
      {
        Header: 'Alias',
        accessor: 'alias',
        minWidth: 10,
      },
      {
        Header: 'Description',
        accessor: 'description',
        minWidth: 60,
      },
      {
        id: 'active',
        Header: 'Status',
        accessor: 'active',
        Cell: d => {
          if (d.row.active == false) {
            return <span className="archived">Archived</span>;
          } else {
            return <span className="active">Active</span>;
          }
        },
        minWidth: 10,
      },
      {
        id: 'edit-project',
        Cell: rowData => {
          return (
            <button
              className="fa-button-reset edit-arrow-button"
              title="Edit project"
              onClick={event => {
                // this.setState({ editprojectData: rowData.original.id });
                this.setState({ editprojectId: rowData.original.id });
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
      <div className="admin-projects-page">
        <div className="content-header">
          <div className="content-title">Projects</div>
        </div>
        <ReactTable
          getTrProps={(state, rowInfo, column) => {
            return {
              className: rowInfo.row.active == false && 'row-archived',
            };
          }}
          data={this.props.projectList}
          columns={columns}
          minRows={0}
          showPagination={false}
          defaultSorted={[
            {
              id: 'active',
              desc: true,
            },
          ]}
        />

        {this.state.editprojectOpen == true ? (
          <Editproject
            isOpen={this.state.editprojectOpen}
            // projectData={this.state.editprojectData}
            projectID={this.state.editprojectId}
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
      </div>
    );
  }
}

export default Projects;
