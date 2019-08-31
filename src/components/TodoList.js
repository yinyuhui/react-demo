import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import TodoItem from './TodoItem'
import axios from 'axios'
// import Mock from './components/Mock'
import '../mock/todolist.js'
import '../css/todoList.css'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [],
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
                    <TransitionGroup>
                        { this.renderTodoListItem() }
                    </TransitionGroup>
                </ul>
            </Fragment>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios.get('/api/todolist').then(res => {
            console.log(res.data.list)
            this.setState(() => ({
                list: [...res.data.list]
            }))
        })
    }

    renderTodoListItem() {
        return this.state.list.map((item, index) => {
            return <CSSTransition
                    timeout={1000}
                    classNames="fade"
                    appear={true}
                    key={index}
                    unmountOnExit>
                        <TodoItem 
                            key={index}
                            content={item} 
                            index={index} 
                            deleteItem={this.deleteItem.bind(this)}
                        />
                </CSSTransition>
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