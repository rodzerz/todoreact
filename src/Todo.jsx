
import React, { useState } from 'react';



function ToDo({ task, completed }) {

    const [check, setCheck] = useState(completed);

    return (
        <label>
        <input
          type="checkbox"
          checked={check}  // checkbox būs atzīmēts, ja `check` ir true
          onChange={() => setCheck(!check)}  // mainām stāvokli, kad tiek noklikšķināts
        />
        {task}  {/* Izvēlētā uzdevuma teksts */}
      </label>
    );
  }
  
  export default ToDo;
  
  