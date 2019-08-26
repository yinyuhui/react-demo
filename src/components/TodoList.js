import React, { Component, Fragment } from 'react'
import '../css/todoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [11,33],
        }
    }

    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={(e) => this.handleInput(e)} ></input>
                <button onClick={() => this.handleClick()}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={() => this.deleteItem(item)} className="list-item">{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInput(e) {
        this.setState({
            'inputValue': e.target.value
        })
    }

    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deleteItem(item) {
        let arr = this.state.list.filter(i => i !== item)
        console.log(this.state.list)
        this.setState({
            list: this.state.list.filter(i => i !== item)
        })
    }
}