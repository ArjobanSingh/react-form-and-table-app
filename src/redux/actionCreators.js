import  {
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
            SET_VALUES_TO_DEFAULT } from './actions'


const resetVals = () => {
    return {
        type: SET_VALUES_TO_DEFAULT
    }
}        
const phoneVal = (val) => {
    return {
        type: PHONE_VAL,
        payload : {
            val
        }
    }
}

const emailVal = (val) => {
    return {
        type: EMAIL_VAL,
        payload : {
            val
        }
    }
}
const serviceVal = (val) => {
    return {
        type: SERVICE_VAL,
        payload : {
            val
        }
    }
}
const beverageVal = (val) => {
    return {
        type: BEVERAGE_VAL,
        payload : {
            val
        }
    }
}
const cleaninessVal = (val) => {
    return {
        type: CLEANINESS_VAL,
        payload : {
            val
        }
    }
}
const overallVal = (val) => {
    return {
        type: OVERALL_VAL,
        payload : {
            val
        }
    }
}


const openFormPage = () => {
    return {
        type : OPEN_FORM_PAGE
    }
}

const openTablePage = () => {
    return {
        type : OPEN_TABLE_PAGE
    }
}

const saveFormData = (data) => {
    return {
        type : SAVE_FORM_DATA,
        payload: {
            data
        }
    }
}

const resetData = () => {
    return {
        type : RESET_FORM_HISTORY
    }
}

const nameVal = (val) => {
    return {
        type: NAME_VAL,
        payload : {
            val
        }
    }
}
export {
        openFormPage, 
        openTablePage, 
        saveFormData, 
        resetData, 
        nameVal,
        emailVal, 
        phoneVal, 
        serviceVal, 
        beverageVal, 
        cleaninessVal,
        overallVal, 
        resetVals}