import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleChange = ({target}) =>{
    if (target.id === 'name') {
      setName(target.value)
    }

    else if (target.id === 'tel') {
      setPhone(target.value)
    }

    else if (target.id === 'email') {
      setEmail(target.value)
    }

    return
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        id="name"
        aria-label="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}  
      />
      <input 
        type="tel"
        id="tel"
        aria-label="phone"
        placeholder="Phone"
        value={phone}
        onChange={handleChange}
        pattern='^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$'
      />
      <input 
        type="email"
        id="email"
        aria-label="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input type="submit" value="Save" />
    </form>
  );
};
