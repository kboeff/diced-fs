/**
 * index.js
 */

const React = require('react');
const { render } = require('react-dom');

if (module.hot) {
    module.hot.accept();
}

const MainApp = () => {
    <h1>Hi, react</h1>
};

// render the app
render(<MainApp />, document.getElementById('app'));
