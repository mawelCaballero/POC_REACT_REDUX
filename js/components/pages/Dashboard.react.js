/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadRenderingData } from '../../actions/AppActions';
import  View  from '../View.react';

class Dashboard extends Component {

  componentWillMount(){
    const dispatch = this.props.dispatch;
    dispatch(loadRenderingData('dashboard','quotes'));
  }

  render() {
    console.log('Rendering Dashboard');
    return (
       <View data={this.props.data.viewdata}/>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);
