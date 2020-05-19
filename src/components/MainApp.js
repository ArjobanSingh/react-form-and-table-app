import React from 'react';
import PropTypes from 'prop-types';

import FormPage from "./FormPage"
import TablePage from "./TablePage"
import NavBar from "./NavBar"

import { connect } from 'react-redux'

const MainApp = ({activePage}) => {
    return (
        <div>
            <NavBar />
            {activePage.formPageOpened?
                <FormPage /> :
                <TablePage />
            }

        </div>
    );
};

MainApp.propTypes = {
    activePage: PropTypes.object.isRequired,
    openFormPage: PropTypes.func.isRequired,
    openTablePage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        activePage: state.activePage
    }
}



export default connect(mapStateToProps)(MainApp);