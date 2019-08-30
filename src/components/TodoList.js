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
                <input 
                        value={ this.state.inputValue } 
                        ref={(input) => this.input = input} 
                        onChange={ (e) => this.handleInput(e) }
                />
                {/* <input 
                        value={ this.state.inputValue } 
                        onChange={ (e) => this.handleInput(e) } 
                /> */}
                <button onClick={ () => this.handleClick() }>提交</button>
                <ul ref={(ul) => { this.ul = ul }}>
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
        // const value = e.target.value
        const value = this.input.value
        this.setState(() => ({'inputValue': value}))
    }

    handleClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    deleteItem(item) {
        this.setState((prevState) => ({
            list: prevState.list.filter(i => i !== item)
        }))
    }
}