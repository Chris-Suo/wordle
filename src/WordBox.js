import React from 'react';
import './WordBox.css';

export default function WordBox({word, state}) {
  return (
    <span className={`word-box ${state}`}>
      {word.toUpperCase()}
    </span>);
}
