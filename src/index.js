import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< Updated upstream
=======
import AuthProvider from './context/AuthContext';
// import { PointsProvider } from './context/PointsContext';
>>>>>>> Stashed changes


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
<<<<<<< Updated upstream
            <App />
=======
        <AuthProvider>
          {/* <PointsProvider> */}
            <App />
          {/* </PointsProvider> */}
        </AuthProvider>
>>>>>>> Stashed changes
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
