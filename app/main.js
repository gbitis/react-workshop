// main.js

var MembersListContainer = require('./components/MembersListContainer.react')
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <div>
        <h1>React workshop - members</h1>
        <MembersListContainer />
    </div>,
    document.getElementById('container')
);