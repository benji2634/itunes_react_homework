var React = require('react');
var ReactDOM = require('react-dom');
var ItunesContainer = require('./containers/ItunesContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    <ItunesContainer />,
    document.getElementById('app')
  );
}
