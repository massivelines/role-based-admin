// TODO: fix fontawesome icons
// TODO: fix admin-header classes

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faBriefcase,
  faSignOut,
  faUser
} from '@fortawesome/pro-light-svg-icons';
import {
  faBell,
  faQuestion,
} from '@fortawesome/pro-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import MediaQuery from 'react-responsive';

import { Logo } from './Logo';
import { LogoSmall } from './LogoSmall';

export class Header extends React.Component {
  render() {
    // console.log('Header props', this.props);
    return (
      <div className="admin-header">
        <div className="logo-container">
          <Link to="/">
          <MediaQuery query="(max-width: 576px)">
            <LogoSmall />
          </MediaQuery>
          <MediaQuery query="(min-width: 577px)">
            <Logo />
          </MediaQuery>
          </Link>
        </div>
        <div className="user-settings">
          <div className="user-settings-icons">
            <FontAwesomeIcon className="notifications-icon" icon={faBell} />
            <FontAwesomeIcon className="help-icon" icon={faQuestion} />
          </div>

          <UncontrolledDropdown>
            <DropdownToggle className="avatar-self">SR</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink to="/">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      className="avatar-dropdown-icon"
                      icon={faBriefcase}
                    />
                  </div>
                  My Projects
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/personal-info">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      className="avatar-dropdown-icon"
                      icon={faUser}
                    />
                  </div>
                  My Account
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/users">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      className="avatar-dropdown-icon"
                      icon={faCog}
                    />
                  </div>
                  Administration
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/">
                  <div className="icon-wrapper">
                    <FontAwesomeIcon
                      className="avatar-dropdown-icon fa fal"
                      icon={faSignOut}
                    />
                  </div>
                  Logout
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    );
  }
}

export default Header;
