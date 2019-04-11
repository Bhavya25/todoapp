import React from 'react';
import {AddNewTask} from './AddTask';
import {ToDoAppList} from './ToDoAppList';

export class Todo extends React.Component{
	constructor(props){
		super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
	}

	updateLocalStorage(taskList){
		console.log(taskList);
	  localStorage.setItem('storedTasks', JSON.stringify(taskList));
	}

	updateList(text){
		var updatedTask = this.state.tasks;
		updatedTask.unshift(text);
		this.setState({tasks: updatedTask});
		this.updateLocalStorage(updatedTask);
	}

	removeTask(text){
		var updatedTask = this.state.tasks;
		updatedTask.splice(updatedTask.indexOf(text),1);
		this.setState({tasks: updatedTask});
		this.updateLocalStorage(updatedTask);
	}

	

	render(){
		return(
			<div>
			<h1>ToDo App</h1>
			<AddNewTask updateList = {this.updateList} />
			<ToDoAppList tasks = {this.state.tasks} remove={this.removeTask} />
			</div>
		);
	}
}
