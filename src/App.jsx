import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Homepage,
  About,
  Adoption,
  Care,
  Login,
  Register,
  Cats,
  CatName,
  Dogs,
  DogName,
  NotFound,
} from "./pages/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about-us" element={<About />}></Route>
      <Route path="/paws-adoption" element={<Adoption />}></Route>
      <Route path="/paws-care" element={<Care />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/cats" element={<Cats />}></Route>
      <Route path="/cats:name" element={<CatName />}></Route>
      <Route path="/dogs" element={<Dogs />}></Route>
      <Route path="/dogs:name" element={<DogName />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
