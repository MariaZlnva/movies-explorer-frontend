import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from "react-router-dom"
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <HashRouter>  */}
      <App />
      {/* </HashRouter>  */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
