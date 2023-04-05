// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
const [color, setColor ] = useState()
 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() =>setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick= {() =>setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() =>setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}


/*

// refractorized

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState("Tomato");

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}


*/
