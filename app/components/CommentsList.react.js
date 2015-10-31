// CommentsList.react.js

var Comment = require("./Comment.react");
var React = require('react');

var CommentsList = React.createClass({
  
  _processComments: function() {
    var comments = this.props.comments;
    var commentsArr = Object.keys(comments).map(function(key) {
      return comments[key];
    });
    
    commentsArr.sort(function(obj1, obj2) {
      if (obj1.timestamp > obj2.timestamp) return -1;
      if (obj1.timestamp < obj2.timestamp) return 1;
      return 0;
    });
    
    return commentsArr.map(function(comment) {
      return (
        <Comment 
          member_name={comment.member_name}
          comment={comment.comment}
          timestamp={comment.timestamp}
          key={comment.id}
        />  
      );
    });
  },
  
  render: function() {
    return <div>{this._processComments()}</div>;
  }
  
});

module.exports = CommentsList;