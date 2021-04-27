import React from 'react'

import Navbar from './Navbar'
// The layout component wraps the main component and contains components that should be in all pages all pages
 //children property is basically anything nested inside the layout component in _app.js
    const Layout = ({ children }) => {
        return (
          <div className="h-100 d-flex flex-column">
            <Navbar />
            { children }
          </div>
        );
      }
       
      export default Layout;