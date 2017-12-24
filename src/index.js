// Create a new Component This component should produce
// Some HTML
// Take this component's generated HTML and put it on the page (in the DOM).

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return <div>Hello React!</div>;
};

// <App /> 이것이 클래스가 아니라 인스턴스화 하여 전달하는 것이다
ReactDOM.render(<App />, document.querySelector('.container'));
