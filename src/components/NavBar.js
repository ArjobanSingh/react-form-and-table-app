import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import {connect} from 'react-redux'
import {openFormPage, openTablePage} from "../redux/actionCreators"

const NavBar = ({activePage, openFormPage, openTablePage}) => {

    const openForm = () => (openFormPage())
    const openTable = () => ( openTablePage())

    return (
        <div>
           <nav className="nav-Container">
                <div className={activePage.formPageOpened? 
                    "nav-item selected-title" :
                    "nav-item"}
                    onClick={openForm}>
                        <p className="title-text">
                             Form
                        </p>
                    
                </div>
                <div className={activePage.formPageOpened === false? 
                    "nav-item selected-title" :
                    "nav-item"}
                    onClick={openTable}>
                     <p className="title-text">
                        Table
                    </p>
                </div>
            </nav> 
        </div>
    );
};

NavBar.propTypes = {
    activePage: PropTypes.object.isRequired,
    openFormPage: PropTypes.func.isRequired,
    openTablePage: PropTypes.func.isRequired
};

const mapStateToProps = (state) =>{
    return {
        activePage: state.activePage
    }
}

const mapDispatchToProps = {openFormPage, openTablePage}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);