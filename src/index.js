import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="https://je2pxr9ex6pb.usemoralis.com:2053/server" serverUrl="zYOf2fgpxXGgExmm0IVxtxxGdjCPg6XUZXQm9QEU">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);