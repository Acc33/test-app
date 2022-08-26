"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 6587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ PageTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(2154);
// EXTERNAL MODULE: external "rc-table"
var external_rc_table_ = __webpack_require__(3345);
;// CONCATENATED MODULE: ./src/components/customer/ColumnFilter.js


const ColumnFilter = ({ column  })=>{
    const { filterValue , setFilter  } = column;
    return(/*#__PURE__*/ _jsxs("span", {
        children: [
            "Search: ",
            ' ',
            /*#__PURE__*/ _jsx("input", {
                value: filterValue || '',
                onChange: (e)=>setFilter(e.target.value)
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/customer/columns.js


const COLUMNS = [
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email_addr'
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender'
    },
    {
        Header: 'Registration Date',
        Footer: 'Registration Date',
        accessor: 'created_date'
    }, 
];
const GROUPED_COLUMNS = [
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
];

;// CONCATENATED MODULE: ./src/components/customer/CBX.js


const CBX = /*#__PURE__*/ external_react_default().forwardRef(({ indeterminate , ...rest }, ref)=>{
    const defaultRef = external_react_default().useRef();
    const resolvedRef = ref || defaultRef;
    external_react_default().useEffect(()=>{
        resolvedRef.current.indeterminate = indeterminate;
    }, [
        resolvedRef,
        indeterminate
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            type: "checkbox",
            ref: resolvedRef,
            ...rest
        })
    }));
});

;// CONCATENATED MODULE: ./src/components/customer/GlobalFilter.js


const GlobalFilter = ({ filter , setFilter  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        children: [
            "Search Participants: ",
            ' ',
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                value: filter || '',
                onChange: (e)=>setFilter(e.target.value)
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/customer/PageTable.js







const PageTable = (props)=>{
    console.log(props);
    const userData = props.patients.patients;
    userData.map((row)=>{
        row.created_date = row.created_date.slice(0, 10);
    });
    const mock_data = userData;
    const columns = (0,external_react_.useMemo)(()=>COLUMNS
    , []);
    const data = (0,external_react_.useMemo)(()=>mock_data
    , []);
    const router = (0,router_.useRouter)();
    function getDetails(firstname, lastname) {
        if (sessionStorage.getItem('currPatient') === null) {
            sessionStorage.setItem('currPatient', firstname);
        } else {
            sessionStorage.removeItem('currPatient');
            sessionStorage.setItem('currPatient', firstname);
        }
        const path = '/customers/' + firstname;
        router.push({
            pathname: path,
            query: {
                firstname,
                lastname
            }
        });
    }
    ;
    const { getTableProps , getTablebodyProps , headerGroups , page , nextPage , previousPage , canNextPage , canPreviousPage , prepareRow , pageOptions , state , setGlobalFilter , gotoPage , pageCount , setPageSize , selectedFlatRows , allColumns , getToggleHideAllColumnsProps  } = (0,external_react_table_.useTable)({
        columns,
        data,
        initialState: {
            pageIndex: 0
        }
    }, external_react_table_.useGlobalFilter, external_react_table_.useSortBy, external_react_table_.usePagination);
    console.log(page);
    const { pageIndex , pageSize: pageSize1 , globalFilter  } = state;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "filter",
                style: {
                    position: 'relative',
                    left: '800px'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(GlobalFilter, {
                    filter: globalFilter,
                    setFilter: setGlobalFilter
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            marginTop: '80px',
                            marginRight: '80px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CBX, {
                                        ...getToggleHideAllColumnsProps()
                                    }),
                                    " Toggle All"
                                ]
                            }),
                            allColumns.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "checkbox",
                                                ...column.getToggleHiddenProps()
                                            }),
                                            column.Header
                                        ]
                                    })
                                }, column.id)
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        ...getTableProps(),
                        id: "table",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                children: headerGroups.map((headerGroup)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                        ...headerGroup.getHeaderGroupProps(),
                                        children: headerGroup.headers.map((column)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("th", {
                                                ...column.getHeaderProps(column.getSortByToggleProps()),
                                                children: [
                                                    column.render('Header'),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: column.isSorted ? column.isSortedDesc ? '🔽' : '🔼' : ''
                                                    })
                                                ]
                                            }, column.id)
                                        )
                                    }, 1)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                ...getTablebodyProps,
                                children: page.map((row)=>{
                                    prepareRow(row);
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                        ...row.getRowProps(),
                                        onClick: ()=>getDetails(row.original.first_name, row.original.last_name)
                                        ,
                                        children: row.cells.map((cell)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                ...cell.getCellProps(),
                                                children: cell.render('Cell')
                                            }, cell.value));
                                        })
                                    }, row.id));
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: "50px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            style: {
                                marginRight: "40px"
                            },
                            children: [
                                "Page",
                                ' ',
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                    children: [
                                        pageIndex + 1,
                                        " of ",
                                        pageOptions.length
                                    ]
                                }),
                                ' '
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            style: {
                                marginRight: "40px"
                            },
                            children: [
                                "| Go to page: ",
                                ' ',
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "number",
                                    defaultValue: pageIndex + 1,
                                    onChange: (e)=>{
                                        const pagenumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                        gotoPage(pagenumber);
                                    },
                                    style: {
                                        width: '50px'
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            value: pageSize1,
                            onChange: (e)=>setPageSize(Number(e.target.value))
                            ,
                            style: {
                                marginRight: "40px"
                            },
                            children: [
                                10,
                                25,
                                50
                            ].map((pageSize)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("option", {
                                    value: pageSize,
                                    children: [
                                        "Show ",
                                        pageSize
                                    ]
                                }, pageSize)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>gotoPage(0)
                            ,
                            disabled: !canPreviousPage,
                            children: '<<'
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>previousPage()
                            ,
                            disabled: !canPreviousPage,
                            children: "Previous"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>nextPage()
                            ,
                            disabled: !canNextPage,
                            children: "Next"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>gotoPage(pageCount - 1)
                            ,
                            disabled: !canNextPage,
                            children: '>>'
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ })

};
;