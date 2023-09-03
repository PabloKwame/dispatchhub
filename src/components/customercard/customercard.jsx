import { Margin, Widgets } from "@mui/icons-material";
import React from "react";
import "./customercard.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaidIcon from '@mui/icons-material/Paid';
import {Card,Container,Row,Col} from 'react-bootstrap';
import { colors } from "@mui/material";
import Tables from "../tables/table";
import Customertabs from "../tabs/tabs";
import { gql, useQuery } from "@apollo/client";
import { useBranches } from "../../hooks/useBranches";
import { useCustomers } from "../../hooks/useCustomers";


const Customercard = () => {

    const { error: branchesError, loading: branchesLoading, branches } = useBranches();
    const { error: customersError, loading: customersLoading, customers } = useCustomers();
// const branches = data.getBranches.data;
const branchCount = branches.length;


if (branchesLoading || customersLoading) {
    return <div>Loading...</div>;
  }

  if (branchesError || customersError) {
    return (
      <div>
        {branchesError && <div>Error fetching branches: {branchesError.message}</div>}
        {customersError && <div>Error fetching customers: {customersError.message}</div>}
      </div>
    );
  }

    return(
        <Container fluid >
            <Row>
                <Col xl={12} className="pt-2 rounded" style={{display:'flex'}}>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                        <div className="p-3 shadow" >
                            <div>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <p>Total Branches</p>
                                    <span ><ArrowUpwardOutlinedIcon style={{alignSelf:'flex-end', color: 'green', height:'20px' }}/>20%</span>
                                </div>
                                <h4>{customers.length}</h4>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span className="muted" style={{fontSize:'12px', paddingTop:'4px'}}>View all customers</span>
                                <span ><PeopleOutlinedIcon style={{alignSelf:'flex-end', color: 'blue', height:'20px' }}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                        <div className="p-3 shadow" >
                            <div>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <p>Customer Contact</p>
                                    <span ><BarChartIcon style={{alignSelf:'flex-end', color: 'green', height:'20px' }}/>20%</span>
                                </div>
                                <h4>0540752816</h4>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span className="muted" style={{fontSize:'12px', paddingTop:'4px'}}>View all customers</span>
                                <span ><PermPhoneMsgIcon style={{alignSelf:'flex-end', color: 'blue', height:'20px' }}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                        <div className="p-3 shadow" >
                            <div>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <p>Total Orders</p>
                                    <span ><BarChartIcon style={{alignSelf:'flex-end', color: 'green', height:'20px' }}/>20%</span>
                                </div>
                                <h4>20</h4>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span className="muted" style={{fontSize:'12px', paddingTop:'4px'}}>View all customers</span>
                                <span ><ShoppingBagOutlinedIcon style={{alignSelf:'flex-end', color: 'blue', height:'20px' }}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                        <div className="p-3 shadow" >
                            <div>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <p>Total Amount Paid</p>
                                    <span ><BarChartIcon style={{alignSelf:'flex-end', color: 'green', height:'20px' }}/>20%</span>
                                </div>
                                <h4>GH¢500</h4>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span className="muted" style={{fontSize:'12px', paddingTop:'4px'}}>View all customers</span>
                                <span ><PaidIcon style={{alignSelf:'flex-end', color: 'blue', height:'20px' }}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>
            {/* <Row>
                <Col xl={12} style={{padding:'15px'}}>
                    <div className="shadow" style={{overflow:'auto'}}>
                        <Customertabs />
                    </div>
                </Col>
            </Row> */}
        </Container>
    )
};
export default Customercard;