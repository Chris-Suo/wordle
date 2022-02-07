import './App.css';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';
import { useState } from 'react';

const qTable=["abbey","abide","about","above","actor","acute","adapt","aging","agony","admit","adopt","adult","ahead","aisle",
"alarm","after","album","alert","alien","alike","alive","again","agent","alley","allow","alone","angel","anger","angle","along",
"aloud","angry","ankle","amend","among","apart","appal","apply","aside","April","apron","arena","arise","armed","array","arrow",
"attic","audio","bacon","avoid","await","awake","award","awful","based","basic","basin","begin","bathe","belly","below","beach",
"beard","berry","beast","bingo","blues","bluff","blush","board","board","boast","birth","black","bonus","blame","bland","blank",
"blast","blaze","bleak","bleed","blend","boost","booth","bored","bless","blind","blink","block","blood","bound","broad","brace",
"brain","brake","brand","brood","brook","brown","brush","brave","bread","break","breed","brick","bride","bully","bunch","brief",
"bring","brisk","burst","cabin","cable","cargo","camel","canal","candy","carry","carve","caste","catch","cater","cause","chaos",
"charm","cease","chase","cheap","cheat","check","cheek","cheer","chain","chair","chalk","chess","chest","chick","chief","clash",
"class","chill","china","clean","clear","choir","choke","clerk","click","cliff","climb","chunk","cigar","clock","close","close",
"cloth","claim","cloud","clown","comet","coast","color","comer","crack","craft","crane","crash","couch","cough","count","crazy",
"cream","creed","creep","crime","court","cross","crowd","crown","crude","cruel","crush","daily","dairy","dance","cubic","curry",
"curve","debut","demon","dense","depth","delay","deter","devil","diary","dirty","disco","ditch","dizzy","drama","dodge","dread",
"dream","dress","donor","drill","drink","drive","drown","doubt","dough","drunk","dryer","dozen","draft","dwarf","eight","eager",
"eagle","early","earth","elbow","elder","elect","elite","ensue","enter","empty","entry","equal","erase","erode","enemy","error",
"essay","ethic","exile","exist","event","every","expel","evoke","exact","excel","extra","fatal","fault","favor","faint","fairy",
"faith","fence","ferry","fever","field","fancy","fifth","fifty","fight","first","force","flame","flash","forge","flesh","fught",
"float","flock","flood","floor","flour","forth","forty","found","focus","foggy","frame","house","fresh","human","front","frost",
"frown","fruit","humor","funny","hurry","hotel","glare","glass","gauge","glide","globe","glory","ghost","giant","goods","goose",
"grief","grill","grace","grade","grain","grind","groan","groom","group","grove","grand","grape","grasp","guard","guess","guest",
"guilt","grass","grate","grave","grave","gypsy","great","greed","green","greet","habit","handy","heart","happy","heavy","hedge",
"hardy","harsh","hasty","hatch","hotel","hobby","honey","honor","humid","humor","horri","hurry","horse","ideal","idiom","imply",
"idiot","image","incur","inner","infer","irony","ivory","jeans","jelly","jewel","juice","kneel","knife","knock","label","labor",
"large","legal","laser","laugh","lemon","level","learn","lease","leave","light","limit","linen","logic","loose","lorry","loser",
"liver","lotus","lousy","lover","lobby","local","lower","loyal","lucky","lunar","lunch","lyric","madam","magic","March","march",
"major","match","maybe","mayor","mercy","merit","merry","means","medal","media","metal","meter","melon","miner","minor","minus",
"money","month","moral","model","modem","motel","motif","motor","motto","moist","mourn","mouse","mouth","movie","muddy","music",
"needy","nerve","never","naive","naked","niece","noble","noise","noisy","oasis","north","novel","novel","occur","ocean","nurse",
"offer","often","onset","other","owner","paint","panda","panel","panic","pants","paste","paper","pause","peace","peach","party",
"pedal","penis","penny","petty","phone","perch","peril","piano","piece","piety","pilot","pious","pitch","pizza","point","place",
"plain","plane","plant","plate","Plato","pound","pound","power","press","price","pride","prime","print","prone","proof","prize",
"probe","prose","proud","prove","psalm","pulse","pupil","PUPPY","quite","quote","radar","radio","purse","rainy","raise","quake",
"range","rapid","queen","queer","quest","queue","quick","quiet","razor","reach","react","Qread","ready","rebel","rebel","reign",
"refer","relax","renew","repay","repel","reply","rough","round","route","right","royal","rival","river","roach","roast","robin",
"robot","ruler","rumor","rusty","salad","scold","Satan","scorn","scout","scrap","sauce","scare","scarf","seize","scary","scene",
"sense","sheep","sheep","serum","shelf","shell","shift","shine","shiny","serve","seven","sever","shock","shoot","shore","sewer",
"shade","shady","shaft","shout","shake","shame","shape","share","sharp","shave","sight","silly","since","skate","skill","skirt",
"slash","slave","sleep","slice","slide","slope","small","smart","smell","smile","sixty","smoke","snack","snail","snake","sorry",
"snowy","sober","sound","sound","south","solar","space","spade","spare","speak","solid","solve","speed","spell","spend","sperm",
"spice","spill","split","state","state","spoil","spoon","sport","spray","steak","squad","steam","steel","steep","steer","stack",
"stage","stair","stale","stall","stamp","stand","stiff","still","sting","stare","start","stool","stoop","store","storm","story",
"straw","sugar","study","stuff","stuff","style","super","swing","surge","tally","swear","sweat","sweep","sweet","table","taboo",
"taste","tasty","teach","thank","theft","theme","tempt","these","thick","thief","thigh","thing","think","tense","third","those",
"three","throw","thumb","topic","total","tiger","tight","timid","tough","towel","tower","tired","title","toast","today","toxic",
"trace","track","trade","train","train","trunk","trust","truth","tumor","treat","trend","trial","tribe","trick","tutor","twice",
"twist","troop","ulcer","uncle","under","until","upend","upper","undue","urban","usage","unify","union","usher","usual","unite",
"unity","value","vapor","virus","visit","Venus","vital","vivid","vocal","vogue","verse","vomit","voter","vowel","video","villa",
"wagon","waist","waken","whale","wheat","wheel","waste","watch","watch","water","where","which","while","weary","weave","white",
"whole","whose","weigh","widen","width","windy","wrist","write","wrong","yacht","witch","yearn","yeast","yield","youth","woman",
"world","worry","worse","worth","wound","zebra"];

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
  const [keyBoardMask, setKeyBoardMask] = useState('');

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

        let keyHistory = keyBoardMask;
        for(let i=0; i<inputStr.length;i++){
          if(!keyHistory.includes(inputStr[i]) && !ans.toUpperCase().includes(inputStr[i])){
            keyHistory+=inputStr[i];
          }
        }
        setKeyBoardMask(keyHistory);

        currentLine++;
        inputStr='';
      }
    }
  }

  return (
    <div className="App">
      <h1>Chris's Wordle</h1>
      <GameBoard input={input}/>
      <Keyboard keyEvent={recKey} mask={keyBoardMask}/>
    </div>
  );
}

export default App;
