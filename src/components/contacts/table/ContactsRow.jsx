import PropTypes from "prop-types";

const ContactsRow = (props) => {
  const { contacto, index, deleteContacto } = props;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          src={contacto.imagen}
          alt={contacto.nombre}
          className="img-table"
        />
      </td>
      <td>{contacto.nombre}</td>
      <td>{contacto.email}</td>
      <td>{contacto.numero}</td>
      <td>
        <button className="btn btn-warning me-2" type="button">
          Editar
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => deleteContacto(contacto.codigo, contacto.nombre)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ContactsRow;
ContactsRow.propTypes = {
  contacto: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  deleteContacto: PropTypes.func.isRequired,
};
