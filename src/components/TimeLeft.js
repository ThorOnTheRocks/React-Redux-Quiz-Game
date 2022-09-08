import React, { useState, useEffect } from "react";

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState(60);


  useEffect(() => {
    console.log('[useEffect] setup')
    const interval = setInterval(() => {
      console.log('[useEffect] fire interval')
      setTimeLeft(prev => prev - 1)
    }, 1000)
    return () => {
      clearInterval(interval)
      console.log('[useEffect] cleanup')
    }
  }, [])

  return (
    <div>
      <p>{timeLeft}</p>
    </div>
  );
};

export default TimeLeft;
