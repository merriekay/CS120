import { useState } from "react";
import React from "react";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <div>
      <label for="name">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {name !== "" && <p>Your name is {name}.</p>}
      </label>
    </div>
  );
}
