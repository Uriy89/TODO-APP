import React from 'react'
import Task from '../Task/Task'
import './TaskList.css'


const TaskList = ({todos}) => {

    const elements = todos.map((item) => {
        const {id, ...itemsProps} = item
        return (
            <li className="completed" key={id}>
                <Task {...itemsProps}/>
            </li> 
        )
    })


    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList 