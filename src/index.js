// Create a new Component This component should produce
// Some HTML
// Take this component's generated HTML and put it on the page (in the DOM).
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// To call youtube api
const API_KEY = 'AIzaSyBxKXkRq2r7Y-5qPUseTxNSTdrooSQ36GA'; // From chadaeli@chadaeli.com it made out.

// 이러한 JSX 방식의 단점은 복잡한 구조의 완성된 html 구조는 쉽게 파악하기 어렵다는 점이다.
// 기능중심으로는 훌륭한데 디자인을 하기에는 좀 어려울 수가 있다.
// 미리 디자인을 해서 HTML구도를 만들어놓을 후에 JSX형식으로 입혀야 하는 점이 번거로울 수가 있다.
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// };

const DEFAULTKEYWORD = 'twice';

class App extends Component {
	constructor(props){
		super(props);
		this.state = { videos: [], selectedVideo: null };
		
		this.videoSearch(DEFAULTKEYWORD);
	}
	
	
	videoSearch(term){
		if(!term){
			term = DEFAULTKEYWORD;
		}
		
		YTSearch({ key: API_KEY, term }, (videos) => {
			// console.log(videos);
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}
	
	render(){
		
		// 키입력 이후 검색 지연을 실행한다.
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
		}, 300);
		
		
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

// <App /> 이것이 클래스가 아니라 인스턴스화 하여 전달하는 것이다
ReactDOM.render(<App />, document.querySelector('.container'));