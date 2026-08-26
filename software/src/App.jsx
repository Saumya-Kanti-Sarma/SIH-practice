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
          <Route path="all-rooms" element={<Home />} />
          <Route path="empty-rooms" element={<h1>Empty rooms </h1>} />
          <Route path="occupied-rooms" element={<h1>Occupied rooms </h1>} />
          <Route path="under-maintenance" element={<h1>Under maintainance </h1>} />
          {/* Add more routes that need the sidebar */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}