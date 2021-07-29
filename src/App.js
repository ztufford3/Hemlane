import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const [users, setUsers] = useState([
    {
      name: 'Winnie',
      color: 'purple',
      tasks: ['buy eggs', 'buy milk'],
    },
    {
      name: 'Brad',
      color: 'blue',
      tasks: ['buy meat', 'buy vegi'],
    },
    {
      name: 'Bob',
      color: 'black',
      tasks: ['buy eggs', 'buy apples'],
    },
    {
      name: 'Thomas',
      color: 'orange',
      tasks: ['buy ham', 'buy bananas'],
    },
  ]);

  const handleAddTask = (task, currentUser) => {
    if (!task) return;
    setUsers(users.map((user) => {
      if (user.name === currentUser.name) {
        let newTaskArr = user.tasks;
        newTaskArr.push(task);
        return { ...user, tasks: newTaskArr }
       } else {
        return user;
      }
    }));
  };

  const handleClick = (isLeft, indexOfUser, indexOfTask) => {
    const currentUser = users[indexOfUser];
    const nextUser = users[isLeft ? indexOfUser - 1 : indexOfUser + 1];

    let currentUserTasks = currentUser.tasks;
    let nextUserTasks = nextUser.tasks;

    const taskToMove = currentUserTasks[indexOfTask];

    const stuffHasToMove = nextUserTasks.length >= indexOfTask;

    if (!stuffHasToMove) {
      nextUserTasks.push(taskToMove);
    } else {
      nextUserTasks.splice(indexOfTask, 0, taskToMove);
    }

    currentUserTasks.splice(indexOfTask, 1);

    

    setUsers(users.map((user) => {
      if (user.name === currentUser.name) {
        return { ...user, tasks: currentUserTasks };
      } else if (user.name === nextUser.name) {
        return { ...user, tasks: nextUserTasks };
      } else {
        return user;
      }
    }));
  };

  return (
    <div className="App" style={{ display: 'flex', width: '100%', paddingLeft: 25, boxSizing: 'border-box' }}>
      {users.map((user, index) => (
        <User
          name={user.name}
          tasks={user.tasks}
          color={user.color}
          handleClickLeft={(indexOfTask) => handleClick(true, index, indexOfTask)}
          handleClickRight={(indexOfTask) => handleClick(false, index, indexOfTask)}
          handleAddTask={(task) => handleAddTask(task, user)}
        />
      ))}
    </div>
  );
}

export default App;
