import React from 'react';
import './App.css';
import Navbar from './components/SideBar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import firewall from './pages/Firewall';
import switchs from './pages/Switchs';
import accesspoint from './pages/Accesspoint';
import xdr from './pages/XDR';
import servidores from './pages/Servidores';
import almacenamiento from './pages/Almacenamiento';
import sai from './pages/Sai';
import dominio from './pages/Dominio';
import correocorporativo from './pages/Correocorporativo';
import ldp from './pages/Ldp';
import copiasdeseguridad from './pages/Copiasdeseguridad';
import erp from './pages/Erp';
import callcenter from './pages/Callcenter';
import impresoras from './pages/Impresoras';
import siem from './pages/Siem';
import Contacto from './pages/Contacto';
import Welcome from './components/Welcome/Welcome';
import Routers from './pages/Routers';




function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={ <Welcome />}/>
    <Route path='/contacto' element={<Contacto />}/>
    <Route path='/router' component={<Routers />} />
    <Route path='/firewall' component={firewall} />
    <Route path='/switchs' component={switchs} />
    <Route path='/accesspoint' component={accesspoint} />
    <Route path='/xdr' component={xdr} />
    <Route path='/siem' component={siem} />
    <Route path='/servidores' component={servidores} />
    <Route path='/almacenamientiento' component={almacenamiento} />
    <Route path='/sai' component={sai} />
    <Route path='/copiasdeseguridad' component={copiasdeseguridad} />
    <Route path='/ldp' component={ldp} />
    <Route path='/dominio' component={dominio} />
    <Route path='/correocorporativo' component={correocorporativo} />
    <Route path='/callcenter' component={callcenter} />
    <Route path='/erp' component={erp} />
    <Route path='/impresoras' component={impresoras} />
    </Routes>
    </Router>
    </>
  );
}

export default App;