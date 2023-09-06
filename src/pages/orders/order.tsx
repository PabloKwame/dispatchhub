import './order.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Container } from 'react-bootstrap';
import Ordercard from '../../components/ordercard/ordercard';


const Orders = () => {
  return (
    <Container fluid>
      <div className="order">
        <Sidebar />
        <div className="orderContainer">
          <Navbar />
          <div className="pt-4">
            <Ordercard />
          </div>
        </div>
      </div>
    </Container>

  )
};
export default Orders;