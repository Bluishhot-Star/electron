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
        <div className="nav">
          <div className="nav-logo">
            <h1>The SpiroKit</h1>
          </div>
          <div className="nav-content-container">
            <div className="nav-left-container">
              <div className="admin">
                <span>담당자</span>
                <span>TR 관리자</span>
              </div>
            </div>
            <div className="nav-right-container">
              <button className="select-patient-btn">환자 선택</button>
              <button className="setting-btn">설정</button>
            </div>
          </div>
        </div>
        <div className="left-container">
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
              {/* <div className="space"></div> */}
            </div>
            <button>환자정보 수정</button>
            {/* <div className="button-container"></div> */}
          </div>
        </div>
        <div className="right-container">
          {/* <div className="top"></div> */}
          <div className="button-container">
            <div className="two-btn-container">
              <button className="FVC-btn">FVC</button>
              <button className="SVC-btn">SVC</button>
            </div>
            <button className="detail-btn">결과 상세보기</button>
          </div>
          <div className="graph-container">
            <div className="graph"></div>
            <div className="graph"></div>
          </div>
          <div className="history-container">
            <div className="slider">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
