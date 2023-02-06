import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CounterCustom from "./components/CounterCustom";
import MyReducer from "./components/MyReducer";
import NotFound from "./components/Notfound";
import BombButton from "./components/TestError";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CounterCustom />} />
        <Route exact path="/MyReducer" element={<MyReducer />} />
        <Route exact path="/TestError" element={<BombButton />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
