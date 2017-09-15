import React, { Component } from 'react';
import SideBar from '../../containers/SideBar'
import PropTypes from 'prop-types';

const AppLayout = (props) => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="" style={{ 'flex': '1 1' }}>
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

AppLayout.propTypes = { children: PropTypes.object.isRequired };

export default AppLayout
