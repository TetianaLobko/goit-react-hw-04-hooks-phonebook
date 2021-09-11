import React from "react";
import s from "./ContactList.module.css";
import IconButton from "../IconButton/";
import { ReactComponent as AddIcon } from "../../icons/delete.svg";

const ContactList = ({ contactsToRender, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contactsToRender.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <IconButton onClick={() => deleteContact(id)}>
            <AddIcon width="15" height="15" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;