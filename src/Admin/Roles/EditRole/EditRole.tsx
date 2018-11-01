import * as React from 'react';
// import { UncontrolledTooltip } from 'reactstrap';

import ModalPanel from '../../components/ModalPanel/ModalPanel';

export interface EditRoleProps {
  data: any;
  roleData: Role;
  isOpen: any;
  navTitle: any;
  successButton: any;
  closeButton: any;
  resourceList: any;
  rulesList: any;
}

interface Role {
  title: string;
  roleType: string;
  description: string;
  resource: Resource[];
}

interface Resource {
  id: number;
  title: string;
  description: string;
  rule: Rule[];
}

interface Rule {
  id: number;
  title: string;
  description: string;
}

export class EditRole extends React.Component<EditRoleProps> {
  // Header
  header(role: { title: string; description: string }) {
    return (
      <div>
        <div className="edit-role-header-title h4">{role.title}</div>
        <div className="edit-role-header-description">{role.description}</div>
        {/* <div className="edit-role-header-description">{role.description}</div> */}
      </div>
    );
  }

  // Content
  content(
    assignedResource: Resource[],
    resourcesList: Resource[],
    rulesList: Rule[],
  ) {
    // loop through rule titles
    const ruleTitles = rulesList.map((rule: { id: number; title: string }) => {
      return (
        <div id={`UncontrolledTooltipExample${rule.id}`} key={rule.id}>
          {rule.title}
        </div>
      );
    });

    // top row
    const resourcesHeaderRow = (
      <div className="add-role-resource-row resource-row-header">
        {/* adds a spacer to keep inline with resource titles */}
        <div className="resource-row">
          <div className="resource-row-spacer" />
          {ruleTitles}
        </div>
      </div>
    );

    // loop through build checkboxes for each row
    const checkboxList = (resource: Resource) =>
      rulesList.map((ruleData: Rule) => {
        let defaultChecked = false;

        // check to see if user has this resource assigned to them
        assignedResource.forEach(assignedResourceData => {
          // if true loop to see if check box needs checked
          if (assignedResourceData.id == resource.id) {
            assignedResourceData.rule.forEach(assignedRule => {
              if (assignedRule.id == ruleData.id) {
                defaultChecked = true;
              }
            });
          }
        });

        return (
          <div className="rule-check-container" key={ruleData.id}>
            <input
              type="checkbox"
              title={`${ruleData.title}: ${ruleData.description}`}
              readOnly
              checked={defaultChecked}
            />
          </div>
        );
      });

    // loop through build resource rows
    const resourcesRow = resourcesList.map((resource: any) => {
      return (
        <div className="resource-row" key={resource.id}>
          <div
            className="resource-title"
            id={`UncontrolledTooltipExample${resource.id}`}
          >
            {resource.title}
          </div>
          {checkboxList(resource)}
        </div>
      );
    });

    // return everything
    return (
      <React.Fragment>
        {resourcesHeaderRow}
        {resourcesRow}
      </React.Fragment>
    );
  }

  render() {
    console.log('EditRole props', this.props);
    // console.log(JSON.stringify(this.props));
    return (
      <ModalPanel
        className="edit-role"
        isOpen={this.props.isOpen}
        navTitle="Edit Role"
        // Header
        header={this.header(this.props.roleData)}
        actionButton={[
          { title: 'Duplicate Role' },
          { title: 'Edit Role' },
          { title: 'Delete Role' },
        ]}
        // Content
        contentHeader="Permissions"
        contentBody={this.content(
          this.props.roleData.resource,
          this.props.resourceList,
          this.props.rulesList,
        )}
        leftButton={this.props.successButton}
        rightButton={this.props.closeButton}
      />
    );
  }
}

export default EditRole;
