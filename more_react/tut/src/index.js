import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import User from "./User"
// import Cat from "./Cat";
// import Name from "./Name"
import  Form  from "./components/Form";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <User />
    <Cat />
    <Name /> */}
    <Form />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

