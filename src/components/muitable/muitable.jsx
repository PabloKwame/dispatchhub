import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => {
      const status = params.row.status;
      let badgeColor = '';
      if (status === 'Active') {
        badgeColor = 'green';
      } else if (status === 'Inactive') {
        badgeColor = 'red';
      } else if (status === 'Pending') {
        badgeColor = 'yellow';
      }

      return (
        <div>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: badgeColor,
              color: 'white',
              borderRadius: '4px',
              padding: '2px 8px',
            }}
          >
            {status}
          </span>
        </div>
      );
    },
  },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: 'Active' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: 'Inactive' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: 'Pending' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: 'Active' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: 'Inactive' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: 'Pending' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: 'Active' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: 'Inactive' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: 'Pending' },
];

export default function Muitable() {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
