import React, { Component } from 'react';
import '../css/AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10)
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }

    handleDate = e => {
        this.setState({
            date: e.target.value
        })
    }

    handleText = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheck = e => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        const { text, date, checked } = this.state;
        if (text.length > 2) {

            const add = this.props.add(text, date, checked)
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        } else { console.log("zbyt krótka nazwa") }
    }

    render() {
        const maxDate = this.minDate.slice(0, 4) * 1 + 1 + `-12-31`;

        return (
            <>
                <div className="form">
                    <input className="form__input-task" type="text" placeholder="wpisz nowe zadanie..." value={this.state.text} onChange={this.handleText} />
                    <div className="form__priority">
                        <input className="form__priority-checkbox" type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheck} />
                        <label className="form__priority-text" htmlFor="important">zaznacz priorytet</label>
                    </div>
                    <div className="form__date">
                        <label className="form__date-text" htmlFor="date">do kiedy zrobić?</label>
                        <input className="form__date-picker" type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                    </div>
                    <button className="form__btn" onClick={this.handleClick}>Dodaj zadanie</button>

                </div>
                <hr className="hr" />
            </>
        );
    }
}

export default AddTask;