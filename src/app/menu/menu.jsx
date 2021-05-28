import React from "react";
import "./menu.css";

export default function Menu({ UpdateData }) {
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
    <div className="Menu">
      <ul>
        {data.map((element) => {
          return (
            <li key={element.id}>
              <button
                className="btn btn-success"
                onClick={() => {
                  UpdateData(element.name);
                }}
              >
                {element.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
