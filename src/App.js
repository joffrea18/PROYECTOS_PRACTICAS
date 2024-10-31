// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';
import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import RouterInfo from './Pages/RouterInfo';
import FirewallInfo from './Pages/FirewallInfo';
import NotFound from './Pages/NotFound';
import SwitchInfo from './Pages/SwitchInfo';
import PrinterOption from './Pages/PrinterOption';
import Options from './Components/ButtonPpal/Options';
import { PointsProvider } from './context/PointsContext';
import AccesPoint from './Pages/AccesPoint';
import Navbar from './Components/Navbar/Navbar';
// import {AuthProvider} from './context/AuthContext';

// Aquí debo de mirar introducir al email como prop al
// componente de Buttonppal

function App() {
<<<<<<< Updated upstream

  const [entry, setEntry] = useState([]);
  console.log(entry);
  
=======
>>>>>>> Stashed changes

  return (
    <div className="App">
      {/* <AuthProvider> */}
      <PointsProvider>
        <Navbar />
         <Routes>
<<<<<<< Updated upstream
           <Route path='/' element={<Welcome setEntry={setEntry}/>} />
           <Route to={`/buttonppal`} element={<Options entry={entry}/>} />
           <Route path={`/buttonppal/routerinfo`} element={<RouterInfo entry={entry}/>} />
           <Route path={`/buttonppal/firewallinfo`} element={<FirewallInfo entry={entry}/>} />
=======
           <Route path='/' element={<Welcome />} />
           <Route to={`/buttonppal`} element={<Options />} />
           <Route path={`/buttonppal/routerinfo`} element={<RouterInfo />} />
           <Route path={`/buttonppal/firewallinfo`} element={<FirewallInfo />} />
>>>>>>> Stashed changes
           <Route path={`/buttonppal/switchinfo`} element={<SwitchInfo />} />
           <Route path={`/buttonppal/accespointinfo`} element={<AccesPoint />} />
           <Route path={`/buttonppal/printeroption`} element={<PrinterOption />} />
           <Route path='*' element={<NotFound />} />
         </Routes>
      </PointsProvider>
      {/* </AuthProvider> */}
      <Footer />
    </div>
  );
}

export default App;
