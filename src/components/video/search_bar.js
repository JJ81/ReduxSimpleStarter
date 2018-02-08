import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term : '' };
		
		// console.log('SearchBar Props');
		// console.log(props);
	}
	
	render() {
		return (
			<div className="search-bar">
				<input
					className="form-control"
					placeholder="Insert title for searching youtube video"
					maxLength="20"
					// data-search-bar="loading data like this is possible"
					/** 상태정보를 초기에 동기화할 수가 있다. 그리고 변경된 정보를 동기화한다.  */
					value={this.state.term}
					/** 함수를 아래와 같이 작성할 수는 있지만 별도의 함수로 호출을 하게 될 경우 setState 함수는 부를 수가 없는데 어떻게 해야 하는가? */
					onChange={event => this.onInputChange(event.target.value)} /><br />
				<strong>keyword : {this.state.term}</strong>
			</div>
		);
	}
	
	// make method for user-event
	onInputChange(term) {
		this.setState({term});
		// props를 통해서 전달된 함수를 여기서 바인드 하게 된다.
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;