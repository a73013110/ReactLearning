import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import './01-ts基礎/01-基本類型'
// import './01-ts基礎/02-陣列'
// import './01-ts基礎/03-物件'
// import './01-ts基礎/04-函數'
// import './01-ts基礎/05-類別'
import './01-ts基礎/06-類別、介面'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
