import React, {useEffect, useMemo, useState} from 'react'
import {useTable, useSortBy,usePagination,useGlobalFilter} from 'react-table';
import {COLUMNS, GROUPED_COLUMNS} from './columns';
import { CBX } from './CBX';
import { GlobalFilter } from './GlobalFilter';
import { useRouter } from 'next/router';

export const PageTable = (props) => {
    console.log(props)
    const userData = props.patients.patients;
    userData.map(row => {
        row.created_date = row.created_date.slice(0,10);
    })
    const mock_data = userData;
    const columns = useMemo(() => COLUMNS,[]);
    const data = useMemo(() => mock_data,[]);

    const router = useRouter();

    function getDetails(firstname,lastname){
        if (sessionStorage.getItem('currPatient') === null){
            sessionStorage.setItem('currPatient',firstname);
        }else{
            sessionStorage.removeItem('currPatient');
            sessionStorage.setItem('currPatient',firstname);
        }
        const path = '/customers/' + firstname;
        router.push({
            pathname:path,
            query:{firstname,lastname}
        });
    };

    const {
        getTableProps,
        getTablebodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        pageOptions,
        state,
        setGlobalFilter,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows,
        allColumns,
        getToggleHideAllColumnsProps

    } = useTable(
        {
            columns,
            data,
            initialState: {pageIndex:0}
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
    )
    
    console.log(page)
    const {pageIndex, pageSize, globalFilter} = state;
    return (
        <>
            <div className='filter' style={{position:'relative', left:'800px'}}>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{marginTop: '80px', marginRight: '80px'}}>
                    <div>
                        <CBX {...getToggleHideAllColumnsProps()} /> Toggle All
                    </div>
                    {
                        allColumns.map(column => (
                            <div key={column.id}>
                                <label>
                                    <input type='checkbox' {...column.getToggleHiddenProps()} />
                                    {column.Header}
                                </label>
                            </div>
                        ))
                    } 
                </div>
                <table {...getTableProps()} id="table">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr key={1}{...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼'): ''}
                                            </span>
                                        </th>
                                    ))
                                }      
                            </tr>
                        ))}                
                    </thead>
                    <tbody {...getTablebodyProps}>
                        {
                            page.map(row => {
                                prepareRow(row)
                                return (
                                    <tr key={row.id}{...row.getRowProps()} onClick={() => getDetails(row.original.first_name,row.original.last_name)}>
                                        {row.cells.map((cell) => {
                                            return <td key={cell.value} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', marginTop:"50px"}}>
                <div>
                    <span style={{marginRight:"40px"}}>
                        Page{' '}
                        <strong>
                            {pageIndex+1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <span style={{marginRight:"40px"}}>
                        | Go to page: {' '}
                        <input type='number' defaultValue = {pageIndex+1}
                        onChange={e => {
                            const pagenumber = e.target.value ? Number(e.target.value)-1 : 0;
                            gotoPage(pagenumber);
                        }}
                        style={{width:'50px'}} />
                    </span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} style={{marginRight:"40px"}}>
                        {
                            [10,25,50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))
                        }
                    </select>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                    <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
                </div>
            </div>
        </>
    )
    
}
