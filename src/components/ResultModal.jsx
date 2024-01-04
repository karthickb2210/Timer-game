import { useRef ,forwardRef } from "react";
const Resultmodal = forwardRef(function ResultModal({onReset,targetTime,timeRem},ref){
  const dialog = useRef();
  const userLost = timeRem <=0;
  const formattedTime = (timeRem/1000).toFixed(2);
  const score = Math.round((1-timeRem/(targetTime*1000))*100)

    return(
        <dialog ref={ref} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score :{score}</h2> }
            <p>
                The target time was <strong>{targetTime} seconds</strong>
            </p>
            <p>
                Ypu stopped the timer with <strong>{formattedTime}seconds left </strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
})
export default Resultmodal