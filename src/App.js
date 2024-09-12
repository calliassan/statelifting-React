import logo from "./logo.svg";
import "./App.css";
import A from "./A";
import B from "./B";
import { useState } from "react";
import Getusers from "./users";
import C from "./c";
import D from "./D";
import Debounce from "./Debounce";

function App() {
  // const [val, setval] = useState(0);
  // const data = (valueA) => {
  //   setval(valueA);
  // };
  // *********lifting state********
  // const [users, setusers] = useState([]);
  // const showusers = (catchusers) => {
  //   setusers(catchusers);
  // };
  // ***********Debouncing*********

  return (
    <div className="App">
      {/* <A data={data} />
      <B val={val} /> */}
      {/* *********Users*************** */}
      {/* <Getusers showusers={showusers} />
      <C users={users} /> */}
      {/* ********Debouncing************* */}
      <Debounce />
    </div>
  );
}

export default App;
