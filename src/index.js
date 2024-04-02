import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Library from './chapter_03/Library';

// // react ver.18 부터는 ReactDom.render 대신 createRoot를 사용하는 방식으로 변경됨
//  const root = ReactDOM.createRoot(document.getElementById('root')); 
//   root.render( 
//     <React.StrictMode>
//       {/* <App /> */}
//       <Library />
//     </React.StrictMode>
//   );


// import Clock from './chapter_04/Clock';

// setInterval(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root')); 
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   )
// }, 1000);

import CommentList from './chapter_05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
