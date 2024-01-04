import { useRef, useState } from "react";
import Resultmodal from "./ResultModal";
export default function Timerchallenge({title,targetTime}){
    const [timeLeft,setTimeLeft] = useState(targetTime*1000);
    const timer = useRef();
    const dialog = useRef();
    const timerIsActive = timeLeft >0 && timeLeft <targetTime*1000;
    if(timeLeft <=0){
        clearInterval(timer.current);      
        dialog.current.showModal();
    }
    function handleReset(){
        setTimeLeft(targetTime*1000);
    }
    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeLeft(prevtime => prevtime-10)
        },10);
    }
    function handleStop(){
        dialog.current.showModal();
        clearInterval(timer.current);
    }
    
    return (
        <>
        <Resultmodal  onReset={handleReset}
         ref={dialog} targetTime={targetTime} timeRem={timeLeft}/>
        <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
        {targetTime} second {targetTime >1 ? 's': ''}
    </p>
    <p> 
        <button onClick={ !timerIsActive ? handleStart:handleStop}>{ !timerIsActive? 'Start':'stop'} challenge</button>
    </p>
    <p className={timerIsActive ? "active" :undefined}> 
    {timerIsActive ? 'timer running':'Timer inactive'}
    </p>
        </section>
        </>
    );
}