import React from "react";
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import { colors } from "@mui/material";
import Muitable from "../branchestable/muitable";
const Product = () =>{
    return(
        <>
        <Container fluid>
            <Row>
                <Col xl={12} className="pt-2 rounded">
                    <div className="shadow"  >
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <h3 style={{fontSize:'20px', paddingTop:'25px', paddingLeft:'20px', color:'grey'}}>Products</h3>
                            <div style={{alignSelf:'flex-end', paddingRight:'20px', paddingBottom:'20px', paddingTop:'20px'}}>
                              <Button variant="primary">Add New Product</Button>
                            </div>
                        </div>
                    </div>   
                    <hr/>  
                    <Col xl={12} className="pt-2 rounded">
                        <div className="shadow">
                            <Muitable />
                        </div>
                    </Col>           
                </Col>
            </Row>
        </Container>
        </>
    )
};
export default Product;