// CommentsListContainer.react.js
/* global io() */

var CommentForm = require("./CommentForm.react");
var CommentsListActions = require ('../actions/CommentsListActions');
var CommentsList = require("./CommentsList.react");
var CommentsListStore = require('../stores/CommentsListStore');
var React = require('react');

var CommentsListContainer = React.createClass({
  
  getInitialState: function() {
    return {
      comments: null,
    }
  },
  
  componentWillMount: function() {
    ReactHooks.getPosts();
  },
  
  componentDidMount: function() {
    CommentsListStore.addChangeListener(this._onChange);
    /* global ReactHooks */
    ReactHooks.callbackNewPost = this._onCommentsUpdate;
  },
  
  componentWillUnmount: function() {
    CommentsListStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    if (!this.state.comments) {
      return <div>Loading comments...</div>;
    }
    
    return (
      <section>
        <h2>Comments</h2>
        <CommentForm onSubmit={this._onSubmit} />
        <CommentsList comments={this.state.comments} />
      </section>  
    );
  },
  
  _onChange: function() {
    this.setState({
      comments: CommentsListStore.getAll(),
    });
  },
  
  _onSubmit: function(text) {
    CommentsListStore.postComment(text);
  },
  
  _onCommentsUpdate: function(comments) {
    CommentsListActions.commentsLoaded(comments);
  },
  
});

module.exports = CommentsListContainer;