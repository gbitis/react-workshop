// MembersListContainer.react.js

var MembersList = require("./MemberList.react");
var MembersListStore = require('../stores/MembersListStore');
var React = require('react');

var MembersListContainer = React.createClass({
  getInitialState: function() {
    return {
      allLoaded: false,
      members: null,
    };
  },
  
  componentWillMount: function() {
    this._getNextMembersPage();
  },
  
  componentDidMount: function() {
    MembersListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    MembersListStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    if (!this.state.members && !this.state.isAllLoaded) {
      return <div>Loading ...</div>;
    }
    
    return (
      <section>
        <h2>Members</h2>
        <MembersList
          allLoaded={this.state.allLoaded}
          members={this.state.members}
          _getNextMembersPage={this._getNextMembersPage}
        />
      </section>
    );
  },
  
  _onChange: function() {
    this.setState({
      allLoaded: MembersListStore.isAllLoaded(),
      members: MembersListStore.getAll()
    })
  },
  
  _getNextMembersPage: function() {
    MembersListStore.getMembersPage();
  },
  
});


module.exports = MembersListContainer;