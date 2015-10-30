var React = require("react");

var Members = React.createClass({
  render: function() {
    return (
      <div className="member">
        {this.props.name}
        <span className={this.props.response}>{this.props.response}</span>
      </div>
    );
  }
});

module.exports = Members;