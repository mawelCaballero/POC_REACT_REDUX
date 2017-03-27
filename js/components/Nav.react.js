/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { logout } from '../actions/AppActions';
import LoadingButton from './LoadingButton.react';

class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (


      <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
              <li classNamne ="menu-text">
              <Link to="/dashboard" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Dashboard</Link>
            </li>
            <li classNamne ="menu-text">
              <Link to="/quote" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Quote</Link>
            </li>
          </ul>
        </div>
          {this.props.currentlySending ? (

            <LoadingButton className="button" />
          ) : (

            <div className="top-bar-right">
              <ul className="menu">
                <li className ="menu-text"><a href="#" onClick={::this._logout}>Logout</a></li>
              </ul>
            </div>
          )}

      </div>
      ) : (
        <div className="top-bar">
          <div className="top-bar-right">
            <ul className="menu">
              <li><Link to="/register" >Register</Link></li>
              <li><Link to="/login" >Login</Link></li>
            </ul>
          </div>
        </div>
      );

    return(
      <div>
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <div className="title-bar-title"><Link to="/" ><h1 className="title">P.O.C.&nbsp;REACT+Redux&nbsp;</h1></Link></div>
        </div>
          { navButtons }
      </div>
    );
  }

  _logout() {
    this.props.dispatch(logout());
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  currentlySending: React.PropTypes.bool.isRequired
}

export default Nav;
