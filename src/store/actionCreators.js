import { CHANGE_INPUT_VALUE, CHANGE_LIST, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
})

export const getChangeList = (value) => ({
    type: CHANGE_LIST,
    value,
})

export const getAddListItem = () => ({
    type: ADD_LIST_ITEM,
})

export const getDeleteListItem = (value) => ({
    type: DELETE_LIST_ITEM,
    value,
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist').then(res => {
            dispatch(getChangeList([...res.data.list]))
        }).catch(e => {
            console.log(e)
        })
    }
}

export const getInitList = (value) => ({
    type: INIT_LIST,
})
