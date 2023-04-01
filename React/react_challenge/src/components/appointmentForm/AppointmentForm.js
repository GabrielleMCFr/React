import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = ({target}) =>{
    if (target.id === 'title') {
      setTitle(target.value)
    }

    else if (target.id === 'time') {
      setTime(target.value)
    }

    else if (target.id === 'contact') {
      setContact(target.value)
    }

    else if (target.id === 'date') {
      setDate(target.value)
    }

    return
  }

  const handleContactChange = ( {target} ) => {
    setContact(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
        <ContactPicker contacts={contacts} onChange={handleContactChange}/>
        <input 
        type="text"
        id="title"
        aria-label="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}  
      />
      <input 
        type="date"
        id="date"
        aria-label="date"
        placeholder="Date"
        value={date}
        
        onChange={handleChange}  
      />
      <input 
        type="time"
        id="time"
        aria-label="time"
        placeholder="Time"
        value={time}
        onChange={handleChange}  
      />
        <input type="submit" value="Save" />
    </form>
  );
};
