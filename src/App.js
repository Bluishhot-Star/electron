/*eslint-disable*/ 
// Lint제거 (warning 메세지 제거)

import './App.css';
import { useState } from 'react';
import { SEND_MAIN_PING } from './constants'; 
// Import Image
import logo from './image/black-cat.svg';
import guitar from './image/guitar.svg';
import hiphop from './image/dj.svg'
import dance from './image/man-dancing-light.svg'
import youtube from './image/youtube.svg';
import spotify from './image/spotify.svg';
import apple from './image/apple.svg';

// Variable & State
const author = "KASSID";

function App() {
  const { ipcRenderer } = window.require("electron"); 
  const sendMail = () => { 
    ipcRenderer.send(SEND_MAIN_PING, 'send'); 
  } 
  let [music, setMusic] = useState(
    [{"type": "Rock", "title": "Summer", "singer": "The Volunteers"},
    {"type": "HipHop", "title": "그 해 여름", "singer": "유토"},
    {"type": "Dance", "title": "Hype Boy", "singer": "New Jeans"}]
    )
  let [thumbs, setThumbs] = useState([0, 0, 0]);
  // Type Img select function
  function setTypeImg(v){
    switch (v) {
      case "Rock":
        return guitar;
      break;
      case "HipHop":
        return hiphop;
      break;
      case "Dance":
        return dance;
      break;
      default:
      break;
  }};
  function updateThumbs(e){
    let copy = [...thumbs]; //괄호 해제,, 깊은복사하기
    copy[e] +=1;
    setThumbs(copy);
  }

  return (
    ipcRenderer.on('window-resized', (event, size) => {
      const [width, height] = size;
      let aspectRatio = 800/600;
      const w = Math.round(width * 0.8); // 요소의 너비는 창 너비의 80%로 설정
      const h = Math.round(width / aspectRatio);

      document.getElementsByClassName('box')[0].style.width = `${w}px`;
      document.getElementsByClassName('box')[0].style.height = `${h}px`;

      // if (width <= 600) {
      //   document.getElementById('content').innerHTML = 'Smmmmmall Screen';
      // } else {
      //   document.getElementById('content').innerHTML = 'Hello, Electron!';
      // }
    }),

    <div className="App">
      {/* <div id="content">Hello, Electron!</div> */}
      <div className="container">
        <div className="left-container">
          <span>The SpiroKit</span>
          <div className="patient-info-container">
            <span>환자 정보</span>
            <div className="patient-info">
              <div className="title">이름</div>
              <div className="content">홍길동</div>
              <div className="title">성별</div>
              <div className="content">남자</div>
              <div className="title">신장</div>
              <div className="content">185.0cm</div>
              <div className="title">몸무게</div>
              <div className="content">90.0kg</div>
              <div className="title">생년월일</div>
              <div className="content">1995-11-18</div>
              <div className="title">연간 흡연량</div>
              <div className="content">-</div>
              <div className="title">흡연 여부</div>
              <div className="content">아니오</div>
              <div className="title">흡연 기간</div>
              <div className="content">-</div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="top"></div>
          <div className="button-container"></div>
          <div className="graph-container"></div>
          <div className="history-container"></div>
        </div>

      </div>


    </div>
  );
}

export default App;
