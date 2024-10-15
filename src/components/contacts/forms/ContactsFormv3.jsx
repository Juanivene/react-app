import PropTypes from "prop-types";
import { useState } from "react";
// --------------------------
// COMPONENTES CONTROLADOS
// --------------------------

const ContactsFormv3 = (props) => {
  const { contactos, setContactos } = props;

  console.log("💤");

  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [numero, setNumero] = useState();
  const [imagen, setImagen] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="mb-2">
        <label htmlFor="input-nombre" className="form-label">
          Nombre
        </label>
        <input
          required
          maxLength={25}
          type="text"
          placeholder="juan"
          id="input-nombre"
          className="form-control"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <div className="invalid-feedback">
          <span className="badge text-b-danger">Ingrese un nombre valido</span>
        </div>
      </fieldset>

      <fieldset className="mb-2">
        <label htmlFor="input-email" className="form-label">
          Email
        </label>
        <input
          required
          maxLength={50}
          type="text"
          placeholder="juan@gmail.com"
          id="input-email"
          className="form-control"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="invalid-feedback">
          <span className="badge text-b-danger">Ingrese un email valido</span>
        </div>
      </fieldset>

      <fieldset className="mb-2">
        <label htmlFor="input-numero" className="form-label">
          Numero
        </label>
        <input
          required
          maxLength={10}
          type="text"
          placeholder="1234.."
          id="input-numero"
          className="form-control"
          value={numero}
          onChange={(e) => {
            setNumero(e.target.value);
          }}
        />
        <div className="invalid-feedback">
          <span className="badge text-b-danger">Ingrese un numero valido</span>
        </div>
      </fieldset>

      <fieldset className="mb-2">
        <label htmlFor="input-img" className="form-label">
          Imagen
        </label>
        <input
          required
          type="text"
          placeholder="https.."
          id="input-img"
          className="form-control"
          value={imagen}
          onChange={(e) => {
            setImagen(e.target.value);
          }}
        />
        <div className="invalid-feedback">
          <span className="badge text-b-danger">Ingrese una url valida</span>
        </div>
      </fieldset>
      <div className="text-end mt-3">
        <button className="btn btn-danger" type="submit">
          Cargar
        </button>
      </div>
    </form>
  );
};

export default ContactsFormv3;
ContactsFormv3.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
