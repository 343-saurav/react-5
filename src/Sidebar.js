import React, { Fragment } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const token = localStorage.getItem('token')

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
// const token = localStorage.getItem('token');
const role = localStorage.getItem("role");
  return (
        <Fragment>
            {
                role  && (

                <div
                className={`d-flex flex-column bg-light text-dark p-2  ${
                  isSidebarOpen ? "expanded" : "collapsed"
                }`}
                style={{ minHeight: "87vh" }}
              >
                <div className="text-center mb-4">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-dark"
                    onClick={toggleSidebar}
                    style={{ cursor: "pointer" }}
                    data-toggle="collapse" 
                    href="#sidebarCollapse"
                    role="button"
                  />
                </div>
           
                {/* <h2 className="text-center mb-4">TravelDesk</h2> */}
           
                <div className={`collapse ${isSidebarOpen ? "show" : ""}`} id="sidebarCollapse">
                  <ul className="nav flex-column">
           
                  <li className="nav-item">
                      <Link to='/admin' className="nav-link active text-dark" >
                        Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-dark" >
                        Manager
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-dark" >
                        Emloyee
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-dark" >
                        Hr-Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active text-dark" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="/products">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="/contact-us">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark" href="/help">
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
              </div>)
            }
        </Fragment>
   )
};

export default Sidebar;
