import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Button from "react-bootstrap/Button";
import Tables from "../../components/tables/table";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import Chart from "react-apexcharts";
import Apexchart from "../../components/apexchart/apexchart";
import Muitable from "../../components/branchestable/muitable";
import { gql, useQuery } from "@apollo/client";
import { useBranches} from "../../lib/hooks/useBranches";
import Customercard from "../../components/customercard/customercard";
import Datatable from "../../components/datatable/Datatable";
import BranchesTable from "../../components/branchestable/muitable";

const Home = () => {

const {error,loading,branches} = useBranches();
// const branches = data.getBranches.data;
const branchCount = branches.length;

if (loading) {
  return <div><Spinner animation="border" variant="warning" /></div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

  return (
    <Container fluid>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
            {/* <Customercard /> */}
          </div>
          <div className="charts">
            <Featured />
            {/* <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} /> */}
            <div className="shadow">
              <h4 style={{ fontSize: "16px", fontWeight: "500" }}>
                Sales Chart
              </h4>
              <Apexchart title="Last 6 Months (Revenue)" aspect={3 / 1} />
            </div>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
           {/* <BranchesTable/> */}
          </div>
          <div>
            <Container fluid>
              <Row>
                <Col xl={12}>
                  <div className="shadow">
                    <div className="pt-4 " style={{ paddingLeft: "20px" }}>
                      <h5 style={{ fontSize: "15px", color: "grey" }}>
                        Lastest Orders
                      </h5>
                    </div>
                    <div className="p-3">
                      <Muitable />
                      
                        {/* <div>
                        <h1>Branches : {branchCount}</h1>
                        <ul>
                          {branches.map(branch => (
                            <li key={branch._id}>{branch.name}</li>
                          ))}
                        </ul>
                      </div> */}

                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
