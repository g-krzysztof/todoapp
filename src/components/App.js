import React from 'react';
import '../css/App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component {
  state = {
    tasks: [
      { "id": "9117017221007238", "text": "przetestuj listę zadań", "date": "2020-10-02", "important": false, "active": true, "finishDate": null },
      { "id": "4165864470262548", "text": "wejdź na listę zadań", "date": "2019-10-02", "important": false, "active": false, "finishDate": 1570014946668 }
    ]
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({ tasks });
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({ tasks });
  }

  addTask = (text, date, important) => {
    const task = {
      id: text + Math.random(),
      text,
      date,
      important,
      active: true,
      finishDate: null
    }

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  componentDidMount() {
    let tasks = localStorage.getItem('storageTasks');
    let splitTasks = JSON.parse(tasks);
    if (splitTasks !== null) {
      this.setState({ tasks: splitTasks });
    }
  }

  componentDidUpdate() {
    let tasks = this.state.tasks;
    let storageTasks = JSON.stringify(tasks);
    localStorage.setItem('storageTasks', storageTasks);
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <h2 className="header__title">Dodaj zadanie do zrobienia</h2>
          <AddTask add={this.addTask} />
        </header>

        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;