import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      {/* <Menu> */}
        <Header />
      {/* </ Menu> */}
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
