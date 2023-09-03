import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import img1 from '../../img/CHRISBnew.jpg'
import Apexchart from "../../components/apexchart/apexchart";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top" >
          <div className="left" >
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={img1}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Pizzaman Customer</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">pizzamancustomer@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+233 54087453</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Ayeduase, Kumasi
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Ghana</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right shadow" >
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
            <Apexchart/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
