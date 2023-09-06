import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "react-bootstrap";
import { useOrderProvider } from '../../context/OrderProvider';

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

//FIXME: Dont create more than one component in file.Please Move this to it separate file

const Muiorders: React.FC = () => {
  const { orderState } = useOrderProvider();
  console.log(orderState.orderList)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={orderState.orderList.map((item) => ({ id: item._id, }))}
        columns={columns}
        autoPageSize // This adjusts the page size based on the available height
        checkboxSelection // Enable checkboxes for row selection
      />
    </div>
  );
};


export default Muiorders;
