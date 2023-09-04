import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tables from "../tables/table";
import Muitable from "../branchestable/muitable";

const Customertabs = () =>{
    return(
        <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Order History">
        <div className="shadow">
        <Muitable />
        </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <Muitable />
      </Tab>
      <Tab eventKey="longer-tab" title="Branches Bought From">
      <Muitable />
      </Tab>
      <Tab eventKey="contact" title="Ratings" >
      <Muitable />
      </Tab>
    </Tabs>
    )
};
export default Customertabs;