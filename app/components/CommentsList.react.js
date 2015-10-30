// CommentsList.react.js

var Comment = require("./Comment.react");
var React = require('react');

var CommentsList = React.createClass({
  
  _processCommentsList: function() {
    var commentsList = this.props.comments;
    var commentsArr = Object.keys(commentsList).map(function(key) {
      return commentsList[key];
    });
    
    commentsArr.sort(function(obj1, obj2) {
      if (obj1.timestamp > obj2.timestamp) return -1;
      if (obj1.timestamp < obj2.timestamp) return 1;
      return 0;
    })
    
    return commentsArr.map(function(comment){
      return (
        <Comment 
          comment={comment.comment}
          timestamp={comment.timestamp}
          member_name={comment.member_name}
          key={comment.id}
        />
      );
    })
  },
  
  render: function() {
    return (
      <div>
        {this._processCommentsList()}
      </div>
    );
  }
  
});

module.exports = CommentsList;