import React from 'react';
import GameRow from './GameRow';

//let inputBuf = [];
//let states = [];
//let controlID_g = 0;
export default function GameBoard({inputLine}) {
  //const [inputLine, setInputLine] = useState([]);
  //const [states, setStates] = useState([]);

  // function setWordLine(index, word){
  //   if(index<0 || index>5) return;

  //   let newLine = [...inputLine];
  //   console.log('before');
  //   console.log(newLine);
  //   newLine[index] = word;
  //   setInputLine(newLine);
  // }


  // const [controlId, setControlId] = useState(0);

  //useEffect(() => {  
    

  //   console.log(ans);

  //   document.addEventListener('keydown', function(event) {
  //     let inputKey = event.key;
  //     // console.log(inputKey);
  //     if(inputKey.includes('Alt')|| inputKey.includes('Control')||inputKey.includes('Shift')) return;
  //     if(inputBuf.length>=30) return;
  //     console.log(inputBuf);
      
  //     let key = inputKey[0];
  //     inputBuf.push(key);
  //     let newArr = [];
  //     newArr = [...inputBuf];
  //     setInput(newArr);

  //     if(inputBuf.length%5===0){
  //       //console.log('hi');
  //       //states.push('state-correct');
  //       //console.log(states);
  //       //_state[controlId*5+2] = 'state-correct';
  //       //console.log(controlID_g);

  //       for(let i=0; i<5;i++){
  //         if(inputBuf[i+controlID_g*5].toUpperCase()===ans[i].toUpperCase()) states[i+controlID_g*5]='state-correct';
  //         else if(ans.toUpperCase().includes(inputBuf[i+controlID_g*5].toUpperCase())) states[i+controlID_g*5]='state-positionWrong';
  //         else states[i+controlID_g*5]='state-wrong'; 
  //       }
  //       console.log(states);

  //       let _state = [];
  //       _state = [...states];
  //       setState(_state);
  //       // //inputBuf = [];

  //       setControlId(id=>id+1);
  //       controlID_g++;
  //     }
  //   });
  //}, []);  

  return (
  <div>
      {/* <GameRow input={{"str":'abcde',"state":['state-correct','state-positionWrong','state-wrong']}}/> */}
      <GameRow input={inputLine[0]}/>
      <GameRow input={inputLine[1]}/>
      <GameRow input={inputLine[2]}/>
      <GameRow input={inputLine[3]}/>
      <GameRow input={inputLine[4]}/>
      <GameRow input={inputLine[5]}/>
  </div>
  );
}
