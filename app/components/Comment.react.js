// Comment.react.js

var React = require('react');

var Comment = React.createClass({
  
  render: function() {
    var time = new Date(this.props.timestamp);
    
    return (
      <div className="commentSection">
        <span className="commentAuthor">{this.props.member_name}</span>
        <span className="commentTime">{time.toLocaleString()}</span>
        <div className="commentText">{this.props.comment}</div>
      </div>
    );
  }
  
});

module.exports = Comment;