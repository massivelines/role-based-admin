import * as React from 'react';

import {
  Button,
  Modal,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavLink,
} from 'reactstrap';
// import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons';

// TODO: add all icons to library

// TODO: figure out action button, left and right button interfaces
export interface ModalPanelProps {
  className: string;
  isOpen: boolean;
  navTitle: string;
  header: React.ReactNode;
  actionButton: any[];
  contentHeader: string;
  contentBody: React.ReactChild;
  leftButton: any;
  rightButton: any;
}

export class ModalPanel extends React.Component<ModalPanelProps> {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('ModalPanel', this.props);
    return (
      <Modal
        className={`modal-panel ${this.props.className}`}
        isOpen={this.props.isOpen}
        toggle={this.props.leftButton}
      >
        {/* Nav (green bar) */}
        <div className="modal-panel-nav">
          <div className="h5" onClick={this.props.leftButton}>
            {/* <FontAwesome className="fa nav-title-icon" name="chevron-left" /> */}
            <FontAwesomeIcon className="nav-title-icon" icon={faChevronLeft} />
            {this.props.navTitle}
          </div>
        </div>

        {/* Header */}
        <div className="modal-panel-header">
          <div className="modal-panel-header-content">{this.props.header}</div>

          {/* Action Button */}
          <UncontrolledDropdown>
            <DropdownToggle caret>Actions</DropdownToggle>
            <DropdownMenu>
              {this.props.actionButton.map((action, index) => (
                <DropdownItem
                  key={index}
                  onClick={action.callback}
                >
                  {action.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>

        {/* Content */}
        <div className="modal-panel-content-header h5">{this.props.contentHeader}</div>
        <div className="modal-panel-content-body">{this.props.contentBody}</div>

        {/* Footer */}
        <div className="modal-panel-footer">
          {/* Left Button */}
          <Button
            outline
            color="danger"
            className="modal-panel-left-button"
            onClick={this.props.leftButton}
          >
            Cancel
          </Button>

          {/* Right Button */}
          <Button
            color="success"
            className="modal-panel-right-button"
            onClick={this.props.rightButton}
          >
            Save
          </Button>
        </div>
      </Modal>
    );
  }
}

export default ModalPanel;
