import React from 'react';
import PropTypes from 'prop-types';
import {  MDBDataTable } from 'mdbreact';

const Table = (props) => {
    return (<MDBDataTable 
                hover 
                entriesOptions={[5, 20, 25]} 
                entries={5} 
                pagesAmount={4} 
                data={props.data} 
                bordered
            />
    );
}

Table.propTypes = {
    data: PropTypes.object.isRequired
};

export default Table;

