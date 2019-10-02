import React from 'react';
import Task from './Task'
import '../css/TaskList.css';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active)

    active.sort((a, b) => {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
    })


    const done = props.tasks.filter(task => !task.active)

    done.sort((a, b) => b.finishDate - a.finishDate)

    const activeTasks = active.map(task => <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change} />)

    const doneTasks = done.map(task => <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change} />)

    return (
        <>
            <section className="active">
                <h2 className="active__title">Zadania do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks : <h2 className="active__title">brak zadań</h2>}

            </section>

            <section className="done">
                <h2 className="done__title" >Zadania zrobione ({done.length})</h2>
                {done.length > 5 && <span>wyświetlane jest 5 ostatnich zadań</span>}
                {doneTasks.slice(0, 5)}
            </section>
        </>
    );
}

export default TaskList;