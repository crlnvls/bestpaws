import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}></Route>
      <Route path="/about-us" element={<Pages.About />}></Route>
      <Route path="/paws-adoption" element={<Pages.Adoption />}></Route>
      <Route path="/paws-care" element={<Pages.Care />}></Route>
      <Route path="/login" element={<Pages.Login />}></Route>
      <Route path="/register" element={<Pages.Register />}></Route>
      <Route path="/cats" element={<Pages.Cats />}></Route>
      <Route path="/cats/:name" element={<Pages.CatName />}></Route>
      <Route path="/dogs" element={<Pages.Dogs />}></Route>
      <Route path="/dogs/:name" element={<Pages.DogName />}></Route>
      <Route path="*" element={<Pages.NotFound />}></Route>
    </Routes>
  );
};

export default App;
