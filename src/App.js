import './App.css';
import './SharedComponents/Menu/Menu.css';
import './SharedComponents/Footer/Footer.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import Project from './Pages/Projects/Project';
import ScrollRestoration from './SharedComponents/ScrollRestoration';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
