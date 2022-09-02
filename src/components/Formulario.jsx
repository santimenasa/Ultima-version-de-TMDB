import React from "react";

const Formulario = () => {
  return (
    <div className="layout m-5" id="formu">
      <h3 className="title is-3">Formulario de registro</h3>
      <form>
        <label className="label my-3">Email</label>
        <input className="input" type="text" placeholder="Email" />
        <label className="label my-3">Password</label>
        <input className="input" type="text" placeholder="Password" />
        <label className="label my-3">Name</label>
        <input className="input" type="text" placeholder="Name" />
        <label className="label my-3">Last Name</label>
        <input className="input" type="text" placeholder="Last Name" />

        <button className="button is-link my-5">Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
