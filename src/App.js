import './App.css';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';
import { useState } from 'react';

const qTable=["about","above","after","again","agree","along","angry","apple","April","beach","begin","below","black","blind","block","bored","bread","break","bring","brown","brush","build","candy","carry","catch","chair","chalk","cheap","cheat","check","cheer","child","China","class","clean","clear","climb","clock","close","color","comic","couch","count","cover","crazy","cross","dance","dirty","dozen","dream","dress","drink","drive","early","earth","eight","enjoy","enter","every","fifth","fifty","first","floor","forty","fresh","front","fruit","funny","glass","glove","grade","grass","great","green","group","guess","habit","happy","heart","heavy","hello","hobby","horse","hotel","house","hurry","jeans","juice","knife","knock","large","later","laugh","learn","least","leave","lemon","light","lucky","lunch","magic","March","maybe","money","month","mouse","mouth","movie","music","never","night","ninth","noise","north","nurse","often","order","other","paint","pants","paper","party","piano","piece","pizza","place","point","pound","price","proud","queen","quick","quiet","quite","radio","rainy","ready","right","river","round","ruler","salad","seven","shall","shape","share","sheep","shirt","short","since","sixth","sixty","skirt","sleep","small","smart","smell","smile","smoke","snack","snake","sorry","sound","south","space","speak","spell","spend","spoon","stand","start","steak","still","store","story","study","sugar","sunny","sweet","table","taste","teach","tenth","thank","there","these","thing","think","third","those","three","tiger","tired","today","tooth","touch","towel","train","truck","uncle","under","until","video","visit","voice","watch","water","where","which","white","whose","windy","woman","world","worry","write","wrong","young"];
let ans = qTable[Math.floor(Math.random()*qTable.length)];
console.log(ans);

function checkAnser(str){
  let state = ['','','','',''];
  let isAllCorrect = true;
  for(let i=0; i<5;i++){
    if(str[i].toUpperCase()===ans[i].toUpperCase()) state[i]='state-correct';
    else if(ans.toUpperCase().includes(str[i].toUpperCase()))
    { 
      state[i]='state-positionWrong';
      isAllCorrect = false;
    }
    else{
      state[i]='state-wrong';
      isAllCorrect = false;
    } 
  }
  return {"correct":isAllCorrect, "states":state};
}

let currentLine = 0;
let inputStr = '';
let gameFinish = false;
function App() { 
  const [input, setInput] = useState({});

  function recKey(event){
    if(gameFinish) return;
    let key = event.target.innerText;
    let checkResult;
    
    if(key === 'Enter'){
      if(inputStr.length !== 5){
        alert('Please input 5 characters');
        return;
      }
      else{
        let find = false;
        qTable.forEach(ele => {
          if(ele.toUpperCase() === inputStr) {
            find = true;
            return;
          }
        });

        if(find){
          checkResult = checkAnser(inputStr);
        }
        else{
          alert('Not in list!');
          return;
        }
      }
    }
    else if(key === '←'){
      if(inputStr.length>0){
        inputStr = inputStr.substring(0, inputStr.length-1);
      }
    }else if(inputStr.length<5){
      inputStr+=key; 
    }
    setInput({"lineNum":currentLine, "str":inputStr, "state":checkResult?checkResult.states:[]});

    if(checkResult){
      if(checkResult.correct){
        alert('GOOD!');
        gameFinish = true;
        return;
      }
      else{
        if(currentLine>4){
          alert('Game Over!');
          gameFinish = true;
          return;
        }
        currentLine++;
        inputStr='';
      }
    }
  }

  return (
    <div className="App">
      <GameBoard input={input}/>
      <Keyboard keyEvent={recKey}/>
    </div>
  );
}

export default App;
