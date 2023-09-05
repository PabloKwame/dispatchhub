import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "react-bootstrap";

// Sample data
const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 28 },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35 },
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 28 },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35 },
  
  // Add more rows as needed
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const DataTable: React.FC = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize // Number of rows per page
        checkboxSelection // Enable checkboxes for row selection
      />
    </div>
  );
};

const Muitable: React.FC = () => {
  return (
    <div>
      {/* Other content on your page */}
      <h4 className="p-3" style={{fontSize:"15px"}}>Orders Table</h4>
      <DataTable />
    </div>
  );
};

export default Muitable;
