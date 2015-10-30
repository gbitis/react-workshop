// CommentsListContainer.react.js

var CommentsList = require("./CommentsList.react");
var CommentsListStore = require('../stores/CommentsListStore');
var React = require('react');

var CommentsListContainer = React.createClass({
  
  // to do: implement CommentsListContainer component
  
  render: function() {
    return (
      <div>
        <h2>Comments</h2>
        <CommentsList />
      </div>  
    );
  }
  
});

module.exports = CommentsListContainer;