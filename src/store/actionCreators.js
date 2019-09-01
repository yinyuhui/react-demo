import { CHANGE_INPUT_VALUE, CHANGE_LIST, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionTypes'

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