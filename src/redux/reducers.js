import { combineReducers } from 'redux'

import {
        OPEN_FORM_PAGE, 
        OPEN_TABLE_PAGE, 
        SAVE_FORM_DATA, 
        RESET_FORM_HISTORY,
        NAME_VAL, 
        PHONE_VAL, 
        EMAIL_VAL, 
        SERVICE_VAL, 
        BEVERAGE_VAL,
        CLEANINESS_VAL, 
        OVERALL_VAL, 
        SET_VALUES_TO_DEFAULT} from './actions'


const temoraryValState = {
    name:"",
    emailVal:"",
    phoneVal:"",
    bevarageRadioSelected: "Excellent",
    cleaninessRadioSelected: "Excellent",
    serviceRadioSelected: "Excellent",
    overallRadioSelected: "Excellent"
}    

const temporaryValues = (state = temoraryValState, action) => {
    switch (action.type) {
        case NAME_VAL:
            return {...state, name: action.payload.val}
        case PHONE_VAL:
            return {...state, phoneVal: action.payload.val}
        case EMAIL_VAL:
            return {...state, emailVal: action.payload.val}  
        case SERVICE_VAL:
            return {...state, serviceRadioSelected: action.payload.val} 
        case BEVERAGE_VAL:
            return {...state, bevarageRadioSelected: action.payload.val} 
        case CLEANINESS_VAL:
            return {...state, cleaninessRadioSelected: action.payload.val} 
        case OVERALL_VAL:
            return {...state, overallRadioSelected: action.payload.val} 
        case SET_VALUES_TO_DEFAULT:
            return {
                    name:"",
                    emailVal:"",
                    phoneVal:"",
                    bevarageRadioSelected: "Excellent",
                    cleaninessRadioSelected: "Excellent",
                    serviceRadioSelected: "Excellent",
                    overallRadioSelected: "Excellent"
                }               
        default:
            return state    
    }
}    

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
            return [action.payload.data, ...state]
        case RESET_FORM_HISTORY:
            return []
        default:
            return state    
    }
}

export default combineReducers({
    activePage,
    savedFromData,
    temporaryValues
})