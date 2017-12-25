// { Component } => React.Component
import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input className="form-control" />
// };

// 위의 것을 클래스 형식으로 변경할 수가 있다
class SearchBar extends Component {
	constructor(props){
		super(props);
		
		// 상태 정보를 이런 식으로 저장한다. 이게 여기 있는 이유는 자신이 스스로 데이터를 참조하기 위해서이다.
		this.state = { term : '' };
	}
	
	render() {
		return ( /** 이와 같이 괄호를 사용하면 아래와 같이 좀 더 안정된 구조로 마크업을 작성할 수가 있다. */
			<div className="search-bar">
				<input
					className="form-control"
					placeholder="Insert title for searching youtube video"
					maxLength="20"
					/** 이와 같이 data- 를 사용하여 데이터를 실을 수가 있는데 꺼내다 쓰는 방식은 알아봐야 한다. 사실 이런 방식이 필요없을 수도 있다 */
					data-search-bar="loading data like this is possible"
					/** 상태정보를 초기에 동기화할 수가 있다. 그리고 변경된 정보를 동기화한다.  */
					value={this.state.term}
					/** 함수를 아래와 같이 작성할 수는 있지만 별도의 함수로 호출을 하게 될 경우 setState 함수는 부를 수가 없는데 어떻게 해야 하는가? */
					onChange={event => this.onInputChange(event.target.value)} />
				Value of the input : {this.state.term}
			</div>
		);
	}
	
	// TODO 아래와 같은 메서드를 사용할 경우 state 데이터에 접근할 수 있는 방법을 알아봐야 한다.
	// make method for user-event
	onInputChange(term) {
		this.setState({term});
		// props를 통해서 전달된 함수를 호출할 수가 있다.
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;