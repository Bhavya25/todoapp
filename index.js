import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './Components/main.jsx';

var taskList = ["Task 1", "Task 2"]; 

var task = localStorage.getItem('storedTasks');

if(task){
	taskList = JSON.parse(task);

}

ReactDOM.render(
	 <Todo  tasks ={taskList} />,
	document.getElementById('root')

	);