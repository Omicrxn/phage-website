import React from 'react'

import Navbar from './Navbar'
// The layout component wraps the main component and contains components that should be in all pages all pages
 //children property is basically anything nested inside the layout component in _app.js
    const Layout = ({ children }) => {
        return (
          <main className="container mx-auto h-full flex flex-col items-center justify-start">
            <Navbar />

            { children }


          </main>
        );
      }
       
      export default Layout;