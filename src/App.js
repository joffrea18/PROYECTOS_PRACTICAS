// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
// import Header from './Components/Header/Header';
import Buttonppal from './Components/ButtonPpal/Buttonppal';
import Welcome from './Components/Welcome/Welcome';
import RouterInfo from './Pages/RouterInfo';
import FirewallInfo from './Pages/FirewallInfo';
import NotFound from './Pages/NotFound';
import SwitchInfo from './Pages/SwitchInfo';

// Aquí debo de mirar introducir al email como prop al
// componente de Buttonppal

function App() {

  // const [text, setText ] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/buttonppal' element={<Buttonppal />} />
        <Route path='/routerinfo' element={<RouterInfo />} />
        <Route path='/firewallinfo' element={<FirewallInfo />} />
        <Route path='/switchinfo' element={<SwitchInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
