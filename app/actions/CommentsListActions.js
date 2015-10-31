var Constants = require("../constants/Constants");
var Dispatcher = require("../dispatcher/Dispatcher");

var ActionTypes = Constants.ActionTypes;

var CommentsListActions = {
  
  commentsLoaded: function(data) {
    Dispatcher.dispatch({
      type: ActionTypes.COMMENTS_LOADED,
      data,
    });
  }
  
};

module.exports = CommentsListActions;