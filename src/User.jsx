import React from 'react';
import Task from './Task';

const User = ({ name, color, tasks, handleClickRight, handleClickLeft, handleAddTask }) => {
    return (
        <div style={{ marginRight: 25, width: '25%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: 'white', backgroundColor: color }}>
                {name}
            </div>
            {tasks.map((task, index) => (
                <Task
                    canGoLeft={name !== 'Winnie'}
                    canGoRight={name !== 'Thomas'}
                    task={task}
                    handleArrowClickRight={() => handleClickRight(index)}
                    handleArrowClickLeft={() => handleClickLeft(index)}
                />
            ))}
            <button onClick={() => handleAddTask(window.prompt('Add a task', ''))}>
                + Add Task
            </button>
        </div>
    );
};

export default User;
