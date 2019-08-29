import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
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
                <span>请输入内容</span>
                <input value={ this.state.inputValue } onChange={ (e) => this.handleInput(e) } ></input>
                <button onClick={ () => this.handleClick() }>提交</button>
                <ul>
                    { this.renderTodoListItem() }
                </ul>
            </Fragment>
        )
    }

    renderTodoListItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem 
                key={index}
                content={item} 
                index={index} 
                deleteItem={this.deleteItem.bind(this)}
            />
        })
    }

    handleInput(e) {
        const value = e.target.value
        this.setState(() => ({'inputValue': value}))
    }

    handleClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    deleteItem(item) {
        this.setState((prevState) => ({
            list: prevState.list.filter(i => i !== item)
        }))
    }
}