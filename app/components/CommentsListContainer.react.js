// CommentsListContainer.react.js

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
      return <div>Loading ... </div>;
    }
    
    return (
      <section>
        <h2>Comments</h2>
        <CommentsList comments={this.state.comments} />
      </section>  
    );
  },
  
  _onChange: function() {
    this.setState({
      comments: CommentsListStore.getAll()
    });
  },
  
  _onCommentsUpdate: function(data) {
    CommentsListActions.commentsLoaded(data)  
  },
});

module.exports = CommentsListContainer;