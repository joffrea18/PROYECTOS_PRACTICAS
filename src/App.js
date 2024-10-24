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
import PrinterOption from './Pages/PrinterOption';
import Options from './Components/ButtonPpal/Options';
import { PointsProvider } from './context/PointsContext';
// import {AuthProvider} from './context/AuthContext';

// Aquí debo de mirar introducir al email como prop al
// componente de Buttonppal

function App({ business, id }) {

  // const [text, setText ] = useState('');
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <PointsProvider>
        {/* <Navbar business={business} id={id} /> */}
         <Routes>
           <Route path='/' element={<Welcome />} />
           <Route to={`/buttonppal`} element={<Options business={business} id={id} />} />
           <Route path={`/buttonppal/routerinfo`} element={<RouterInfo business={business} id={id} />} />
           <Route path={`/buttonppal/firewallinfo`} element={<FirewallInfo business={business} id={id} />} />
           <Route path={`/buttonppal/switchinfo`} element={<SwitchInfo business={business} id={id} />} />
           <Route path={`/buttonppal/printeroption`} element={<PrinterOption business={business} id={id} />} />
           <Route path='*' element={<NotFound />} />
         </Routes>
      </PointsProvider>
      {/* </AuthProvider> */}
      <Footer />
    </div>
  );
}

export default App;
