import  {OPEN_FORM_PAGE, OPEN_TABLE_PAGE} from './actions'

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

export {openFormPage, openTablePage}