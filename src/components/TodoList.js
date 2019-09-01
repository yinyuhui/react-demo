import React, { Component } from 'react'
import axios from 'axios'
import { Button, Input, List } from 'antd'
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
            <div style={{ padding: '20px' }}>
                <label htmlFor="input">请输入内容</label>
                <Input 
                    id="input"
                    value={ this.state.inputValue } 
                    onChange={ (e) => this.handleInput(e) }
                    style={{ width: 200, margin: '0 10px' }}
                    placeholder="please input todo info"
                />
                <Button type="primary" onClick={ () => this.handleClick() }>提交</Button>
                <List
                    bordered
                    style={{ width: 500, marginTop: 20 }}
                    dataSource={ this.state.list }
                    renderItem={item => (
                        <List.Item onClick={ () => this.deleteItem(item) }>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
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