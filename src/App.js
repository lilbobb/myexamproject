import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CounterCustom from "./components/CounterCustom";
import ErrorBound from "./components/Errorbound";
import MyReducer from "./components/MyReducer";
import NotFound from "./components/Notfound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<CounterCustom />} />
        <Route exact path="/MyReducer" element={<MyReducer />} />
        <Route exact path="/TestError" element={<ErrorBound />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
