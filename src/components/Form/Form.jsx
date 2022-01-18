import { useState } from "react";
import { nanoid } from "nanoid";
import { FormWrapper, FormButton } from "./Form.styled";
import propTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactsAdder = (evt) => {
    evt.preventDefault();
    const newContact = generateContact(name, number);
    onSubmit(newContact);
    setName("");
    setNumber("");
  };

  const generateContact = (name, number) => {
    return { name, number, id: nanoid(4) };
  };
  return (
    <FormWrapper onSubmit={contactsAdder}>
      <label htmlFor={name}>
        <input
          value={name}
          type="text"
          autoComplete="off"
          placeholder="Ann Ferdinand"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(evt) => setName(evt.target.value)}
        />
      </label>

      <label htmlFor={number}>
        <input
          value={number}
          onChange={(evt) => setNumber(evt.target.value)}
          type="tel"
          autoComplete="off"
          placeholder="+3805098765432"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <FormButton type="submit">Add contact</FormButton>
    </FormWrapper>
  );
};

Form.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
export default Form;
