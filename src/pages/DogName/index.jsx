import React from "react";
import { useParams } from "react-router-dom";

function DogName() {
  const { name } = useParams();
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default DogName;
