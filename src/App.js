import {useState, useEffect} from 'react';
import './App.css';


function App(){
  const[time, setTime] = useState(0);

let inp;
  const handleKey = (event)=>{
    if(event.key === 'Enter'){
       inp = Math.floor(event.target.value);
      console.log(inp);
      if(isNaN(inp)){
        setTime(0);
      }
      else{
        setTime(inp);
      }
    } 
  };
 

  useEffect(()=>{
    let intervalId;
    if(time > 0){
      intervalId = setInterval(()=>{
        setTime((prevTime)=>
          prevTime - 1)
      },1000)
    }
    else{
      setTime(0);
    }
    return () =>clearInterval(intervalId);
  }, [time]);

  return(
    <div id='main'>
      <div id='inside' >
      <h1>Count Down Timer.</h1>⏳
      <h6>Enter Your Time in Seconds.</h6>
      <input type="text" id="timeinp" onKeyDown={handleKey}/>
      <h3>Your Time Starts Now</h3>
      <div id="timedisplay"><h5>{time}</h5></div></div>
    </div>
  )
}



export default App;