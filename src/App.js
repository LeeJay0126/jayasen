import './App.css';
import './SharedComponents/Menu/Menu.css';
import './SharedComponents/Footer/Footer.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
