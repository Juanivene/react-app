import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Contacto } from "../Contact";

const ContactsFormv2 = (props) => {
  const { contactos, setContactos } = props;

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    console.log("♻");
    const nuevoContacto = new Contacto(
      data.nombre,
      data.email,
      data.imagen,
      data.numero
    );
    const nuevaListaContacos = [...contactos, nuevoContacto];
    setContactos(nuevaListaContacos);
    alert("guardado exitosamente");
    reset();
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <fieldset className="mb-2">
        <label htmlFor="input-nombre" className="form-label">
          Nombre
        </label>
        <input
          required
          type="text"
          placeholder="juan"
          id="input-nombre"
          className={`form-control ${errors.nombre ? `is-invalid` : ``}`}
          {...register("nombre", {
            required: true,
            maxLength: {
              value: 40,
              message: "El nombre no pude superar los 40 caracteres",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Ingrese un nombre valido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.nombre?.message}</span>
        </div>
      </fieldset>

      <fieldset className="mb-2">
        <label htmlFor="input-email" className="form-label">
          Email
        </label>
        <input
          required
          type="text"
          placeholder="juan@gmail.com"
          id="input-email"
          className={`form-control ${errors.email ? `is-invalid` : ``}`}
          {...register("email", {
            required: true,
            maxLength: {
              value: 50,
              message: "El email no puede superar los 50 caracteres",
            },
            minLength: {
              value: 5,
              message: "El email debe tener al menos 5 caracteres",
            },
            pattern: {
              value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              message: "Ingrese un email valido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.email?.message}</span>
        </div>
      </fieldset>

      <fieldset className="mb-2">
        <label htmlFor="input-numero" className="form-label">
          Numero
        </label>
        <input
          required
          type="text"
          placeholder="1234.."
          id="input-numero"
          className={`form-control ${errors.numero ? `is-invalid` : ``}`}
          {...register("numero", {
            required: true,
            maxLength: {
              value: 10,
              message: "El campo debe contener 10 numeros",
            },
            minLength: {
              value: 10,
              message: "El campo debe contener 10 numeros",
            },
            pattern: {
              value: /^\d+$/,
              message: "Ingrese un  numero valido",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.numero?.message}</span>
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
          className={`form-control ${errors.imagen ? `is-invalid` : ``}`}
          {...register("imagen", {
            required: true,
            minLength: {
              value: 3,
              message: "Ingrese una url valida",
            },
            pattern: {
              value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/,
              message: "Ingrese una url valida",
            },
          })}
        />
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{errors.imagen?.message}</span>
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

export default ContactsFormv2;
ContactsFormv2.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
