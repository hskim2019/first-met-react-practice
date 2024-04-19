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


// import CommentList from './chapter_05/CommentList';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );


// import NotificationList from './chapter_06/NotificationList';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//       <NotificationList />
  
// );
// 참고 - https://www.inflearn.com/questions/619705/notificationlist-jsx-%EC%B1%95%ED%84%B0-6%EC%9E%A5-%EC%8B%A4%EC%8A%B5-%EB%82%B4%EC%9A%A9-%EC%A7%88%EB%AC%B8-%EB%8F%99%EC%8B%9C%EC%97%90-2%EA%B0%9C%EC%94%A9-%EB%82%98%EC%98%B4?commentId=205023#205023
// 리액트 버전 18에서 Strict Mode 동작이 변경되어, 실행 시 알림 메세지가 두 번 나오는 현상이 있어 Strict Mode 라인을 삭제 해서 실행 해 봄
// React would unmount and remount trees using the same component state as before - 개발 모드에서 Strict Mode 를 사용하면 컴포넌트를 unmount 시켰다가 다시 remount 하게 되어
// 예제의 componentDidMount() 함수가 두 번 호출되게 됨



// import Accmodate from './chapter_07/Accomodate';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             <Accmodate />
//       </React.StrictMode>
// );



// import ConfirmButton from './chapter_08/ConfirmButton';
// import ConfirmButtonClassFields from './chapter_08/ConfirmButtonClassFields';
// import ConfirmButtonFunction from './chapter_08/ConfirmButtonFunction';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             {/* <ConfirmButton/> */}
//             {/* <ConfirmButtonClassFields/> */}
//             <ConfirmButtonFunction/>
//       </React.StrictMode>
// );



// import LandingPage from './chapter_09/LandingPage';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             <LandingPage/>
//       </React.StrictMode>
// );



// import AttendanceBook from './chapter_10/AttendanceBook';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             <AttendanceBook/>
//       </React.StrictMode>
// )



// import SignUp from './chapter_11/SignUp';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             <SignUp/>
//       </React.StrictMode>
// )


// import Calculator from './chapter_12/Calculator';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             <Calculator/>
//       </React.StrictMode>
// )


// import ProfileCard from "./chapter_13/ProfileCard";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <React.StrictMode>
//             <ProfileCard/>
//       </React.StrictMode>
// )


import DarkOrLight from './chapter_14/DarkOrLight';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <DarkOrLight />
      </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
