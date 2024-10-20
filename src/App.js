// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';
import Navbar from './Components/Navbar/Navbar';
// import Header from './Components/Header/Header';
import Buttonppal from './Components/ButtonPpal/Buttonppal';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Buttonppal />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
