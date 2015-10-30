// CommentsListStore.js

var CommentsListActions = require("../actions/CommentsListActions");
var Constants = require("../constants/Constants")
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var CommentsListStore = assign({}, EventEmitter.prototype, {
  // To do: Implement commentsListStore
  
});

CommentsListStore.dispatchToken = Dispatcher.register(function(action) {

  // To do: Handle actions

});


module.exports = CommentsListStore;