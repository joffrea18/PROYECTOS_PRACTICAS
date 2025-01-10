import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiar a 'react-dom/client' para React 18
import { IntlProvider } from 'react-intl';
import App from './App';
import messages from './messages'; // Importa tus mensajes de traducción

const locale = 'es'; // Cambia esto al idioma actual ('en', 'es', etc.)
const rootElement = document.getElementById('root'); // Obtén el elemento raíz

// Crea el contenedor raíz con createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
