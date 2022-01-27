import React from 'react';
import WordBox from './WordBox';

export default function GameRow({input, state,rid, controlId}) {
  //console.log(rid);
  //console.log(controlId);
  if(input && rid<=controlId){ 
    return <div>
        <WordBox word={input[rid*5+0]||'_'} state={state[rid*5+0]}/>
        <WordBox word={input[rid*5+1]||'_'} state={state[rid*5+1]}/>
        <WordBox word={input[rid*5+2]||'_'} state={state[rid*5+2]}/>
        <WordBox word={input[rid*5+3]||'_'} state={state[rid*5+3]}/>
        <WordBox word={input[rid*5+4]||'_'} state={state[rid*5+4]}/>
    </div>;
  }
  else{
    return <div>
        <WordBox word='' state=''/>
        <WordBox word='' state=''/>
        <WordBox word='' state=''/>
        <WordBox word='' state=''/>
        <WordBox word='' state=''/>
    </div>;
  }
}
