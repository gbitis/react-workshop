// CommentsListStore.js

var CommentsListActions = require("../actions/CommentsListActions");
var Constants = require("../constants/Constants")
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _comments = {};

function _processData(data) {
  data = JSON.parse(data);
  for (var commentIndex in data.results) {
    var comment = data.results[commentIndex];
    _comments[comment.event_comment_id] = {
      id: comment.event_comment_id,
      member_name: comment.member_name,
      timestamp: comment.time,
      comment: comment.comment,
    }
  }
}

var CommentsListStore = assign({}, EventEmitter.prototype, {
  // To do: Implement commentsListStore
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
  getAll: function() {
    return _comments;
  },
  
  
});

CommentsListStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {
    
    case Constants.ActionTypes.COMMENTS_LOADED:
      _processData(action.data);
      CommentsListStore.emitChange();
      break;
      
    default:
      // do nothing
  }

});


module.exports = CommentsListStore;