//document.write("It works.");

var React = require('react');
var ReactDOM = require('react-dom');

// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );


ReactDOM.render(
  React.createElement('h1', {}, "Hello, world!"),
  document.getElementById('container')
);
