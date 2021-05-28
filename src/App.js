import React, { useState } from "react";
import "./App.css";
import Form from "./app/form/form";
import Menu from "./app/menu/menu";

export default function App() {
  const [database, setDatabse] = useState("");

  const UpdateData = (event) => {
    setDatabse(event);
  };
  return (
    <section>
      <Menu UpdateData={UpdateData} />

      <center>
        <h1>Hola, bienvenido sabemos que quiere viajar con {database} </h1>
      </center>

      <Form />
    </section>
  );
}
