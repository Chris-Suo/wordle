import React from 'react';
import './Keyboard.css';

export default function Keyboard({keyEvent}) {
  return <div className='keyboard'>
    <div>
      <span onClick={keyEvent}>Q</span>
      <span onClick={keyEvent}>W</span>
      <span onClick={keyEvent}>E</span>
      <span onClick={keyEvent}>R</span>
      <span onClick={keyEvent}>T</span>
      <span onClick={keyEvent}>Y</span>
      <span onClick={keyEvent}>U</span>
      <span onClick={keyEvent}>I</span>
      <span onClick={keyEvent}>O</span>
      <span onClick={keyEvent}>P</span>
    </div>
    <div>
      <span onClick={keyEvent}>A</span>
      <span onClick={keyEvent}>S</span>
      <span onClick={keyEvent}>D</span>
      <span onClick={keyEvent}>F</span>
      <span onClick={keyEvent}>G</span>
      <span onClick={keyEvent}>H</span>
      <span onClick={keyEvent}>J</span>
      <span onClick={keyEvent}>K</span>
      <span onClick={keyEvent}>L</span>
    </div>
    <div>
      <span className='enter' onClick={keyEvent}>Enter</span>
      <span onClick={keyEvent}>Z</span>
      <span onClick={keyEvent}>X</span>
      <span onClick={keyEvent}>C</span>
      <span onClick={keyEvent}>V</span>
      <span onClick={keyEvent}>B</span>
      <span onClick={keyEvent}>N</span>
      <span onClick={keyEvent}>M</span>
      <span onClick={keyEvent}>←</span>
    </div>
  </div>;
}
