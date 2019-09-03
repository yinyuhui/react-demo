import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import '../mock/todolist.js'
import { connect } from 'react-redux'
import store from '../store'
import { getInputChangeAction, getInitList, getAddListItem, getDeleteListItem } from '../store/actionCreators'
import 'antd/dist/antd.css';
import '../css/todoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(() => this.handleStoreChange())
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.props.inputValue}
                list={this.props.list}
                handleClick={this.handleClick.bind(this)}
                handleInput={this.handleInput.bind(this)}
                deleteItem={this.deleteItem.bind(this)}
            />
        )
    }

    componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleInput(e) {
        // const value = e.target.value
        // store.dispatch(getInputChangeAction(value))
        this.props.changeInputValue(e)
    }

    handleClick() {
        this.props.handleBtnClick()
        // store.dispatch(getAddListItem())
    }

    deleteItem(item) {
        this.props.deleteListItem(item)
        // store.dispatch(getDeleteListItem(item))
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const value = e.target.value
            dispatch(getInputChangeAction(value))
        },
        handleBtnClick() {
            dispatch(getAddListItem())
        },
        deleteListItem(item) {
            store.dispatch(getDeleteListItem(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 