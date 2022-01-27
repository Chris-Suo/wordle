import './App.css';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';
import { useEffect, useState } from 'react';

const qTable=["about","above","after","again","agree","along","angry","apple","April","beach","begin","below","black","blind","block","bored","bread","break","bring","brown","brush","build","candy","carry","catch","chair","chalk","cheap","cheat","check","cheer","child","China","class","clean","clear","climb","clock","close","color","comic","couch","count","cover","crazy","cross","dance","dirty","dozen","dream","dress","drink","drive","early","earth","eight","enjoy","enter","every","fifth","fifty","first","floor","forty","fresh","front","fruit","funny","glass","glove","grade","grass","great","green","group","guess","habit","happy","heart","heavy","hello","hobby","horse","hotel","house","hurry","jeans","juice","knife","knock","large","later","laugh","learn","least","leave","lemon","light","lucky","lunch","magic","March","maybe","money","month","mouse","mouth","movie","music","never","night","ninth","noise","north","nurse","often","order","other","paint","pants","paper","party","piano","piece","pizza","place","point","pound","price","proud","queen","quick","quiet","quite","radio","rainy","ready","right","river","round","ruler","salad","seven","shall","shape","share","sheep","shirt","short","since","sixth","sixty","skirt","sleep","small","smart","smell","smile","smoke","snack","snake","sorry","sound","south","space","speak","spell","spend","spoon","stand","start","steak","still","store","story","study","sugar","sunny","sweet","table","taste","teach","tenth","thank","there","these","thing","think","third","those","three","tiger","tired","today","tooth","touch","towel","train","truck","uncle","under","until","video","visit","voice","watch","water","where","which","white","whose","windy","woman","world","worry","write","wrong","young"];
let ans = qTable[Math.floor(Math.random()*qTable.length)];
console.log(ans);
let currentLine = 0;

function App() { 
  const [input, setInput] = useState([{"str":'AVC', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]},{"str":'', "state":[]}]);
  //const [statue, setState] = useState([[]]);
  
  function recKey(event){
    let key = event.target.innerText;

    //let lineObj = ;
    //lineObj.str+=key;

    //console.log(key);

    //let newInput = [...input];

    // console.log(newInput);

    // newInput[currentLine].str.push(key);
    // if(newInput[currentLine].length >=5){
    //   console.log('check!');
    //   //currentLine++;
    //   //newInput.push([]);

    // }

    // setInput(newInput);
  }

  return (
    <div className="App">
      {/* <GameBoard inputLine={[{"str":'abcde',"state":['state-correct','state-positionWrong','state-wrong']}]}/> */}
      <GameBoard inputLine={input}/>
      <Keyboard keyEvent={recKey}/>
    </div>
  );
}

export default App;
