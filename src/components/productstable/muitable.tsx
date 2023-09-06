import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "react-bootstrap";
import { useProductProvider } from '../../context/ProductProvider';

// Sample data with a "status" field
// const rows = [
//   { id: 1, firstName: 'John', lastName: 'Doe', age: 30, status: 'Rejected' },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', age: 28, status: 'Pending' },
//   { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35, status: 'Dispatched' },
//   { id: 4, firstName: 'Alice', lastName: 'Johnson', age: 40, status: 'Completed' },
//   { id: 1, firstName: 'John', lastName: 'Doe', age: 30, status: 'Rejected' },
//   { id: 2, firstName: 'Jane', lastName: 'Smith', age: 28, status: 'Pending' },
//   { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35, status: 'Dispatched' },
//   { id: 4, firstName: 'Alice', lastName: 'Johnson', age: 40, status: 'Completed' },
//   // Add more rows as needed
// ];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 300 },
  { field: 'lastName', headerName: 'Last Name', width: 300 },
  { field: 'age', headerName: 'Age', type: 'number', width: 300 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <div>
        <span
          style={{
            backgroundColor:
              params.value === 'Rejected'
                ? '#FF8A8A'
                : params.value === 'Pending'
                  ? '#ffae42'
                  : params.value === 'Dispatched'
                    ? '#87ceeb'
                    : params.value === 'Completed'
                      ? '#90ee90'
                      : 'transparent',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {params.value}
        </span>
      </div>
    ),
  },

];
// FIXME : A compnent per file. You can move to other components
const Muiproduct: React.FC = () => {

  const { productState } = useProductProvider();


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={productState.productList}
        columns={columns}
        autoPageSize // This adjusts the page size based on the available height
        checkboxSelection // Enable checkboxes for row selection
      />
    </div>
  );
};


export default Muiproduct;
