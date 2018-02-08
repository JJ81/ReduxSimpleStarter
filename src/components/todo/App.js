import React, { Component } from 'react';
import ToDoList from './ToDoList';
import axios from 'axios';

export default class App extends Component {
	constructor(prop){
		super(prop);
		this.state = {
			lists : []
		};
	}
	
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then( res => {
				this.setState({lists:res.data});
			})
			.catch( err => {
				console.error(err);
			});
	}
	
	render(){
		return (
			<div>
				<h3>TODO List</h3>
				<ToDoList lists={this.state.lists} />
			</div>
		);
	}
}