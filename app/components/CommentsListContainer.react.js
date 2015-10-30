// CommentsListContainer.react.js

var CommentForm = require("./CommentForm.react");
var CommentsListActions = require ('../actions/CommentsListActions');
var CommentsList = require("./CommentsList.react");
var CommentsListStore = require('../stores/CommentsListStore');
var React = require('react');

var CommentsListContainer = React.createClass({
  
  render: function() {
    // To do: Implement CommentsListContainer component
    
    return (
      <section>
        <h2>Comments</h2>
      </section>  
    );
  },
});

module.exports = CommentsListContainer;