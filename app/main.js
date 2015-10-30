// main.js

var CommentsListContainer = require('./components/CommentsListContainer.react')
var MembersListContainer = require('./components/MembersListContainer.react')
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <div>
        <h1>React workshop</h1>
        <MembersListContainer />
        <CommentsListContainer />
    </div>,
    document.getElementById('container')
);