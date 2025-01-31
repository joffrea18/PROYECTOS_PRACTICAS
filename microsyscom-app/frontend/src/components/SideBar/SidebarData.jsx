import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    // DONE
    title: 'Contacto',
    path: '/contacto',
    icon: <FaIcons.FaUserCircle />,
    cName: 'nav-text '
  },
  {
    // DONE
    title: 'Router',
    path: '/router',
    icon: <FaIcons.FaEthernet />,
    cName: 'nav-text'
  },
  {
    // DONE
    title: 'Firewall',
    path: '/firewall',
    icon: <FaIcons.FaShieldAlt />,
    cName: 'nav-text'
  },
  {
    // DONE
    title: 'Switch',
    path: '/switch',
    icon: <FaIcons.FaNetworkWired />, 
    cName: 'nav-text'
  },
  {
    // DONE
    title: 'Access Point',
    path: '/accesspoint',
    icon: <FaIcons.FaWifi />, 
    cName: 'nav-text'
  },
  {
    // DONE
    title: 'XDR',
    path: '/xdr',
    icon: <FaIcons.FaProjectDiagram />,
    cName: 'nav-text'
  },
  {
    // DONE
    title: 'Servidores',
    path: '/servidores',
    icon: <FaIcons.FaServer />,
    cName: 'nav-text'
  },
  { // IN PROCESS
    title: 'SAI',
    path: '/sai',
    icon: <FaIcons.FaBatteryFull />,
    cName: 'nav-text'
  },
 {
 title: 'Almacenamiento',
 path: '/almacenamiento',
 icon: <FaIcons.FaHdd />,
 cName: 'nav-text'
 },
 {
 title: 'Copias de Seguridad',
 path: '/copiasdeseguridad',
 icon: <FaIcons.FaSyncAlt />,
 cName: 'nav-text'
 },
 {
  title: 'Dominio',
  path: '/dominio',
  icon: <FaIcons.FaGlobe />,
  cName: 'nav-text'
},
{
  title: 'Página Web',
  path: '/paginaweb',
  icon: <FaIcons.FaLaptop />,
  cName: 'nav-text'
},
{
  title: 'Correo Corporativo',
  path: '/correocorporativo',
  icon: <AiIcons.AiOutlineMail />,
  cName: 'nav-text'
},
{
  title: 'Call Center',
  path: '/callcenter',
  icon: <FaIcons.FaHeadset />,
  cName: 'nav-text'
},
 {
 title: 'Impresoras',
 path: '/impresoras',
 icon: <FaIcons.FaPrint />,
 cName: 'nav-text'
 },
 {
 title: 'ERP',
 path: '/erp',
 icon: <FaIcons.FaChartPie />,
 cName: 'nav-text'
 },
 {
  title: '',
  path: '',
  icon: '',
  cName: 'nav-text'
  },

  // {
  //   title: 'Print Report',
  //   path: '/printeroption',
  //   icon: <FaIcons.FaPrint />,
  //   cName: 'nav-text'
  // },
];
