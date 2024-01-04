import { forwardRef  } from "react";
const Resultmodal = forwardRef(function ResultModal({results,targetTime},ref){
    return(
        <dialog ref={ref} className="result-modal">
            <h2>You {results}</h2>
            <p>
                The target time was <strong>{targetTime} seconds</strong>
            </p>
            <p>
                Ypu stopped the timer with <strong>X seconds left </strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
})
export default Resultmodal