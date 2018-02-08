import React, { Component } from 'react';


const ToDoList = (prop) => {
	
	if(!prop.lists){
		return (<li>Loading...</li>);
	}
	
	const item = prop.lists.map((list) => {
		return (
			<li key={list.id}>
				<a href="#">{list.title}</a>
			</li>
		);
	});
	
	return (
		<ul>{item}</ul>
	);
}

export default ToDoList;