import React from 'react';
import WordBox from './WordBox';

export default function GameRow({input}) {
  // {
  //   "str":"str",
  //   "state":[]
  // }
  return <div>
        <WordBox word={input.str[0]||''} state={input.state[0]}/>
        <WordBox word={input.str[1]||''} state={input.state[1]}/>
        <WordBox word={input.str[2]||''} state={input.state[2]}/>
        <WordBox word={input.str[3]||''} state={input.state[3]}/>
        <WordBox word={input.str[4]||''} state={input.state[4]}/>
    </div>;

  // if(input){ 
    
  // }
  // else{
  //   return <div>
  //       <WordBox word='' state=''/>
  //       <WordBox word='' state=''/>
  //       <WordBox word='' state=''/>
  //       <WordBox word='' state=''/>
  //       <WordBox word='' state=''/>
  //   </div>;
  // }
}
