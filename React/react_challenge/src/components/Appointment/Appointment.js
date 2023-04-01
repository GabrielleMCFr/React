import React from "react";

export const Appointment = ({appointment}) => {

  return (
    <div className="tile-container">
        <p className="tile-title"> {appointment.title} </p>
        <p className="tile"> {appointment.contact}</p>
        <p className="tile"> {appointment.date}</p>
        <p className="tile"> {appointment.time}</p>
    </div>
  );
};