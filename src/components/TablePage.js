import React, {useMemo, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Table from './Table'
import data from './raw-data'

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
                label: 'TextField',
                field: 'textVal',
                sort: 'asc',
              },
              {
                label: 'Phone Number',
                field: 'phoneVal',
                sort: 'asc',
              },
              {
                label: 'UserName',
                field: 'nameVal',
                sort: 'asc',
              },
              {
                label: 'Email',
                field: 'emailVal',
                sort: 'asc',
              },
              {
                label: 'Service Rating',
                field: 'serviceRadioSelected',
                sort: 'desc',
              },
              {
                label: 'Bevarage Rating',
                field: 'bevarageRadioSelected',
                sort: 'desc',
              },
              {
                label: 'Cleaniness Rating',
                field: 'cleaninessRadioSelected',
                sort: 'desc',
                
              },
              {
                label: 'Overall Rating',
                field: 'overallRadioSelected',
                sort: 'desc',


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
            <div>No data yet</div>}
        </div>
    );
};

TablePage.propTypes = {
    
};

const mapStateToProps = (state) => {
    return {
        savedData : state.savedFromData
    }
} 
export default connect(mapStateToProps)(TablePage);