import { useEffect, useState, useRef } from "react";

export default function Timer() {
  const [count, setCount] = useState(60);
  const timerRef = useRef(null);

  const fixTime =(time)=>{
    return time < 10 ? `0${time}` : time
  }
  const formatTimeString = (time)=>{
    const seconds = time%60;
    const minutes = Math.floor(time/60)
    return `${fixTime(minutes)}:${fixTime(seconds)}`
  }
  useEffect(() => {
    const cleanUpFunction = () => {
      console.log("cleanUpFunction is Called");
      handleStop();
    };
    return cleanUpFunction;
  }, []);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      console.log("setInterval is running ", Date.now());
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const handleReset = () => {
    handleStop();
    setCount(60);
  };
  return (
    <div>
      <h2>Timer : {formatTimeString(count)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
