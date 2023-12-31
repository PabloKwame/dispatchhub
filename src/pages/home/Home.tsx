
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import InsightCard from "../../components/InsightCard";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';


import { useBranches } from "../../lib/hooks/useBranches";
import Apexchart from "../../components/apexchart/apexchart";

const Home = () => {
  const { error, loading } = useBranches();


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
          <div className="InsightCards">
            <InsightCard type="user" />
            <InsightCard type="order" />
            <InsightCard type="earning" />
            <InsightCard type="balance" />
            {/* <Customercard /> */}
          </div>
          <div className="charts">
            <Featured />
            <div className="shadow ">
              <h4 style={{ fontSize: "16px", fontWeight: "500" }}>
                <Apexchart/>
              </h4>
            </div>
          </div>

          <div>
            <Container fluid>
              <Row>
                <Col xl={12} className="charts">
                  <div className="shadow" style={{width:'100%'}}>
                    <div className="pt-4 " style={{ paddingLeft: "20px" }}>
                      <h5 style={{ fontSize: "15px", color: "grey" }}>
                        Lastest Orders
                      </h5>
                      <Table />
                    </div>
                    <div className="p-3">
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
