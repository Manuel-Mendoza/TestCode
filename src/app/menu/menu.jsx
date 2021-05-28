import React from "react";

export default function Menu() {
  const data = [
    {
      id: "1",
      name: "Vivair",
    },
    {
      id: "2",
      name: "Avianca",
    },
  ];
  return (
    <div>
      <ul>
        {data.forEach((element) => {
          <li>
            <p>HOla</p>
          </li>;
          console.log(element);
        })}
        <li>Hola</li>
        <li>Mundo</li>
      </ul>
    </div>
  );
}
