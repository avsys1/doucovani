import React from "react";
import FrontPage from "./components/FrontPage/FrontPage";
import { Route, Routes } from "react-router-dom";
import { Form } from "./components/Form/Form";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/objednavka" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
