import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Container from "./components/Container";
import shortid from "shortid";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./App.module.css";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("email", "");
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? toast.error(`${name} is already in contacts`)
      : setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const deleteContact = (contactId) => {
    setContacts(() => contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={s.title}>Contacts</h2>

      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contactsToRender={getVisibleContacts()}
        deleteContact={deleteContact}
      />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default App;
