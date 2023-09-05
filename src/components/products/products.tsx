import { Container, Row, Col, Button} from 'react-bootstrap';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import "./product.scss";
// import Muitable from "../branchestable/muitable";
const Product = () =>{
    return(
        <Container fluid>
      <div className="product">
        <Sidebar />
        <div className="productContainer">
          <Navbar />
          
        </div>
      </div>
    </Container>
    )
};
export default Product;