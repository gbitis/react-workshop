// MembersListStore.js

var Constants = require("../constants/Constants")
var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var MemberListActions = require("../actions/MemberListActions");
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _members = {};
var _membersCount = 0;
var _membersTotalCount = 0;
var _nextPageUrl = Constants.rsvpApiUrl;

function _processData(data) {
  _membersCount += data.meta.count;
  _membersTotalCount = data.meta.total_count;
  _nextPageUrl = data.meta.next + "&callback=?";
  
  for (var memberIndex in data.results) {
    var member = data.results[memberIndex].member;
    _members[member.member_id] = {
      id: member.member_id,
      name: member.name
    };
  }
};

var MembersListStore = assign({}, EventEmitter.prototype, {
  getMembersPage: function() {
    var $this = this;
    $.getJSON(
      _nextPageUrl,
      function(data) {
        MemberListActions.batchLoaded(data);
      }
    );
  },
  
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

  /**
   * @param {string} id
   */
  get: function(id) {
    return _members[id];
  },

  getAll: function() {
    return _members;
  },
  
  isAllLoaded: function() {
    return _membersCount == _membersTotalCount;
  },
});

MembersListStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {
    case Constants.ActionTypes.MEMBERS_BATCH_LOADED:
      _processData(action.data);
      MembersListStore.emitChange();
      break;
      
    default:
      // do nothing
  }

});


module.exports = MembersListStore;