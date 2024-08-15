import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/download.png';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function NavBars() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 20) {
        navbarRef.current.classList.add("sticked");
      } else {
        navbarRef.current.classList.remove("sticked");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar ref={navbarRef} expand="lg">
        <Container fluid>
          <Link to="/home" className='navbar-brand'>
            <img src={logo} title="logo" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="ms-auto">
              <Link to='/login-signup' className='nav-link'>
                <button type='button' className="btn btn-primary">
                  Sign Up / Login <IoIosArrowForward style={{ verticalAlign: 'middle' }} />
                </button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
