import React, { Component } from 'react';
import SearchBar from './search_bar';

import VideoList from './video_list';
import VideoDetail from './video_detail';

import _ from 'lodash';
import YTSearch from 'youtube-api-search';

// To call youtube api
const API_KEY = 'AIzaSyBxKXkRq2r7Y-5qPUseTxNSTdrooSQ36GA'; // From chadaeli@chadaeli.com it made out.


const DEFAULTKEYWORD = 'twice';

export default class App extends Component {
	// 컴포넌트가 처음 만들어질 때 생성된다.
	// 이곳에서 기본 state 등을 지정할 수가 있다.
	constructor(props){
		super(props);
		
		// set state
		this.state = {
			videos: [],
			selectedVideo: null
		};
		
		// 처음에 데이터를 예약된 단어를 통해서 불러오게 된다.
		this.videoSearch(DEFAULTKEYWORD);
	}
	
	// 컴포넌트가 DOM위에 만들어지기 전에 실행된다.
	componentWillMount(){
		console.log('componentWillMount');
	}
	
	/**
	 * constructor -> componentWillMount -> render -> componentDidMount
	 */
	
	/**
	 *
	 * @param term
	 */
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
	
	
	// 컴포넌트가 랜더링된다.
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
	
	// REF. https://velopert.com/1130
	// 컴포넌트가 만들어지고, 첫 렌더링을 다 마친 후에 실행되는 메소드이다.
	// 이곳에서 JS 프레임워크를 연동하거나 Ajax처리 등을 넣을 수가 있다.
	componentDidMount(){
		console.log('componentDidMount');
	}
	
	// 컴포넌트가 prop을 새로 받았을 때 실행된다.
	// prop에 따라 state을 업데이트 해야 할 때 사용하면 유용하다.
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps');
	}
	
	// prop or state 변경시 랜더링을 다시 해야 하는지 결정하는 메서드
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');
		return true;
	}
	
	// 컴포넌트가 업데이트가 되지 전에 실행된다.
	componentWillUpdate(nextProps, nextState){
		console.log('componentWillUpdate');
	}
	
	// 컴포넌트가 랜더링을 다시 마친 후에 실행된다.
	componentDidUpdate(prevProps, prevState){
		console.log('componentDidUpdate');
	}
	
	// 컴포넌트가 DOM에서 사라진 후에 실행되는 메소드
	componentWillUnmount(){
		console.log("componentWillUnmount");
	}
	
}