import React, { Component } from 'react';
import ToDoList from './ToDoList';
import axios from 'axios';

export default class App extends Component {
	constructor(prop){
		super(prop);
		this.state = {
			lists : [],
			error: false
		};
	}
	
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then( res => {
				this.setState({lists:res.data});
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
	
	render(){
		return (
			<div>
				<h3>TODO List</h3>
				<ToDoList lists={this.state.lists} error={this.state.error} />
			</div>
		);
	}
}