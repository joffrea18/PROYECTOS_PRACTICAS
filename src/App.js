// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Options from './Components/ButtonPpal/Options';

// Aquí debo de mirar introducir al email como prop al
// componente de Buttonppal

function App({ business, id }) {

  // const [text, setText ] = useState('');
  return (
    <div className="App">
     <Navbar business={business} id={id} />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route to={`/buttonppal/`} element={<Options business={business} id={id} />} />
        <Route path={`/buttonppal/routerinfo/`} element={<RouterInfo business={business} id={id} />} />
        <Route path={`/buttonppal/firewallinfo/`} element={<FirewallInfo business={business} id={id} />} />
        <Route path={`/buttonppal/switchinfo/`} element={<SwitchInfo business={business} id={id} />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
