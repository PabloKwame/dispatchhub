import React from "react";
import './customers.scss';
// import {Card, Container, Row, Col} from 'react-bootstrap';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
// import Customercard from "../../components/customercard/customercard";
// import Product from "../../components/products/products";
import Customerspage from "../../components/customersPage/customerspage";
import Single from "../single/Single";


const Customers = () =>{
    return(
    <div className="customers">
      <Sidebar/>
      <div className="customercontainer">
        <Navbar/>
        
            <div className="pt-4">
                {/* <Customercard /> */}
                {/* <Product /> */}
               <Single/>
            </div>
        
      </div>
    </div>

    )
};
export default Customers;