import React from "react";

function ContactList({ allTheContacts }) {
  return (
    <div>
      {allTheContacts.map((oneContact, index) => (
        <div key={index}>
          <h1>{oneContact.username}</h1>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
