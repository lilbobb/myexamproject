import { useState } from "react";
import UseCustomHook from "./UseCustomHook";
import Navbar from "./NavBar";

function CounterCustom() {
  const [count, increment, decrement, reset, setValue] = UseCustomHook(0);
  const [myValue, setMyValue] = useState("");

  const handleChange = (e) => {
    setMyValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(myValue);
  };

  return (
    <div className="counter">
      <Navbar />
      <div className="circle">
        <h2 className="blur">
          Interactive <br /> Counters
        </h2>
      </div>
      TRY THEM OUT
      <h1>Custom Count : {count}</h1>
      <div className="btn">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <form onSubmit={handleSubmit}>
          <input
            value={myValue}
            type="number"
            min={-100}
            max={100}
            placeholder="Enter a number"
            onChange={handleChange}
            className="input"
          />
          <button onClick={() => setMyValue(+myValue)}>Set Value</button>
        </form>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterCustom;
