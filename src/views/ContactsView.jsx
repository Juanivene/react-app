import ContactsTable from "../components/contacts/table/ContactsTable";
// import ContactsFormsv1 from "../components/contacts/forms/ContactsFormsv1";
import ContactsFormv2 from "../components/contacts/forms/ContactsFormv2";
import { useState } from "react";
import { useEffect } from "react";

const contactosEnLs = JSON.parse(localStorage.getItem("contactos")) || [];

const ContactsView = () => {
  const [contactos, setContactos] = useState(contactosEnLs);
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);
  return (
    <>
      <h1>Cargar contacto</h1>
      <hr />
      {/* <ContactsFormsv1 contactos={contactos} setContactos={setContactos} /> */}
      <ContactsFormv2 contactos={contactos} setContactos={setContactos} />
      <ContactsTable contactos={contactos} setContactos={setContactos} />
    </>
  );
};

export default ContactsView;
