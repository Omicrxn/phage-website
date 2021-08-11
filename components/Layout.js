import React from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
// The layout component wraps the main component and contains components that should be in all pages all pages
//children property is basically anything nested inside the layout component in _app.js
const Layout = ({ children }) => {
  return (
    <main className="container flex flex-col h-screen">
      <ResponsiveNavbar />

      {children}
    </main>
  );
};

export default Layout;
