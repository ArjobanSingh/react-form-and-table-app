import React from 'react';
import PropTypes from 'prop-types';
import { MDBDataTableV5} from 'mdbreact';

const Table = (props) => {
    return (<MDBDataTableV5 
                hover 
                entriesOptions={[5, 20, 25]} 
                entries={5} 
                pagesAmount={4} 
                data={props.data} 
                fullPagination 
                bordered
                searchTop 
                searchBottom={false} 
                pagingTop
            />
    );
}

Table.propTypes = {
    
};

export default Table;

