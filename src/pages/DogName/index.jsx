import React from "react";
import { useParams } from "react-router-dom";

function DogName() {
  const params = useParams();
  return (
    <>
      <h1>{params.name}</h1>
    </>
  );
}

export default DogName;
