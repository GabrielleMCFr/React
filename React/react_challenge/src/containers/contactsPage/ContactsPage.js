import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const { contacts, addContact } = props;
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [isDuplicate, setIsDuplicate] = useState(false);

 useEffect(() => {
   for (const contact of contacts) {
     if (name === contact.name) {
       setIsDuplicate(true)
       return
     }
   }
 })

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!isDuplicate) {
      const newContact = {name: name, phone: phone, email: email}
      addContact(newContact)
      setName('');
      setPhone('');
      setEmail('');
   }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName}
          phone={phone} 
          setPhone={setPhone}
          email={email} 
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
