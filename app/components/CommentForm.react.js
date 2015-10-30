var React = require('react');

var CommentForm = React.createClass({
  
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.onSubmit}>
        <input type="text" placeholder="Say something..." ref="text"/>
        <input type="submit" value="Post" />
      </form>
    );  
  },
  
  onSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.text.value.trim();
    if (!text) {
      return;
    }
    
    this.refs.text.value = '';
    this.props.onSubmit(text);
  }
});

module.exports = CommentForm;