// components/Layout/Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Layout.css";

export default function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className={`layout ${isSidebarCollapsed ? "layout--sidebar-collapsed" : ""}`}>
      <Sidebar
        collapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((prev) => !prev)}
      />
      <div className="main-content">
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </div>
  );
}