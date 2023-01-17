import { useState } from "react";

function UseCustomHook(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const setMyValue = (myValue) => {
    setCount(myValue);
    
  };
  return [count, increment, decrement, reset, setMyValue];
}

export default UseCustomHook;
