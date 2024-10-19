import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Buttonppal from './Components/ButtonPpal/Buttonppal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Buttonppal />
      <Routes>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
