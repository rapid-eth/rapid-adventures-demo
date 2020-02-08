import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './App.css'

import start from './images/start.png'
//onboarding
import localhost_3000_joinus from './images/localhost_3000_joinus.png';
import localhost_3000_joinus1 from './images/localhost_3000_joinus (1).png';
import localhost_3000_joinus3 from './images/localhost_3000_joinus (3).png';
import localhost_3000_joinus8 from './images/localhost_3000_joinus (8).png';

//dashboard
import dashboard from './images/localhost_3000_ (1).png';

//quest
import adventures from './images/localhost_3000_adventures.png';
import adventures1 from './images/localhost_3000_adventures (1).png';
import adventures3 from './images/localhost_3000_adventures (3).png';
import adventures5 from './images/localhost_3000_adventures (5).png';
import adventures6 from './images/localhost_3000_adventures (6).png';
import adventures8 from './images/localhost_3000_adventures (8).png';
import adventures9 from './images/localhost_3000_adventures (9).png';
import adventures11 from './images/localhost_3000_adventures (11).png';
import adventures12 from './images/localhost_3000_adventures (12).png';

function App() {
  return (
    <div className="App">
      <AwesomeSlider>
        <div data-src={`${start}`} />
        <div data-src={`${localhost_3000_joinus}`} />
        <div data-src={`${localhost_3000_joinus1}`} />
        <div data-src={`${localhost_3000_joinus3}`} />
        <div data-src={`${localhost_3000_joinus8}`} />
        <div data-src={`${dashboard}`} />
        <div data-src={`${adventures}`} />
        <div data-src={`${adventures1}`} />
        <div data-src={`${adventures3}`} />
        <div data-src={`${adventures5}`} />
        <div data-src={`${adventures6}`} />
        <div data-src={`${adventures8}`} />
        <div data-src={`${adventures9}`} />
        <div data-src={`${adventures11}`} />
        <div data-src={`${adventures12}`} />
      </AwesomeSlider>
    </div>
  );
}

export default App;
