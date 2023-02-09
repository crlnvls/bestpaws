import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Best Paws</h1>}></Route>
      <Route path="/about" element={<h1>About</h1>}></Route>
      <Route path="/paws-adoption" element={<h1>Paws Adoption</h1>}></Route>
      <Route path="/login" element={<h1>Login</h1>}></Route>
      <Route path="/register" element={<h1>Register</h1>}></Route>
      <Route path="/cats" element={<h1>Cats</h1>}></Route>
      <Route path="/dogs" element={<h1>Dogs</h1>}></Route>
    </Routes>
  );
};

export default App;
