import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation for route checking
import Footer from "./components/Footer"; // Import Footer Component
import Header from "./components/Header"; // Import Header Component

function Layout() {
  const location = useLocation(); // Get the current URL path
  const hideFooterRoutes = ["/", "/my-plants"]; // Add "/" to the routes where the footer should be hidden

  return (
    <div className="layout">
      {/* Header */}
      <Header />

      {/* Main content area */}
      <main>
        <Outlet />
      </main>

      {/* Conditionally Render Footer */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default Layout;