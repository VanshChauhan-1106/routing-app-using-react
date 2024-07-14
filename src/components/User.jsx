import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { name, id } = useParams();

  return (
    <div className="bg-gray-600 p-5 text-white text-2xl rounded-full">
      <h1>UserName : {name}</h1>
      <h1>UserId : {id}</h1>
    </div>
  );
}

export default User;
