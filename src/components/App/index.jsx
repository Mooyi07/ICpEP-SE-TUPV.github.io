
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Component from '../Component/';
import Component2 from '../Component2/';
import NotFound from '../NotFound/';

import Icon from '../../assets/svgs/icon.svg';
import './style.scss';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="d-block p-3">
          <Icon width={32} height={32} fill="currentColor" className="fa mr-2" />
          React App
        </div>

        <NavLink to="/" className="mr-2">Go to first page</NavLink>
        <NavLink to="/2" className="mr-2">Go to second page</NavLink>

        <Routes>
          <Route index element={<Component />} />
          <Route path="/2" element={<Component2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
