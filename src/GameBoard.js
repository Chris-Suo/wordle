import React from 'react';
import GameRow from './GameRow';

let gameLine = [{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]}];
export default function GameBoard({input}) {
  if(Object.keys(input).length !== 0){
    gameLine[input.lineNum].str = input.str;
    gameLine[input.lineNum].state = input.state;
  }

  return (
  <div>
      {/* <GameRow input={{"str":'abcde',"state":['state-correct','state-positionWrong','state-wrong']}}/> */}
      <GameRow input={gameLine[0]}/>
      <GameRow input={gameLine[1]}/>
      <GameRow input={gameLine[2]}/>
      <GameRow input={gameLine[3]}/>
      <GameRow input={gameLine[4]}/>
      <GameRow input={gameLine[5]}/>
  </div>
  );
}
