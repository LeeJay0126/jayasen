import './App.css';
import './SharedComponents/Menu/Menu.css';
import './SharedComponents/Footer/Footer.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
