import React from "react";
import Table from 'react-bootstrap/Table';
import {Container, ProgressBar} from "react-bootstrap";

const Tables = () =>{
    const tableData = [
        { id: 1, status: 'Active' },
        { id: 2, status: 'Pending' },
        { id: 3, status: 'Completed' },
      ];
    
      const getStatusVariant = (status: string) => {
        switch (status) {
          case 'Active':
            return 'success';
          case 'Pending':
            return 'warning';
          case 'Completed':
            return 'info';
          default:
            return 'info';
        }
      };
    return(
        <Container fluid className="shadow" style={{minWidth:'80%'}}>
            <div className='overflow-auto'>
        <Table striped responsive >
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <React.Fragment key={row.id}>
                <tr>
                  <td>{row.id}</td>
                  <td>
                    <ProgressBar now={100} variant={getStatusVariant(row.status)} label={row.status} />
                  </td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={13}>
                    <hr className="my-2" />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>
        </div>
        </Container>
    )
};
export default Tables;