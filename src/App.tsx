import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all');

    // const tasks2: Array<TaskType> = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]
    // const tasks3: Array<TaskType> = [
    //     { id: 1, title: "1", isDone: true },
    //     { id: 2, title: "2", isDone: false },
    //     { id: 3, title: "3", isDone: true }
    // ]

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="Book"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      />
            {/*<Todolist title='Music' tasks={tasks2} />*/}
            {/*<Todolist title='Notes' tasks={tasks3} />*/}
        </div>
    );
}

export default App;
