// components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </div>
  );
}