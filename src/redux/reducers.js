import { combineReducers } from 'redux'

import {OPEN_FORM_PAGE, OPEN_TABLE_PAGE} from './actions'

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

export default combineReducers({
    activePage,
})