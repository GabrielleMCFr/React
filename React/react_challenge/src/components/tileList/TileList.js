import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      {
        contacts?.map((contact, id )=> {
        return <Tile contact={contact} key={id}/>
      })
      }
    </div>
  );
};
