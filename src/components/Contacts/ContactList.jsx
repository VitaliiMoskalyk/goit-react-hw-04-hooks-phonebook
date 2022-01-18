import propTypes, { object } from "prop-types";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteFunction2 }) => {
  return (
    <>
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ol key={contact.id}>
            <ContactItem
              contact={contact}
              deleteFunction={() => deleteFunction2(contact.id)}
            />
          </ol>
        ))
      ) : (
        <p>no contacts</p>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(object).isRequired,
  deleteFunction2: propTypes.func.isRequired,
};

export default ContactList;
