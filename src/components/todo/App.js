import React, { Component } from 'react';
import ToDoList from './ToDoList';
import axios from 'axios';
import _ from 'lodash';

export default class App extends Component {
	constructor(prop){
		super(prop);
		this.state = {
			lists : [],
			word : '',
			backupList : '',
			error: false
		};
		
		// ??
		this.SearchItem = this.SearchItem.bind(this);
	}
	
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then( res => {
				this.setState({
					lists : res.data,
					backupList : res.data
				});
			})
			.catch( error => {
				if (error.response) {
					// console.log(error.response.data);
					// console.log(error.response.status);
					// console.log(error.response.headers);
					this.setState({error:true});
				}
			});
	}
	
	
	SearchItem (word){
		this.setState({word});
		
		_.debounce((word) => {
			if(word === ''){
				this.setState({lists : this.state.backupList});
			}
			
			let newArray = this.state.backupList.filter((item) => {
				return (item.title.indexOf(word) !== -1);
			});
			
			this.setState({lists:newArray});
		}, 300)(word);
		
	};
	
	
	render(){
		
		return (
			<div>
				<h3>TODO List</h3>
				<input type="text"
				       placeholder="검색"
				       className="form-control"
				       autoFocus
				       value={this.state.word}
				       onChange={event => this.SearchItem(event.target.value)} />
				<ToDoList lists={this.state.lists} error={this.state.error} />
			</div>
		);
	}
}