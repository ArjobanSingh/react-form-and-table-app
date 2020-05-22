import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table'

import {openFormPage} from "../redux/actionCreators"
import {connect} from 'react-redux'


const TablePage = props => {

    const tableData = {
        columns : [
            {
                label: 'Form Name',
                field: 'formName',
                sort: 'asc',
              },
              {
                label: 'UserName',
                field: 'nameVal',
                sort: 'asc',
              },
              {
                label: 'Phone Number',
                field: 'phoneVal',
                sort: 'asc'
              },
              {
                label: 'Email',
                field: 'emailVal',
                sort: 'asc',
              },
              {
                label: 'Service Rating',
                field: 'serviceRadioSelected',
                sort: 'asc',
              },
              {
                label: 'Bevarage Rating',
                field: 'bevarageRadioSelected',
                sort: 'asc',
              },
              {
                label: 'Cleaniness Rating',
                field: 'cleaninessRadioSelected',
                sort: 'asc',
                
              },
              {
                label: 'Overall Rating',
                field: 'overallRadioSelected',
                sort: 'asc',


              }
        ], 
        rows : props.savedData
    }

    return (
        <div className="TablePageContainer">
            {props.savedData.length >= 1 ?
            <div className="table-container">
                <Table data={tableData}/>
            </div>:
            <div className="no-data-div">
              <p><b>No data yet, Please fill the form</b></p>
              <button 
              class="my-btn"
              onClick={() => props.openFormPage()}>Go to Form</button>
            </div>}
        </div>
    );
};

TablePage.propTypes = {
    savedData: PropTypes.array,
    openFormPage: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        savedData : state.savedFromData
    }
} 

const mapDispatchToProps = {openFormPage}
export default connect(mapStateToProps, mapDispatchToProps)(TablePage);