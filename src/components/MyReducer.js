import { useReducer } from "react";
import Navbar from "./NavBar";

const initialState = { count: 0 };

function CounterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "setValue":
      return { count: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

const MyReducer = () => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  const { count } = state;

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  function setValue() {
    const value = prompt("Enter a value:");
    dispatch({ type: "setValue", payload: parseInt(value) });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  return (
    <div className="counter">
      <Navbar />
      <div className="circle">
        <h2 className="blur">
          Interactive <br /> Counters
        </h2>
      </div>
      TRY THEM OUT
      <h1> Reducer Count : {count}</h1>
      <div className="btn">
        <button id="rbtn" onClick={increment}>
          Increment
        </button>
        <button id="rbtn" onClick={decrement}>
          Decrement
        </button>
        <button id="rbtn" onClick={setValue}>
          Set Value
        </button>
        <button id="rbtn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default MyReducer;
