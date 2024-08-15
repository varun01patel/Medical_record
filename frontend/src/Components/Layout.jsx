import React from 'react';
import NavBars from '../Sections/navbar'; // Adjust path if necessary
import Footer from '../Sections/footer'; // Adjust path if necessary
// import './Layout.css'; // Add your styles here

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
