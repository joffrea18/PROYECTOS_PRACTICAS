import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Welcome from './Components/Welcome/Welcome';
import RouterInfo from './Pages/RouterInfo';
import FirewallInfo from './Pages/FirewallInfo';
import NotFound from './Pages/NotFound';
import SwitchInfo from './Pages/SwitchInfo';
import PrinterOption from './Pages/PrinterOption';
import Options from './Components/Options/Options';
import { PointsProvider } from './context/PointsContext';
import AccesPoint from './Pages/AccesPoint';
import Navbar from './Components/Navbar/Navbar';
import XDR from './Pages/XDR';
import Servidores from './Pages/Servidores';
import Costs from './Pages/Costs';

// Aquí debo de mirar introducir al email como prop al
// componente de Buttonppal

function App() {

  const [entry, setEntry] = useState([]);
  console.log(entry);
  

  return (
    <div className="App">
    {/* <AuthProvider> */}
    <PointsProvider>
    <Navbar entry={entry}/>
   <Routes>
   <Route path='/' element={<Welcome setEntry={setEntry}/>} />
   <Route path={`/buttonppal/routerinfo`} element={<RouterInfo />} />
   <Route path={`/buttonppal/firewallinfo`} element={<FirewallInfo />} />
   <Route path={`/buttonppal/switchinfo`} element={<SwitchInfo />} />
   <Route path={`/buttonppal/accespointinfo`} element={<AccesPoint />} />
   <Route path={`/buttonppal/xdr`} element={<XDR />} />
   <Route path={`/buttonppal/servidoresinfo`} element={<Servidores />} />
   {/* <Route path={`/buttonppal/costs`} element={<Costs />} /> */}
   <Route path={`/buttonppal/printeroption`} element={<PrinterOption />} />
   <Route path='*' element={<NotFound />} />
   </Routes>
    </PointsProvider>
    {/* </AuthProvider> */}
    {/* <Footer /> */}
    </div>
  );
}

export default App;
