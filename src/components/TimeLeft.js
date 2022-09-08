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
    <>
      <p className="h-20 w-20 flex justify-center items-center border-8 border-purple-500 rounded-full my-4 text-3xl text-purple-500">{timeLeft}</p>
    </>
  );
};

export default TimeLeft;
