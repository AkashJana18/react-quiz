import "./Timer.scss";
import React, { useEffect, useRef, useState } from "react";

const Timer = ({ duration, onTimeUp }) => {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 0.1);
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded((counter / duration) * 100);

    if (counter >= duration) {
      clearInterval(intervalRef.current);

      onTimeUp();
    }
  }, [counter]);

  return (
    <div className="timer-container">
      <div className="progress-bar"
      style={{
        width: `${progressLoaded}%`,
        backgroundColor: `${
            progressLoaded < 40 ? 'lightgreen' : progressLoaded < 70 ? 'orange' : 'red'
        }`
      }}
      ></div>
    </div>
  );
};

export default Timer;
