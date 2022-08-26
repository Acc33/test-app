import { Column } from "rc-table"
import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
    
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email_addr',
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
    },
    {
        Header: 'Registration Date',
        Footer: 'Registration Date',
        accessor: 'created_date',
    },
    
]

export const GROUPED_COLUMNS = [
    {
        Header: 'ID',
        Footer: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Email',
                Footer: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Gender',
                Footer: 'Gender',
                accessor: 'gender'
            },
            {
                Header: 'Registration Date',
                Footer: 'Registration Date',
                accessor: 'registration_date'
            },
            {
                Header: 'Age',
                Footer: 'Age',
                accessor: 'age'
            }
        ]
    }
]