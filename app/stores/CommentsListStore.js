// CommentsListStore.js

var Constants = require("../constants/Constants")
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CommentsListStore = assign({}, EventEmitter.prototype, {
  
  // to do: implement CommentsListStore functionality
  
});

CommentsListStore.dispatchToken = Dispatcher.register(function(action) {

  // to do: handle actions for CommentsListStore

});


module.exports = CommentsListStore;