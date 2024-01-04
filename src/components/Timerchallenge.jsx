import { useRef, useState } from "react";
import Resultmodal from "./ResultModal";
export default function Timerchallenge({title,targetTime}){
    // const [timerExpired,setTimerExpired] = useState(false);
    // const [timerstarted,setTimerstarted] = useState(false);
    const [timeLeft,setTimeLeft] = useState(targetTime*1000);
    const timer = useRef();
    const dialog = useRef();
    const timerIsActive = timeLeft >0 && timeLeft <targetTime*1000;
    if(timeLeft <=0){
        clearInterval(timer.current);
        setTimeLeft(targetTime*1000);
        dialog.current.open();
    }
    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeLeft(prevtime => prevtime-10)
        },10)
    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    
    return (
        <>
        <Resultmodal ref={dialog} targetTime={targetTime} results="loss"/>
        <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
        {targetTime} second {targetTime >1 ? 's': ''}
    </p>
    <p> 
        <button onClick={ !timerIsActive ? handleStart:handleStop}>{ !timerstarted ? 'Start':'stop'} challenge</button>
    </p>
    <p className={timerIsActive ? "active" :undefined}> 
    {timerIsActive ? 'timer running':'Timer inactive'}
    </p>
        </section>
        </>
    );
}