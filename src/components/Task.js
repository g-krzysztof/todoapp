import React from 'react';
import '../css/Task.css';

const Task = (props) => {

    const importantRed = {
        color: 'red',
    }

    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {

        return (
            <div className="active__task">
                <div className="active__text" style={important ? importantRed : null}> {text}</div>
                do: <span style={{ paddingLeft: 10 }}>{date}</span>
                <button className="active__done-btn" onClick={() => props.change(id)}>Zrobione</button>
                <button className="active__delete-btn" onClick={() => props.delete(id)}>X</button>
            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div className="done__task">
                <div className="done__text">{text}</div>
                <div className="done__text-date">zrobione {finish}</div>
                <button className="done__delete-btn" onClick={() => props.delete(id)}>X</button>
            </div>
        )
    }
}

export default Task;