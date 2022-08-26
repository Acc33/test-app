import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import Button from './Button';



const TextField = styled.input`
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

const ClearButton = styled(Button)`
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


const FilterComponent = ({ filterText, onFilter, onClear, placeHolderText}) => {
	const holderText = 'Filter by '+placeHolderText;
	return(
		<>
			<TextField
				id="search"
				type="text"
				placeholder={holderText}
				aria-label="Search Input"
				value={filterText}
				onChange={onFilter}
			/>
			<ClearButton type="button" onClick={onClear}>
				X
			</ClearButton>
		</>
	)
};
const PageDataTable = (props) => {
    const columns = props.cols;
    const data = props.data;
	const check = props.pagination;
	const filterCol = props.filterCol;
	const placeHolderText = props.placeHolderText;
    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		item => item[filterCol] && item[filterCol].toLowerCase().includes(filterText.toLowerCase()),
	);
	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} placeHolderText={placeHolderText}/>
		);
	}, [filterText, resetPaginationToggle]);
    
    return (
        <DataTable
			title={props.title}
			columns={columns}
			data={filteredItems}
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			pagination={check}
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
		/>
  )
}

export default PageDataTable