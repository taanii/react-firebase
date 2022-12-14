import { Button } from "@chakra-ui/react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useContext } from "react";
import { AuthContext } from "../../components/Authentication/AuthProvider";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import Calculator from "../../components/Calculator";
import UploadImage from "../../components/UploadImage";
import AddText from "../../components/AddText";
import Notification from "../../components/Notification";
const Dashboard = () => {
  const { logout } = useContext(AuthContext);


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Nordstone</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex" role="search">
              <button onClick={() => { logout(); }} className="btn btn-primary" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="m-3">
        <Tabs
          defaultActiveKey="notification"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="notification" title="Notification">
            <Notification />
          </Tab>
          <Tab eventKey="uploadimage" title="Upload Image">
            <UploadImage />
          </Tab>
          <Tab eventKey="addtext" title="Add text">
            <AddText />
          </Tab>
          <Tab eventKey="calculator" title="Calculator">
            <Calculator />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard
