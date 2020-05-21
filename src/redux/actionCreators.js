import  {OPEN_FORM_PAGE, OPEN_TABLE_PAGE, SAVE_FORM_DATA, RESET_FORM_HISTORY} from './actions'

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
    // console.log("saved data", data)
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
export {openFormPage, openTablePage, saveFormData, resetData}