import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(5);

  useEffect(() => {
   const timerId = setInterval(() => {
    console.log("setInterval is running",count,Date.now())
        setCount((prev)=>{
            if (prev === 1) {
                clearInterval(timerId);
                return 0
            }
            return prev-1;
        })
    }, 1000);
 
    const cleanUpFunction = ()=>{
        console.log("cleanUpFunction is called");
        clearInterval(timerId);
    }
    // As we have written a return inside the useEffect, React will internally make sure
    // to  invoke this return only when the component is destroyed on unmounted   
    return cleanUpFunction;

  }, []);

  // console.log("count outside is",count)
  return (
    <div>
      <h2>Timer is {count}</h2>
    </div>
  );
}
