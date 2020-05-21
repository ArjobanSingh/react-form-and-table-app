import React from 'react';
import PropTypes from 'prop-types';
import { MDBDataTableV5} from 'mdbreact';

const Table = (props) => {
    return (<MDBDataTableV5 hover entriesOptions={[5, 20, 25]} 
                entries={5} 
                pagesAmount={4} 
                data={props.data} 
                fullPagination 
                bordered
                searchTop 
                searchBottom={false} 
                pagingTop/>
    );
}

Table.propTypes = {
    
};

export default Table;

{/* <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                              }}>
                                  {column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}
                                style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                    background: 'papayawhip',
                                  }}>
                                      {cell.render("Cell")}</td>
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table> */}