import PropTypes from "prop-types";
import ContactsRow from "./ContactsRow";
import "./ContactsRow.css";
import Swal from "sweetalert2";

const ContactsTable = (props) => {
  const { contactos, setContactos } = props;
  const deleteContacto = (idContacto, nombreContacto) => {
    Swal.fire({
      title: "Atencion",
      text: `Estas por eliminar ${nombreContacto}.¿Estas seguro que deseas eliminarlo?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "SI , eliminar",
      cancelButtonText: "NO",
      confirmButtonColor: "red",
    }).then((res) => {
      if (res.isConfirmed) {
        const nuevaLista = contactos.filter(
          (contacto) => contacto.codigo !== idContacto
        );
        setContactos(nuevaLista);
        Swal.fire({
          title: `Contacto ${nombreContacto} ha sido eliminado correctamente`,
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  return (
    <>
      <section className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto, index) => {
              return (
                <ContactsRow
                  deleteContacto={deleteContacto}
                  key={contacto.codigo}
                  contacto={contacto}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ContactsTable;

ContactsTable.propTypes = {
  contactos: PropTypes.array.isRequired,
  setContactos: PropTypes.func.isRequired,
};
