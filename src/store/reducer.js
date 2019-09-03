import { CHANGE_INPUT_VALUE, CHANGE_LIST, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    const { type } = action

    switch(type) {
        case CHANGE_INPUT_VALUE: 
            newState.inputValue = action.value
            break
        case CHANGE_LIST:
            newState.list = action.value
            break
        case ADD_LIST_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            break
        case DELETE_LIST_ITEM: 
            // 若有重复值 则会删除所有项 此处有问题 可以暂时用 index 索引删除解决  最好用ID
            newState.list = newState.list.filter(item => item !== action.value)
            break
    }

    return newState
}
