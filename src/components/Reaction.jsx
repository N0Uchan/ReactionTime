import { useState , useRef } from "react";
import Image from './Image.jsx';
import Result from './ResultModal.jsx';
// const imgId = Math.floor(Math.random() * 11 + 1);

export default function Reaction() {
    const timer = useRef();
    const interv = useRef();
    const imgId = useRef();
    const dialog = useRef();
    // const interv = useRef();dont really need ref cuz only one use of interval
    const [timerZero,setTimerZero] = useState(false);
    const [reactionStarted,setReactionStarted] = useState(false);
    const [reactionTime,setReactionTime] = useState(-1);
    
    

    function handleStart() {
        imgId.current = Math.floor(Math.random() * 11 + 1);

        const timerms = Math.random() * 5000 + 500;
        timer.current = setTimeout(()=>{
            setTimerZero(true)
            interv.current = setInterval(()=>{
                setReactionTime((prev) => {
                    const newTime = prev + 3.5
                    return newTime;
                });
            }, 3.5 );
        } , timerms );
        setReactionStarted(true);
    }

    function handleCat() {
        clearTimeout(timer.current);
        clearInterval(interv.current);  
        dialog.current.open();
        setReactionStarted(false);
        setTimerZero(false);
    }
    function onReset() {
        setReactionTime(-1);
    }
    const CImage = <Image imgId={imgId.current}/>

    return (
        <section className="reaction" >
            <h2 >Reaction Time ;0</h2>
            <p>
                {timerZero ? CImage : 'Click when you see a Cat'}
            </p>
                <button onClick={reactionStarted ? handleCat : handleStart} >{reactionStarted ? 'Cat!' : 'Start'}</button>
            <Result ref={dialog} time={reactionTime} onReset={onReset} />
        </section>
    )

}