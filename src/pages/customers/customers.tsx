import './customers.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Single from "../single/Single";
import { Container } from 'react-bootstrap';


const Customers = () =>{
    return(
    <Container fluid>
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
    </Container>

    )
};
export default Customers;