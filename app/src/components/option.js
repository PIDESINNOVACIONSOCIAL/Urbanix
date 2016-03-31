'use strict';

const React = require('react');

const OptionCheck = React.createClass({
  render: function () {
    return <option>{this.props.name}</option>;
  }
});

module.exports = OptionCheck;
