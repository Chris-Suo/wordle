import React, { useEffect,useState } from 'react';
import GameRow from './GameRow';
const qTable=["about","above","after","again","agree","along","angry","apple","April","beach","begin","below","black","blind","block","bored","bread","break","bring","brown","brush","build","candy","carry","catch","chair","chalk","cheap","cheat","check","cheer","child","China","class","clean","clear","climb","clock","close","color","comic","couch","count","cover","crazy","cross","dance","dirty","dozen","dream","dress","drink","drive","early","earth","eight","enjoy","enter","every","fifth","fifty","first","floor","forty","fresh","front","fruit","funny","glass","glove","grade","grass","great","green","group","guess","habit","happy","heart","heavy","hello","hobby","horse","hotel","house","hurry","jeans","juice","knife","knock","large","later","laugh","learn","least","leave","lemon","light","lucky","lunch","magic","March","maybe","money","month","mouse","mouth","movie","music","never","night","ninth","noise","north","nurse","often","order","other","paint","pants","paper","party","piano","piece","pizza","place","point","pound","price","proud","queen","quick","quiet","quite","radio","rainy","ready","right","river","round","ruler","salad","seven","shall","shape","share","sheep","shirt","short","since","sixth","sixty","skirt","sleep","small","smart","smell","smile","smoke","snack","snake","sorry","sound","south","space","speak","spell","spend","spoon","stand","start","steak","still","store","story","study","sugar","sunny","sweet","table","taste","teach","tenth","thank","there","these","thing","think","third","those","three","tiger","tired","today","tooth","touch","towel","train","truck","uncle","under","until","video","visit","voice","watch","water","where","which","white","whose","windy","woman","world","worry","write","wrong","young"];

let inputBuf = [];
let states = [];
let controlID_g = 0;
export default function GameBoard() {
  let ans;

  const [input, setInput] = useState([]);
  const [state, setState] = useState([]);
  const [controlId, setControlId] = useState(0);

  useEffect(() => {  
    ans = qTable[Math.floor(Math.random()*qTable.length)];
    console.log(ans);

    document.addEventListener('keydown', function(event) {
      let inputKey = event.key;
      // console.log(inputKey);
      if(inputKey.includes('Alt')|| inputKey.includes('Control')||inputKey.includes('Shift')) return;
      if(inputBuf.length>=30) return;
      console.log(inputBuf);
      
      let key = inputKey[0];
      inputBuf.push(key);
      let newArr = [];
      newArr = [...inputBuf];
      setInput(newArr);

      if(inputBuf.length%5===0){
        //console.log('hi');
        //states.push('state-correct');
        //console.log(states);
        //_state[controlId*5+2] = 'state-correct';
        //console.log(controlID_g);

        for(let i=0; i<5;i++){
          if(inputBuf[i+controlID_g*5].toUpperCase()===ans[i].toUpperCase()) states[i+controlID_g*5]='state-correct';
          else if(ans.toUpperCase().includes(inputBuf[i+controlID_g*5].toUpperCase())) states[i+controlID_g*5]='state-positionWrong';
          else states[i+controlID_g*5]='state-wrong'; 
        }
        console.log(states);

        let _state = [];
        _state = [...states];
        setState(_state);
        // //inputBuf = [];

        setControlId(id=>id+1);
        controlID_g++;
      }
    });
  }, []);

  // useEffect(() => { 
    
  // },[input]);

 
  

  return (
  <div>
      <GameRow input={input} state={state} rid={0} controlId={controlId}/>
      <GameRow input={input} state={state} rid={1} controlId={controlId}/>
      <GameRow input={input} state={state} rid={2} controlId={controlId}/>
      <GameRow input={input} state={state} rid={3} controlId={controlId}/>
      <GameRow input={input} state={state} rid={4} controlId={controlId}/>
      <GameRow input={input} state={state} rid={5} controlId={controlId}/>
  </div>
  );
}
