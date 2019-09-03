import React from 'react'
// import React, { Component } from 'react'
import { Button, Input, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{ padding: '20px' }}>
            <label htmlFor="input">请输入内容</label>
            <Input 
                id="input"
                value={ props.inputValue } 
                onChange={ (e) => props.handleInput(e) }
                style={{ width: 200, margin: '0 10px' }}
                placeholder="please input todo info"
            />
            <Button type="primary" onClick={ () => props.handleClick() }>提交</Button>
            <List
                bordered
                style={{ width: 500, marginTop: 20 }}
                dataSource={ props.list }
                renderItem={item => (
                    <List.Item onClick={ () => props.deleteItem(item) }>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoListUI

// export default class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ padding: '20px' }}>
//                 <label htmlFor="input">请输入内容</label>
//                 <Input 
//                     id="input"
//                     value={ this.props.inputValue } 
//                     onChange={ (e) => this.props.handleInput(e) }
//                     style={{ width: 200, margin: '0 10px' }}
//                     placeholder="please input todo info"
//                 />
//                 <Button type="primary" onClick={ () => this.props.handleClick() }>提交</Button>
//                 <List
//                     bordered
//                     style={{ width: 500, marginTop: 20 }}
//                     dataSource={ this.props.list }
//                     renderItem={item => (
//                         <List.Item onClick={ () => this.props.deleteItem(item) }>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }