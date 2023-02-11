import React,{useState,useEffect} from 'react';

const StopCouter = () =>{
  const [counter,setCounter] = useState(0);
  const [isCounterRunning,setIsCounterRunning] = useState(false);

  useEffect(()=>{
    if(!isCounterRunning) return ()=>{}
    let intervalId;
    intervalId = setInterval(()=>{
         setCounter(counter+1);
    },1000);
    return ()=>{
      clearInterval(intervalId);
    }
  },[counter,isCounterRunning]) 

  return(
    <>
     {counter}
     <button onClick={()=>setIsCounterRunning(true)}>Start</button>
     <button onClick={()=>setIsCounterRunning(false)}>Stop</button>
    </>
  )
}

export default StopCouter;