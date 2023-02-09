import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Best Paws</h1>}></Route>
      <Route path="/cats" element={<h1>Cats</h1>}></Route>
      <Route path="/dogs" element={<h1>Dogs</h1>}></Route>
    </Routes>
  );
};

export default App;
