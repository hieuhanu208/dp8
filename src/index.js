import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';


const App = (props) => {
	console.log(props);
	return (
	<div className="ui container comments">
		<CommentDetail />
	</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'))


