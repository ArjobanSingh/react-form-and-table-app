import { combineReducers } from 'redux'

import {OPEN_FORM_PAGE, OPEN_TABLE_PAGE, SAVE_FORM_DATA, RESET_FORM_HISTORY} from './actions'

function activePage(state = {formPageOpened: true}, action) {
    switch(action.type) {
        case OPEN_FORM_PAGE:
            return {formPageOpened: true}
        case OPEN_TABLE_PAGE:
            return {formPageOpened: false}
        default:
            return state;        
    }
}

function savedFromData(state =  [], action) {
   
    switch(action.type) {
        case SAVE_FORM_DATA:
            console.log("saved data in state", action.payload.data)
            return [...state, action.payload.data]
        case RESET_FORM_HISTORY:
            return []
        default:
            return state    
    }
}

export default combineReducers({
    activePage,
    savedFromData
})