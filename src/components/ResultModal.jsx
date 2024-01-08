import { forwardRef, useImperativeHandle , useRef } from "react";
const Result = forwardRef(function Result({time , onReset},ref) {
    const dialog = useRef();
    const msg = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });
    const timeT = Math.round(time);

    if(time === -1){ msg.current = <p>Too Early ;(</p> }
    else if(time < 200){ msg.current = <p>Too Fast! Are you a CaT??</p>;}
    else if(time < 500){ msg.current = <p>Try Harder ;p</p>;}
    else if(time < 1000){ msg.current = <p>You can do better!</p>;}
    else{msg.current = <p>Turtles can do better!!</p>;}


    return (
        <dialog ref={dialog} className="result-modal">
            <h2>Reaction time :{timeT}</h2>
            {msg.current}
            <form method="dialog" onClose={onReset} onSubmit={onReset} >
                <button method="dialog" >Close</button>
            </form>
        </dialog>
    )
})
export default Result;