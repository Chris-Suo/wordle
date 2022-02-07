import React from 'react';
import './Keyboard.css';

export default function Keyboard({keyEvent, mask}) {
  return <div className='keyboard'>
    <div>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('Q')?'disable':''}>Q</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('W')?'disable':''}>W</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('E')?'disable':''}>E</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('R')?'disable':''}>R</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('T')?'disable':''}>T</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('Y')?'disable':''}>Y</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('U')?'disable':''}>U</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('I')?'disable':''}>I</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('O')?'disable':''}>O</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('P')?'disable':''}>P</span>
    </div>
    <div>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('A')?'disable':''}>A</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('S')?'disable':''}>S</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('D')?'disable':''}>D</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('F')?'disable':''}>F</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('G')?'disable':''}>G</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('H')?'disable':''}>H</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('J')?'disable':''}>J</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('K')?'disable':''}>K</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('L')?'disable':''}>L</span>
    </div>
    <div>
      <span className='enter' onClick={keyEvent}>Enter</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('Z')?'disable':''}>Z</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('X')?'disable':''}>X</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('C')?'disable':''}>C</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('V')?'disable':''}>V</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('B')?'disable':''}>B</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('N')?'disable':''}>N</span>
      <span onClick={keyEvent} className={mask.toUpperCase().includes('M')?'disable':''}>M</span>
      <span onClick={keyEvent}>←</span>
    </div>
  </div>;
}
