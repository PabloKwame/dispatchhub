import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "react-bootstrap";

// Sample data with a "status" field
const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30, status: 'Rejected' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 28, status: 'Pending' },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35, status: 'Dispatched' },
  { id: 4, firstName: 'Alice', lastName: 'Johnson', age: 40, status: 'Completed' },
  // Add more rows as needed
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
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
                ? 'red'
                : params.value === 'Pending'
                ? 'orange'
                : params.value === 'Dispatched'
                ? 'blue'
                : params.value === 'Completed'
                ? 'green'
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

const Muitable: React.FC = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize // This adjusts the page size based on the available height
        checkboxSelection // Enable checkboxes for row selection
      />
    </div>
  );
};


export default Muitable;
