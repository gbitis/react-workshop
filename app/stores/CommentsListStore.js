// CommentsListStore.js

var CommentsListActions = require("../actions/CommentsListActions");
var Constants = require("../constants/Constants")
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _comments = {};
var _commentsCount = 0;
var _commentsTotalCount = 0;
var _nextURL = '';

function _invalidate() {
  _comments = {};
  _commentsCount = 0;
  _commentsTotalCount = 0;
}

function _processData(data) {
  _invalidate();
  data = JSON.parse(data);
  
  _commentsCount = data.meta.count;
  _commentsTotalCount = data.meta.total_count;
  
  for (var commentIndex in data.results) {
    var comment = data.results[commentIndex];
    _comments[comment.event_comment_id] = {
      id: comment.event_comment_id,
      member_name: comment.member_name,
      timestamp: comment.time,
      comment: comment.comment,
    };
  }
};

var CommentsListStore = assign({}, EventEmitter.prototype, {
  getComments: function() {
    $.getJSON(
      Constants.commentsApiUrl,
      function(data) {
        CommentsListActions.commentsLoaded(data);
      }
    );
  },
  
  postComment: function(comment) {
    $.ajax({
      url:Constants.commentPostApiUrl,
      type: "POST",
      crossDomain: true,
      data: {
        comment: comment,
        event_id: Constants.eventID,
        key: Constants.apiKey,
        notifications: 'off',
      }
    }).done(function(data) {
        console.log('success', data)
      }
    );
  },
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
  /**
   * @param {string} id
   */
  get: function(id) {
    return _comments[id];
  },

  getAll: function() {
    return _comments;
  },
  
  isAllLoaded: function() {
    return _commentsCount == _commentsTotalCount;
  },
  
});

CommentsListStore.dispatchToken = Dispatcher.register(function(action) {

  switch (action.type) {
    case Constants.ActionTypes.COMMENTS_LOADED:
      _processData(action.data);
      CommentsListStore.emitChange();
      break;
      
    default:
      // do nothing
  }

});


module.exports = CommentsListStore;