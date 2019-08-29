import React, { Component } from 'react'
import '../css/todoList.css'

export default class TodoItem extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="list-item" onClick={ () => this.handleClick() }>{ this.props.content }</div>
        )
    }

    handleClick() {
        this.props.deleteItem(this.props.content)
    }
}