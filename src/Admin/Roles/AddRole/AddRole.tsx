import * as React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import ModalPanel from '../../components/ModalPanel/ModalPanel';

export interface AddRoleProps {
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

export class AddRole extends React.Component<AddRoleProps> {
  // Header
  header() {
    return (
      <Form className="add-role-header">
        <Row>
          <Col>
            <FormGroup>
              <Label className="h4" for="roleTitle">Role Title</Label>
              <Input
                type="text"
                name="role-title"
                id="roleTitle"
                placeholder="Enter a title for the role"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="roleDescription">Role Description</Label>
              <Input
                type="textarea"
                name="role-description"
                id="roleDescription"
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }

  // Content
  content(resourcesList: Resource[], rulesList: Rule[]) {
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

        return (
          <div className="rule-check-container" key={ruleData.id}>
            <input
              type="checkbox"
              title={`${ruleData.title}: ${ruleData.description}`}
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
    // console.log('AddRole props', this.props);
    // console.log(JSON.stringify(this.props));
    return (
      <ModalPanel
        className="add-role"
        isOpen={this.props.isOpen}
        navTitle="Add Role"
        // Header
        header={this.header()}
        actionButton={[{ title: 'None' }]}
        // Content
        contentHeader="Permissions"
        contentBody={this.content(
          this.props.resourceList,
          this.props.rulesList,
        )}
        leftButton={this.props.successButton}
        rightButton={this.props.closeButton}
      />
    );
  }
}

export default AddRole;
