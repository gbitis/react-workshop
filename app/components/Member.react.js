var React = require("react");

var Members = React.createClass({
  render: function() {
    return <li>{this.props.name}</li>;
  }
});

module.exports = Members;