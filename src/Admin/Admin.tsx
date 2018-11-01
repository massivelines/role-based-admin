// TODO: change back to typescript
// import * as React from 'react';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import { hot } from 'react-hot-loader';

// used to log out warnings and errors about react-hot-loader config
// import { setConfig } from 'react-hot-loader';

// import AdminHeader from './AdminHeader/AdminHeader';
// import Footer from '../Footer/Footer';
// import Navigation from '../../Navigation';

import PersonalInfo from './PersonalInfo';
// import Personalization from './Personalization';
import Security from './Security';

import Users from './Users';
import Roles from './Roles';
import Projects from './Projects';
// import Overview from './Overview';

class Admin extends React.Component {
  render() {
    // console.log('Admin props', this.props);
    return (
          <React.Fragment>
            {/* <AdminHeader /> */}
            <div className="sidebar">
              <div className="sidebar-title">Settings</div>
              <div className="section-nav">
                <div className="section-header">My Account</div>
                <div className="section-links">
                  <ul>
                    <li>
                      <NavLink to="/personal-info">Personal Info</NavLink>
                    </li>
                    <li>
                      <NavLink to="/security">Security</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/personalization">Personalization</NavLink>
                    </li>
                    <li>
                      <NavLink to="/additional-settings">
                        Additional Settings
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="section-nav">
                <div className="section-header">Administration</div>
                <div className="section-links">
                  <ul>
                    {/* <li>
                      <NavLink to="/overview">Overview</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="/roles">Roles</NavLink>
                    </li>
                    <li>
                      <NavLink to="/users">Users</NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/audit-trail">Audit Trail</NavLink>
                    </li>
                    <li>
                      <NavLink to="export-templates">Export Templates</NavLink>
                    </li>
                    <li>
                      <NavLink to="company-profile">Company Profile</NavLink>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="content-body">
                {/* TEMP: probably dont need ...props */}
                <Route
                  path="/personal-info"
                  render={props => <PersonalInfo />}
                />
                {/* <Route
                  path="/personalization"
                  render={props => (
                    <Personalization {...props} {...this.props} />
                  )}
                /> */}
                <Route
                  path="/security"
                  render={props => <Security />}
                />
                {/* <Route
                  path="/overview"
                  render={props => <Overview />}
                /> */}
                <Route
                  path="/projects"
                  render={props => <Projects />}
                />
                <Route
                  path="/roles"
                  render={props => <Roles />}
                />
                <Route
                  path="/users"
                  render={props => <Users />}
                />
              </div>
            </div>
            {/* <Footer /> */}
          </React.Fragment>
    );
  }
}

export default hot(module)(Admin);
