import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

import {
    // AiFillStar,
    AiOutlineHome,
    AiOutlineLogout
  } from "react-icons/ai";

import {
    CgNotes
} from "react-icons/cg";

import {BsAlarm, BsCalculator} from "react-icons/bs";

  function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    let navigate = useNavigate();
    const handleLogout = ()=>{
      updateExpanded(false);
      localStorage.removeItem('token');
      navigate('/login');
    }
  
    window.addEventListener("scroll", scrollHandler);
  
    return (
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
            <div>StudentSpace</div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
  
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/workspace"
                  onClick={() => updateExpanded(false)}
                >
                  <CgNotes style={{ marginBottom: "2px" }} /> WorkSpace
                </Nav.Link>
              </Nav.Item>
  
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/reminder"
                  onClick={() => updateExpanded(false)}
                >
                  <BsAlarm
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Reminder
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/expenses"
                  onClick={() => updateExpanded(false)}
                >
                  <BsCalculator
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Expenses
                </Nav.Link>
              </Nav.Item>
              {!localStorage.getItem('token')?<Nav.Item>
              <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={() => updateExpanded(false)}
                >
                  <BsCalculator
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  LogIn
                </Nav.Link>
              </Nav.Item>:<Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={() => handleLogout}
                >
                  <AiOutlineLogout
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  LogOut
                </Nav.Link>
              </Nav.Item>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;