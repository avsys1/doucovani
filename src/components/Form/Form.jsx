import { useRef, useState } from "react";
import { FormOne } from "./SingleForms/FormOne";
import { FormTwo } from "./SingleForms/FormTwo";
import { FormThree } from "./SingleForms/FormThree";
import { FormFour } from "./SingleForms/FormFour";

import "./form.css";

export function Form() {
  const [x, setX] = useState(1); // Musíme state, protože chceme ukazovat uživateli, v jakém je stádiu.
  const forms = [<FormOne />, <FormTwo />, <FormThree />, <FormFour />];
  return (
    <div id="Form">
      <h1 className="text-xl">Jste na kroku: {x}</h1>
      <div className="single-form">{forms[x - 1]}</div>
      <button
        onClick={() => {
          if (x < 1) return;

          setX((current_x) => current_x - 1); // Udělej 1 + 1
        }}
        hidden={x === 1}
      >
        Krok zpět
      </button>
      <button
        onClick={() => {
          if (x === 4) return;
          setX((current_x) => current_x + 1); // Udělej 1 + 1
        }}
        hidden={x == 4}
      >
        Další krok
      </button>
    </div>
  );
}
