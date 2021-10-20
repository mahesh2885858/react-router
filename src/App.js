import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/list";

function App() {
  const [inputText, setInputText] = useState("");
  const [name, setName] = useState([]);
  const [dob, setDob] = useState("");
  const [abs, setAbs] = useState("");
  const [itIsTheFirstEntry, setItIsTheFirstEntry] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    const date = new Date(dob).getUTCFullYear();
    const diff = new Date().getUTCFullYear() - date;
    setAbs(diff);
    const item = {
      id: id,
      name: inputText,
      dateOfBirth: dob,
      difference: diff,
    };
    setItIsTheFirstEntry(false);
    name.push(item);
    console.log(name);
    setDob("");
    setInputText("");
  };


  const onDateOFBirth = (x) => {
    setDob(x);
  };
  const onNameInputChange = (x) => {
    setInputText(x);
    if (!itIsTheFirstEntry) {
      setAbs("");
    }
  };
  return (
    <>
      <Form
        onSubmit={onSubmit}
        onNameInputChange={onNameInputChange}
        onDateOFBirth={onDateOFBirth}
        input={inputText}
        dob={dob}
      />
      <List names={name} abs={abs} />
    </>
  );
}

export default App;
