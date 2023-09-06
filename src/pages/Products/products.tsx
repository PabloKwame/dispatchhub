import './products.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Container } from 'react-bootstrap';
import Productcard from '../../components/productcard/productcard';


const Products = () =>{
    return(
    <Container fluid>
      <div className="product">
      <Sidebar/>
      <div className="productContainer">
        <Navbar/>
        
            <div className="pt-4">
                <Productcard/>
            </div>
        
      </div>
    </div>
    </Container>

    )
};
export default Products;