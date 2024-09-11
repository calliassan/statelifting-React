import logo from "./logo.svg";
import "./App.css";
import A from "./A";
import B from "./B";
import { useState } from "react";
import Getusers from "./users";
import C from "./c";
import D from "./D";

function App() {
  // const [val, setval] = useState(0);
  // const data = (valueA) => {
  //   setval(valueA);
  // };
  const [users, setusers] = useState([]);
  const showusers = (catchusers) => {
    setusers(catchusers);
  };

  return (
    <div className="App">
      {/* <A data={data} />
      <B val={val} /> */}
      <Getusers showusers={showusers} />
      <C users={users} />
      <D />
    </div>
  );
}

export default App;
