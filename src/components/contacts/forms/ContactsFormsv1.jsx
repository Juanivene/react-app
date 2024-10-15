import { useRef } from "react";
import {
  validateEmail,
  validateName,
  validateNumber,
  validateUrl,
} from "../../../utilities/validators";
import { Contacto } from "../Contact";
import PropTypes from "prop-types";

const ContactsFormsv1 = (props) => {
  const { contactos, setContactos } = props;

  const $inputNombre = useRef();
  const $inputEmail = useRef();
  const $inputNumero = useRef();
  const $inputImg = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validateName($inputNombre.current) ||
      !validateEmail($inputEmail.current) ||
      !validateNumber($inputNumero.current) ||
      !validateUrl($inputImg.current)
    ) {
      return;
    }

    const nombre = $inputNombre.current.value;
    const email = $inputEmail.current.value;
    const numero = $inputNumero.current.value;
    const img = $inputImg.current.value;

    const nuevoContacto = new Contacto(nombre, email, numero, img);
    const nuevaListaContacos = [...contactos, nuevoContacto];
    setContactos(nuevaListaContacos);
    // localStorage.setItem("contactos", JSON.stringify(nuevaListaContacos)); //los envio desde aca en vez de useEffect
    alert("guardado exitosamente");
    e.target.reset();
    $inputEmail.current.classList.remove("is-valid" , "is-invalid")
    $inputNumero.current.classList.remove("is-valid" , "is-invalid")
    $inputNombre.current.classList.remove("is-valid" , "is-invalid")
    $inputImg.current.classList.remove("is-valid" , "is-invalid")
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
          ref={$inputNombre}
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
          ref={$inputEmail}
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
          ref={$inputNumero}
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
          ref={$inputImg}
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

export default ContactsFormsv1;

ContactsFormsv1.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
