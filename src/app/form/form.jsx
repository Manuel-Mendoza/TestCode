import React, { useState } from "react";

const edad = [];

const data = {
  namee: "#name",
  email: "#email",
  phone: "#phone",
  select: "#select",
};
export default function Form() {
  for (let i = 18; i < 101; i++) {
    edad.push([i]);
  }
  const [state, setState] = useState([]);
  return (
    <center>
      <p>Por favor diligenciar el siguiente formulario:</p>
      <form
        style={{
          width: "30%",
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        className="form-group"
      >
        <input
          id="name"
          className="form-control"
          type="text"
          placeholder="Nombre Completo"
          required
        />
        <input
          id="email"
          required
          className="form-control"
          type="email"
          placeholder="Email"
        />
        <input
          id="phone"
          required
          className="form-control"
          type="number"
          placeholder="Celular"
        />
        <select id="select" className="form-control">
          <option> Elija una edad </option>
          {edad.map((element) => {
            return (
              <>
                <option value={element}>{element}</option>
              </>
            );
          })}
        </select>
        <button
          onClick={(e) => {
            for (const key in data) {
              setState(data[key]);
              console.log(document.querySelector(data[key]).value);
              setState({
                key: (document.querySelector(data[key]).value = ""),
              });
            }
            document.querySelector(".message").classList.add("view");
            setTimeout(() => {
              document.querySelector(".message").classList.remove("view");
            }, 5000);
            e.preventDefault();
          }}
          className="btn btn-success"
        >
          Enviar información
        </button>
        <div className="message">
          <span>
            <h1>
              Tu información fue enviada con éxito, estaremos en contacto
              contigo
            </h1>
          </span>
        </div>
      </form>
    </center>
  );
}
