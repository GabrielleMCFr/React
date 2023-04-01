import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { AppointmentList } from "../../components/AppointmentsList/AppointmentsList";


export const AppointmentsPage = (props) => {

  const { contacts, appointments, addAppointment } = props;
  
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    addAppointment(newAppointment);
    setTime('');
    setContact('');
    setTitle('');
    setDate('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <AppointmentList appointments={appointments} />
      </section>
    </div>
  );
};
