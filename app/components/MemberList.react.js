var Member = require('./Member.react');
var React = require("react");

var MembersList = React.createClass({
  
  _processMembersList: function() {
    var membersList = this.props.members;
    var membersArr = Object.keys(membersList).map(function (key) { 
      return membersList[key]; 
    });
    
    membersArr.sort(function(obj1, obj2) {
      if (obj1.name.toUpperCase() < obj2.name.toUpperCase()) return -1;
      if (obj1.name.toUpperCase() > obj2.name.toUpperCase()) return 1;
      return 0;
    });
    
    return membersArr.map(function (member) {
      return (
        <Member 
          name={member.name} 
          response={member.response}
          key={member.id}
        />
      );
    });
  },
  
  render: function() {
    var loadMoreBtn = 
      this.props.allLoaded ? 
      null :
      <div 
        className="loadMoreBtn"
        onClick={this.props._getNextMembersPage}>
        Load more
      </div>;
      
    return (
      <div>
        <div className="membersList">
          {this._processMembersList()}
        </div>
        {loadMoreBtn}
      </div>
    );
  }
});

module.exports = MembersList;

