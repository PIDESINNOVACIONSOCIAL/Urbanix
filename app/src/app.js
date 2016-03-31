'use strict';

/*!
 * Modules and dependencies
 */

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const hashHistory = require('react-router').hashHistory;

/*!
 * Components
 */

const Login = require('./components/login');
const CheckBox = require('./components/checkbox');

/*!
 * Mounting the app
 */

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Login} />
    <Route path='/check' component={CheckBox} />
  </Router>,
  document.querySelector('#app')
);
