import { CHANGE_INPUT_VALUE, CHANGE_LIST, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))

    if(action.type === CHANGE_INPUT_VALUE) {
        newState.inputValue = action.value
    }

    if(action.type === CHANGE_LIST) {
        newState.list = action.value
    }

    if(action.type === ADD_LIST_ITEM) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
    }

    if(action.type === DELETE_LIST_ITEM) {
        // 若有重复值 则会删除所有项 此处有问题 可以用 index 索引删除解决
        newState.list = newState.list.filter(item => item !== action.value)
    }

    return newState
}
