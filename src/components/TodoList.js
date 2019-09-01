import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import axios from 'axios'
import 'antd/dist/antd.css';
import '../css/todoList.css'
import '../mock/todolist.js'
import store from '../store'
import { getInputChangeAction, getChangeList, getAddListItem, getDeleteListItem } from '../store/actionCreators'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(() => this.handleStoreChange())
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleClick={this.handleClick.bind(this)}
                handleInput={this.handleInput.bind(this)}
                deleteItem={this.deleteItem.bind(this)}
            />
        )
    }

    componentDidMount() {
        axios.get('/api/todolist').then(res => {
            store.dispatch(getChangeList([...res.data.list]))
        })
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleInput(e) {
        const value = e.target.value
        store.dispatch(getInputChangeAction(value))
    }

    handleClick() {
        store.dispatch(getAddListItem())
    }

    deleteItem(item) {
        store.dispatch(getDeleteListItem(item))
    }
}