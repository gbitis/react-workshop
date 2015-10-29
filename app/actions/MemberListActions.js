var Constants = require("../constants/Constants");
var Dispatcher = require("../dispatcher/Dispatcher");

var ActionTypes = Constants.ActionTypes;

var MemberListActions = {
  batchLoaded: function(data) {
    Dispatcher.dispatch({
      type: ActionTypes.MEMBERS_BATCH_LOADED,
      data,
    });
  },
};

module.exports = MemberListActions;