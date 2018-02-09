import React, { Component } from 'react';


const ToDoList = (prop) => {
	
	if(prop.error){
		return <div>ERROR!</div>;
	}
	
	if(prop.lists.length === 0){
		return (
			<ul>
				<li>Loading...</li>
			</ul>
		);
	}
	
	const item = prop.lists.map((list) => {
		return (
			<li key={list.id}>
				<a href="#">
					<strong>{list.title}</strong>
					{/*<span>{list.userId}</span><br />*/}
					{/*<span>{list.completed.toString()}</span>*/}
				</a>
			</li>
		);
	});
	
	return (
		<ul>{item}</ul>
	);
}

export default ToDoList;