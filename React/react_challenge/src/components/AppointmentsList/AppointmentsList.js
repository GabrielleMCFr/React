import React from "react";
import { Appointment } from "../Appointment/Appointment";


export const AppointmentList = ({appointments}) => {
  return (
    <div>
      {
        appointments?.map((appointment, id )=> {
            return <Appointment appointment={appointment} key={id}/>
      })
      }
    </div>
  );
};