import './App.css';
import React, {useState, useEffect} from "react";
import User from './components/User';

function App() {
  const [name, setName ] = useState("Emirhan");
  const [number, setNumber ] = useState(2);
  useEffect(() => {
    console.log("App updated");
  });
  return (
    <div>
      <h1>{number}</h1>
      <h1>{name}</h1>
      <input 
      type="button"
      onClick={() => setNumber(Math.random())}
      value="Update Number"/>
      <input 
      type="button"
      onClick={() => setName("Aykan")}
      value="Update Name"/>

      <hr />
      <User name={name}/>
    </div>
  );
}

export default App;
