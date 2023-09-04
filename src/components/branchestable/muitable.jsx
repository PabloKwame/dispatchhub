import React, { useState } from "react";
import "../datatable/datatable.scss";
import {
  Button,
} from "@mui/material";
import { useBranches } from "../../lib/hooks/useBranches";
import { DataGrid } from "@mui/x-data-grid";
import "./muitable.scss";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Link } from "react-router-dom";

const BranchesTable = () => {
  const { error, loading, branches } = useBranches();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedBranches = branches.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Add a unique `id` property to each row based on its index
  const rowsWithIds = displayedBranches.map((branch, index) => ({
    ...branch,
    id: index.toString(), // Use the index as the temporary identifier
  }));

  // Define the columns for the DataGrid with fixed width
  const columns = [
    { field: "branchCode", headerName: "ID", width: 170 }, // Set the width here
    {
      field: "branchImage",
      headerName: "Image",
      width: 100, // Set the width here
      renderCell: (params) => (
        <div className="cellContent">
          <img src={params.value} alt="Branch Image" className="cellImg" />
        </div>
      ),
    },
    { field: "name", headerName: "Name", width: 200 }, // Set the width here
    { field: "branchContact", headerName: "Contact", width: 150 }, // Set the width here
    { field: "branchLocation", headerName: "Location", width: 500 }, // Set the width here
    { field: "region", headerName: "Region", width: 150 }, // Set the width here
    
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.name}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>

            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const handleActionClick = (row) => {
    // Handle the action button click here
    console.log("Action clicked for row:", row);
  };

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={rowsWithIds}
        columns={columns}
        pagination
        pageSize={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[10, 25, 50]}
      />
    </div>
  );
};

export default BranchesTable;
