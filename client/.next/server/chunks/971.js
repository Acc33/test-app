"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 2971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ details_PageDataTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-data-table-component"
var external_react_data_table_component_ = __webpack_require__(2583);
var external_react_data_table_component_default = /*#__PURE__*/__webpack_require__.n(external_react_data_table_component_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/customer/details/Button.js



const ButtonStyle = (external_styled_components_default()).button`
	background-color: #2979ff;
	border: none;
	color: white;
	padding: 8px 32px 8px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 3px;
	&:hover {
		cursor: pointer;
	}
`;
// eslint-disable-next-line react/prop-types
/* harmony default export */ const Button = (({ children , ...rest })=>/*#__PURE__*/ jsx_runtime_.jsx(ButtonStyle, {
        ...rest,
        children: children
    }));

;// CONCATENATED MODULE: ./src/components/customer/details/PageDataTable.js





const TextField = (external_styled_components_default()).input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;
const ClearButton = external_styled_components_default()(Button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FilterComponent = ({ filterText , onFilter , onClear , placeHolderText  })=>{
    const holderText = 'Filter by ' + placeHolderText;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TextField, {
                id: "search",
                type: "text",
                placeholder: holderText,
                "aria-label": "Search Input",
                value: filterText,
                onChange: onFilter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ClearButton, {
                type: "button",
                onClick: onClear,
                children: "X"
            })
        ]
    }));
};
const PageDataTable = (props)=>{
    const columns = props.cols;
    const data = props.data;
    const check = props.pagination;
    const filterCol = props.filterCol;
    const placeHolderText = props.placeHolderText;
    const { 0: filterText , 1: setFilterText  } = (0,external_react_.useState)('');
    const { 0: resetPaginationToggle , 1: setResetPaginationToggle  } = (0,external_react_.useState)(false);
    const filteredItems = data.filter((item)=>item[filterCol] && item[filterCol].toLowerCase().includes(filterText.toLowerCase())
    );
    const subHeaderComponentMemo = (0,external_react_.useMemo)(()=>{
        const handleClear = ()=>{
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };
        return(/*#__PURE__*/ jsx_runtime_.jsx(FilterComponent, {
            onFilter: (e)=>setFilterText(e.target.value)
            ,
            onClear: handleClear,
            filterText: filterText,
            placeHolderText: placeHolderText
        }));
    }, [
        filterText,
        resetPaginationToggle
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_data_table_component_default()), {
        title: props.title,
        columns: columns,
        data: filteredItems,
        paginationResetDefaultPage: resetPaginationToggle,
        subHeader: true,
        pagination: check,
        subHeaderComponent: subHeaderComponentMemo,
        persistTableHead: true
    }));
};
/* harmony default export */ const details_PageDataTable = (PageDataTable);


/***/ })

};
;