import { forwardRef, useImperativeHandle, useRef } from "react";
import { postLeaderboard } from "./httpReq.js";

const Result = forwardRef(function Result({ time, onReset, pname }, ref) {
  const dialog = useRef();
  const msg = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const timeT = Math.round(time);

  if (time === -1) {
    msg.current = <p>Too Early ;(</p>;
  } else if (time < 200) {
    msg.current = <p>Too Fast! Are you a CaT??</p>;
  } else if (time < 500) {
    msg.current = <p>Try Harder ;p</p>;
  } else if (time < 1000) {
    msg.current = <p>You can do better!</p>;
  } else {
    msg.current = <p>Turtles can do better!!</p>;
  }

  async function handleClick() {
    if (time === -1) {
      dialog.current.close();
    } else {
      try {
        await postLeaderboard(pname, timeT);
      } catch (err) {
        console.log(err);
      }
    }
    dialog.current.close();
  }

  return (
    <dialog
      ref={dialog}
      className='result-modal'
    >
      <h2>Reaction time :{timeT}</h2>
      {msg.current}
      <form
        method='dialog'
        onClose={onReset}
        onSubmit={onReset}
      >
        <button
          onClick={handleClick}
          method='dialog'
        >
          Alright
        </button>
      </form>
    </dialog>
  );
});
export default Result;
