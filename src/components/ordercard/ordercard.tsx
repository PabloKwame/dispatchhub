import "./ordercard.scss";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaidIcon from '@mui/icons-material/Paid';
import {Container,Row,Col} from 'react-bootstrap';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Muitable from "../branchestable/muitable";




const Customercard = () => {



    return(
        <Container fluid >
            <Row>
                <Col xl={12} className="pt-2 rounded respon" style={{display:'flex'}}>
                    <Col xs={6} md={3} className="mb-4 float-left " style={{paddingRight:'20px'}}>
                        <div className="p-1 respons" >
                        <div className="widget">
                                <div className="left">
                                    <span className="title">Total Orders</span>
                                    <span className="counter">
                                    200
                                    </span>
                                    <span className="link">View all Orders</span>
                                </div>
                                <div className="right">
                                    <div className="percentage positive">
                                    <KeyboardArrowUpIcon />20%
                                    </div>
                                    <span style={{alignSelf:"flex-end"}}><MonetizationOnOutlinedIcon className="p-1" style={{backgroundColor: "rgba(255, 0, 0, 0.2)", color: "crimson",}}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                    <div className="p-1 respons" >
                        <div className="widget">
                                <div className="left">
                                    <span className="title">Total Amount</span>
                                    <span className="counter">
                                    200
                                    </span>
                                    <span className="link">View all Orders</span>
                                </div>
                                <div className="right">
                                    <div className="percentage positive">
                                    <KeyboardArrowUpIcon />20%
                                    </div>
                                    <span style={{alignSelf:"flex-end"}}><ShoppingCartOutlinedIcon className="p-1" style={{backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod",}}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                    <div className="p-1 respons" >
                        <div className="widget">
                                <div className="left">
                                    <span className="title">Active Orders</span>
                                    <span className="counter">
                                    200
                                    </span>
                                    <span className="link">View Successful Orders</span>
                                </div>
                                <div className="right">
                                    <div className="percentage positive">
                                    <KeyboardArrowUpIcon />20%
                                    </div>
                                    <span style={{alignSelf:"flex-end"}} ><AccountBalanceWalletOutlinedIcon className="p-1" style={{backgroundColor: "rgba(255, 0, 0, 0.2)", color: "purple",}}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 float-left" style={{paddingRight:'20px'}}>
                    <div className="p-1 respons" >
                        <div className="widget">
                                <div className="left">
                                    <span className="title">Rejected Orders</span>
                                    <span className="counter">
                                    200
                                    </span>
                                    <span className="link">View Rejected Orders</span>
                                </div>
                                <div className="right">
                                    <div className="percentage positive">
                                    <KeyboardArrowUpIcon />20%
                                    </div>
                                    <span style={{alignSelf:"flex-end"}}><PersonOutlinedIcon className="p-1" style={{backgroundColor: "rgba(255, 0, 0, 0.2)", color: "green",}}/></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>
            <Row>
                <Col xl={12} style={{padding:'15px'}}>
                    <div className="shadow" style={{overflow:'auto'}}>
                        <Muitable/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};
export default Customercard;