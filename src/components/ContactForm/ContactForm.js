import { useState } from "react";
import shortid from "shortid";
import s from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const idName = shortid.generate();
  const idNumber = shortid.generate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contact = { name, number };

  const handleChange = e => {
    const { name, value } = e.target; 
    switch (name) {
      case "name":
        setName(value)
        break;
      case "number":
        setNumber(value);
        break;
    
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
     onSubmit(contact);
    setName("");
    setNumber("");
  }

 return (

    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={idName}>
        <p className={s.title}>Name</p>

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          id={idName}
          className={s.input}
        />
      </label>

      <label htmlFor={idNumber}>
        <p className={s.title}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          id={idNumber}
          className={s.input}
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}