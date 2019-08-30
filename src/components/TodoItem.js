import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/todoList.css'

export default class TodoItem extends Component {
    constructor() {
        super()
        this.state = {}
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

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
}

TodoItem.defaultProps = {
    content: 'hello'
}