import React from "react";

export const ContactPicker = (props) => {
  const {contacts, onChange } = props;
  return (
    <select onChange={onChange}>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {
        contacts?.map((contact, id) => {
          return (
            <option value={contact.name} key={id}>
              {contact.name}
            </option>
          )
        })
      }
    </select>
  );
};
