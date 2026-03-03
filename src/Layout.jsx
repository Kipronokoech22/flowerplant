import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  return (
    <div>
      {/* Header will always be visible */}
      <Header />
      {/* Outlet is where nested routing components will be rendered */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;