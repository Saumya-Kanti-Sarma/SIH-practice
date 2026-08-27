import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Home />} />
          {/* Add more routes that need the sidebar */}
          <Route path="employees" element={<h1>Employee Page</h1>} />
          <Route path="settings" element={<h1>Settings Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}