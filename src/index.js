import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Bads" },
  { id: 2, name: "Sup" },
  { id: 3, name: "Grec" },
  { id: 4, name: "Dod" },
  { id: 5, name: "Bob" },
  { id: 6, name: "Marc" },
  { id: 7, name: "Poll" },
  { id: 8, name: "Tom" },
]

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "What do you want?" },
  { id: 3, message: "Yo!!!!" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData = {dialogsData} messagesData ={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
